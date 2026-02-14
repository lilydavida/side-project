"use server";

import { createClient } from "@/utils/supabase/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { tavily } from "@tavily/core";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
const tv = tavily({ apiKey: process.env.TAVILY_API_KEY });

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * 🛠️ DYNAMIC MODEL DISCOVERY (2026 Fix)
 * Fetches the list of models your key is authorized to use.
 */
async function getBestModel() {
  try {
    const url = `https://generativelanguage.googleapis.com/v1/models?key=${process.env.GOOGLE_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    const names: string[] = data.models?.map((m: any) => m.name) || [];

    // 2026 Preference Order: Gemini 3 > Gemini 2.5 > Gemini 2.0
    const selected = 
      names.find(n => n.includes("gemini-3-flash")) || 
      names.find(n => n.includes("gemini-2.5-flash")) || 
      names.find(n => n.includes("gemini-2.0-flash")) ||
      "models/gemini-1.5-flash"; // Final fallback string

    const finalName = selected.replace("models/", "");
    console.log(`🚀 Auditor using discovered model: ${finalName}`);
    return genAI.getGenerativeModel({ model: finalName });
  } catch (err) {
    // If discovery fails, try the newest stable alias
    return genAI.getGenerativeModel({ model: "gemini-3-flash" });
  }
}

export async function processAuditStep(auditId: string) {
  const supabase = createClient();
  const { data: job } = await supabase.from("audits").select("*").eq("id", auditId).single();

  if (!job || job.status !== "pending") return { success: true };

  try {
    const query = `${job.brand_name} ${job.category || ""} ${job.keyword}`;
    const searchResult = await tv.search(query, { search_depth: "basic", max_results: 5 });

    await supabase.from("audits")
      .update({ status: "analyzing", search_data: searchResult })
      .eq("id", auditId);

    return { success: true };
  } catch (err) {
    await supabase.from("audits").update({ status: "failed" }).eq("id", auditId);
    return { success: false };
  }
}

export async function generateDeepAudit(auditIds: string[], retryCount = 0): Promise<any> {
  const supabase = createClient();
  const { data: jobs } = await supabase.from("audits").select("*").in("id", auditIds);

  if (!jobs || jobs.length === 0) return null;

  try {
    const model = await getBestModel();
    const brand = jobs[0].brand_name;

    const context = jobs.map(j => ({
      keyword: j.keyword,
      results: JSON.stringify(j.search_data).slice(0, 2500)
    }));

    const prompt = `
      Perform a Brand Visibility Audit for "${brand}".
      Return ONLY valid JSON:
      {
        "scores": { "findability": 0-100, "clarity": 0-100, "completeness": 0-100, "overall": 0-100 },
        "test_queries": ["query1", "query2"],
        "issues": [{ "title": "string", "description": "string", "severity": "high" }],
        "optimized_content": { 
          "llms_txt": "markdown here",
          "optimized_catalog_csv": "CSV data here"
        }
      }
      Context: ${JSON.stringify(context)}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON block found in response.");
    
    const report = JSON.parse(jsonMatch[0]);

    await supabase.from("audits").update({ status: "complete", ai_analysis: report }).in("id", auditIds);
    return report;

  } catch (err: any) {
    if (err.status === 429 && retryCount < 3) {
      await sleep(10000 * (retryCount + 1));
      return generateDeepAudit(auditIds, retryCount + 1);
    }
    console.error("❌ Deep Audit failed permanently:", err.message);
    return null;
  }
}