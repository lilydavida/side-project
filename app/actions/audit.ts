"use server";

import { createClient } from "@/utils/supabase/server"; // uses your shared Supabase helper
import { GoogleGenerativeAI } from "@google/generative-ai";
import { tavily } from "@tavily/core";

type AuditStatus = "pending" | "scouting" | "analyzing" | "complete" | "failed";

interface AuditRow {
  id: string;
  status: AuditStatus;
  keyword: string;
  location: string | null;
  brand_name: string;
  search_data: unknown | null;
  ai_analysis: unknown | null;
}

const googleApiKey = process.env.GOOGLE_API_KEY;
const tavilyApiKey = process.env.TAVILY_API_KEY;

if (!googleApiKey) {
  throw new Error("GOOGLE_API_KEY is not set");
}
if (!tavilyApiKey) {
  throw new Error("TAVILY_API_KEY is not set");
}

const genAI = new GoogleGenerativeAI(googleApiKey);
const tv = tavily({ apiKey: tavilyApiKey });

export async function processAuditStep(auditId: string): Promise<{
  success: boolean;
  status: AuditStatus | null;
}> {
  const supabase = createClient();

  // 1. Fetch job
  const { data: job, error } = await supabase
    .from("audits")
    .select("*")
    .eq("id", auditId)
    .single<AuditRow>();

  if (error) {
    console.error("❌ Failed to load audit job:", error);
    return { success: false, status: null };
  }

  if (!job || job.status === "complete" || job.status === "failed") {
    return { success: true, status: job?.status ?? null };
  }

  try {
    switch (job.status) {
      // 🕵️ PHASE 1: SCOUTING (The "Eyes")
      case "pending": {
        await supabase
          .from("audits")
          .update({ status: "scouting" as AuditStatus })
          .eq("id", auditId);

        const query = [job.keyword, job.location]
          .filter(Boolean)
          .join(" near ");

        console.log(`🕵️ AI engine optimisation Agent scouting: ${query}`);

        const searchResult = await tv.search(query, {
          search_depth: "basic",
          include_answer: true,
          max_results: 5,
        });

        await supabase
          .from("audits")
          .update({
            status: "analyzing" as AuditStatus,
            search_data: searchResult,
          })
          .eq("id", auditId);

        return { success: true, status: "analyzing" };
      }

      // 🧠 PHASE 2: ANALYZING (The "Brain")
      case "analyzing": {
        const model = genAI.getGenerativeModel({
          // Use a currently available Gemini model
          model: "gemini-2.0-flash",
        });

        // Keep payload reasonable for the model
        const serializedSearchData = JSON.stringify(job.search_data ?? "", null, 2).slice(0, 8000);

        const prompt = `
Role: AI engine optimisation Auditor.
Task: Analyze these search results to see if the brand "${job.brand_name}" appears prominently.

Search Context:
- Keyword: "${job.keyword}"
- Location: "${job.location ?? "N/A"}"

Search Results JSON:
${serializedSearchData}

Return strictly valid JSON with this structure (no markdown, no comments):

{
  "is_visible": boolean,
  "sentiment": string,
  "pricing_accuracy": string,
  "missing_topics": string[],
  "geo_score": number
}
        `.trim();

        const result = await model.generateContent(prompt);
        let text = result.response.text().trim();

        // Strip possible fences if the model adds them anyway
        text = text.replace(/|```/g, "").trim();

        let analysis: unknown;
        try {
          analysis = JSON.parse(text);
        } catch (parseError) {
          console.error("❌ Failed to parse AI engine optimisation analysis JSON:", {
            text,
            parseError,
          });
          analysis = {
            is_visible: false,
            sentiment: "unknown",
            pricing_accuracy: "unknown",
            missing_topics: [],
            geo_score: 0,
          };
        }

        await supabase
          .from("audits")
          .update({
            status: "complete" as AuditStatus,
            ai_analysis: analysis,
          })
          .eq("id", auditId);

        return { success: true, status: "complete" };
      }

      default:
        // If we add more states later, keep this safe
        return { success: true, status: job.status };
    }
  } catch (error) {
    console.error("❌ AI engine optimisation Agent failed:", error);
    await supabase
      .from("audits")
      .update({ status: "failed" as AuditStatus })
      .eq("id", auditId);

    return { success: false, status: "failed" };
  }
}
