"use client";

import { useState } from "react";
import type React from "react";
import { createClient } from "@supabase/supabase-js";
import { processAuditStep } from "@/app/actions/audit";
import {
  UploadCloud,
  Play,
  Loader2,
  CheckCircle2,
  AlertCircle,
  FileJson,
  TrendingUp,
} from "lucide-react";

// Client-side Supabase (anon key, respects RLS)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default function AiEngineAuditor() {
  const [brandName, setBrandName] = useState("");
  const [csvContent, setCsvContent] = useState("");
  const [audits, setAudits] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // 1. Handle File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => setCsvContent((event.target?.result as string) || "");
    reader.readAsText(file);
  };

  // 2. Initialize Jobs in DB
  const startAudit = async () => {
    if (!csvContent || !brandName) {
      alert("Please enter brand name and upload CSV");
      return;
    }

    setIsRunning(true);

    const rows = csvContent
      .split("\n")
      .map((r) => r.trim())
      .filter((r) => r.length > 0);

    const newAudits: any[] = [];

    for (const row of rows) {
      const [keyword, location] = row.split(",").map((s) => s?.trim());
      if (!keyword) continue;

      const { data, error } = await supabase
        .from("audits")
        .insert({
          brand_name: brandName,
          keyword,
          location: location || "Global",
          status: "pending",
        })
        .select()
        .single();

      if (error) {
        console.error("Failed to create audit job", error);
        continue;
      }

      if (data) newAudits.push(data);
    }

    setAudits(newAudits);
    processQueue(newAudits);
  };

  // 3. The "Bucket Brigade" Loop
  const processQueue = async (initialAudits: any[]) => {
    let activeAudits = [...initialAudits];

    while (activeAudits.some((a) => a.status !== "complete" && a.status !== "failed")) {
      for (const audit of activeAudits) {
        if (audit.status === "complete" || audit.status === "failed") continue;

        await processAuditStep(audit.id);

        // Rate-limit
        await new Promise((r) => setTimeout(r, 1500));
      }

      const { data, error } = await supabase
        .from("audits")
        .select("*")
        .in("id", activeAudits.map((a) => a.id));

      if (error) {
        console.error("Failed to refresh audits", error);
        break;
      }

      if (data) {
        activeAudits = data;
        setAudits(data);
      }
    }

    setIsRunning(false);
  };

  // 4. Download Report
  const downloadAssets = () => {
    const completed = audits.filter((a) => a.status === "complete");
    if (completed.length === 0) return;

    const report = completed.map((a) => ({
      query: `${a.keyword} (${a.location})`,
      visible: a.ai_analysis?.is_visible ? "YES" : "NO",
      score: a.ai_analysis?.geo_score || 0, // keep geo_score key for compatibility
      missing: a.ai_analysis?.missing_topics?.join(", ") || "None",
    }));

    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ai-engine-optimisation-report-${brandName}.json`;
    a.click();
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 p-6">
      {/* INPUT PANEL */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-slate-400 text-sm font-semibold uppercase tracking-wider">
              Target Brand
            </label>
            <input
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none text-lg"
              placeholder="e.g. Nike, Starbucks..."
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>
          <div className="space-y-4">
            <label className="text-slate-400 text-sm font-semibold uppercase tracking-wider">
              Target List (CSV)
            </label>
            <div className="relative border-2 border-dashed border-slate-700 rounded-lg p-8 hover:bg-slate-800/50 transition-colors text-center group cursor-pointer">
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <UploadCloud
                className="mx-auto text-slate-500 group-hover:text-blue-400 mb-2 transition-colors"
                size={32}
              />
              <p className="text-slate-400 font-medium">
                {csvContent ? "CSV Loaded – Ready" : "Drop CSV: keyword, location"}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={startAudit}
          disabled={isRunning || !csvContent}
          className={`mt-8 w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all ${
            isRunning
              ? "bg-slate-800 text-slate-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 hover:scale-[1.01]"
          }`}
        >
          {isRunning ? (
            <>
              <Loader2 className="animate-spin" /> Agents researching…
            </>
          ) : (
            <>
              <Play size={24} /> Launch AI engine optimisation audit
            </>
          )}
        </button>
      </div>

      {/* LIVE FEED */}
      {audits.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-500" />
              AI engine optimisation live feed
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {audits.filter((a) => a.status === "complete").length} / {audits.length} DONE
            </span>
          </div>

          <div className="divide-y divide-slate-800 max-h-[600px] overflow-y-auto">
            {audits.map((audit) => (
              <div
                key={audit.id}
                className="p-5 hover:bg-slate-800/30 transition-colors grid grid-cols-12 gap-4 items-center animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                {/* Status */}
                <div className="col-span-1 flex justify-center">
                  {audit.status === "pending" && (
                    <div className="w-3 h-3 bg-slate-600 rounded-full" />
                  )}
                  {audit.status === "scouting" && (
                    <Loader2 className="text-blue-400 animate-spin" size={20} />
                  )}
                  {audit.status === "analyzing" && (
                    <Loader2 className="text-purple-400 animate-spin" size={20} />
                  )}
                  {audit.status === "complete" && (
                    <CheckCircle2 className="text-emerald-400" size={20} />
                  )}
                  {audit.status === "failed" && (
                    <AlertCircle className="text-red-500" size={20} />
                  )}
                </div>

                {/* Query Info */}
                <div className="col-span-4">
                  <div className="font-medium text-slate-200">{audit.keyword}</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    {audit.location}
                  </div>
                </div>

                {/* Analysis Result */}
                <div className="col-span-7">
                  {audit.ai_analysis ? (
                    <div className="flex items-center gap-4">
                      <span
                        className={`px-2.5 py-0.5 text-xs rounded-full font-bold tracking-wide border ${
                          audit.ai_analysis.is_visible
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-red-500/10 text-red-400 border-red-500/20"
                        }`}
                      >
                        {audit.ai_analysis.is_visible ? "VISIBLE" : "HIDDEN"}
                      </span>

                      <div className="flex-1 flex flex-col gap-1">
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden w-full">
                          <div
                            className={`h-full rounded-full ${
                              audit.ai_analysis.geo_score > 70
                                ? "bg-emerald-500"
                                : audit.ai_analysis.geo_score > 40
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${audit.ai_analysis.geo_score}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-mono font-bold text-slate-400 w-8 text-right">
                        {audit.ai_analysis.geo_score}
                      </span>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-500 italic flex items-center gap-2">
                      {audit.status === "scouting" && "Searching web…"}
                      {audit.status === "analyzing" && "Reading content…"}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          {!isRunning && audits.some((a) => a.status === "complete") && (
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
              <button
                onClick={downloadAssets}
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors border border-slate-700"
              >
                <FileJson size={16} /> Download JSON report
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}