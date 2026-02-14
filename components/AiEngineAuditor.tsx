"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { processAuditStep, generateDeepAudit } from "@/app/actions/audit";
import { UploadCloud, Play, Loader2, FileText, Table, Zap } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AiEngineAuditor() {
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [csvContent, setCsvContent] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [report, setReport] = useState<any>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => setCsvContent((event.target?.result as string) || "");
    reader.readAsText(file);
  };

  const startAudit = async () => {
    if (!csvContent || !brandName || !category) return alert("Fill all fields.");
    setIsRunning(true);
    setReport(null);

    const rows = csvContent.split("\n").map(r => r.trim()).filter(r => r.length > 0);
    const insertedIds: string[] = [];

    try {
      for (const row of rows) {
        const [keyword, location] = row.split(",").map(s => s?.trim());
        const { data } = await supabase.from("audits").insert({
          brand_name: brandName, category, keyword, location: location || "Global", status: "pending"
        }).select("id").single();
        if (data) insertedIds.push(data.id);
      }

      for (const id of insertedIds) { 
        await processAuditStep(id); 
        await new Promise(r => setTimeout(r, 1000));
      }

      const finalReport = await generateDeepAudit(insertedIds);
      setReport(finalReport);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRunning(false);
    }
  };

  const downloadFile = (content: string, fileName: string, type: string) => {
    if (!content) return;
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (report) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-6 text-slate-200 py-10 animate-in fade-in duration-700">
        <header>
          <h1 className="text-2xl font-bold text-blue-500">AI Engine Optimizer</h1>
          <p className="text-slate-500 text-sm italic">Analysis for {brandName}</p>
        </header>

        {/* Visibility Scores */}
        <section className="bg-[#0A0A0A] border border-slate-800 rounded-lg p-6">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-6 tracking-widest">Visibility Summary</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {['findability', 'clarity', 'completeness'].map(k => (
              <div key={k} className="border border-slate-800 p-5 rounded bg-black/40 text-center">
                <p className="text-[9px] text-slate-500 uppercase mb-2 font-bold">{k}</p>
                <p className="text-4xl font-black text-red-500">{report.scores?.[k] || 0}</p>
              </div>
            ))}
          </div>
          <div className="border border-slate-800 p-5 rounded bg-black/40 text-center">
            <p className="text-[9px] text-slate-500 uppercase mb-2 font-bold">Overall</p>
            <p className="text-4xl font-black text-red-500">{report.scores?.overall || 0}</p>
          </div>
        </section>

        {/* Test Queries */}
        <section className="bg-[#0A0A0A] border border-slate-800 rounded-lg p-6">
          <h3 className="text-sm font-bold mb-4">Test Queries</h3>
          <div className="space-y-2">
            {report.test_queries?.map((q: string, i: number) => (
              <div key={i} className="bg-black/40 border-l-2 border-blue-600 p-3 text-[11px] font-mono text-slate-300">"{q}"</div>
            ))}
          </div>
        </section>

        {/* Issues */}
        <section className="bg-[#0A0A0A] border border-slate-800 rounded-lg p-6">
          <h3 className="text-sm font-bold mb-6">Issues Found</h3>
          <div className="space-y-4">
            {report.issues?.map((issue: any, i: number) => (
              <div key={i} className="bg-black/40 border-l-2 border-red-600 p-4">
                <h4 className="text-red-500 text-[11px] font-bold uppercase">{issue.title}</h4>
                <p className="text-slate-400 text-[10px]">{issue.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Downloads */}
        <section className="bg-[#0A0A0A] border border-slate-800 rounded-lg p-6">
          <h3 className="text-sm font-bold mb-4">Export Assets</h3>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => downloadFile(report.optimized_content?.llms_txt, 'llms.txt', 'text/plain')} className="flex items-center justify-center gap-2 bg-black border border-slate-800 py-3 rounded text-[10px] text-slate-400 font-bold hover:text-white transition-all">
              <FileText size={14} /> llms.txt
            </button>
            <button onClick={() => downloadFile(report.optimized_content?.optimized_catalog_csv, 'optimized_catalog.csv', 'text/csv')} className="flex items-center justify-center gap-2 bg-black border border-slate-800 py-3 rounded text-[10px] text-slate-400 font-bold hover:text-white transition-all">
              <Table size={14} className="text-emerald-500" /> Optimized Catalog
            </button>
          </div>
        </section>

        <button onClick={() => setReport(null)} className="w-full bg-slate-900 py-4 rounded text-[10px] font-bold uppercase text-slate-400 hover:bg-slate-800 transition-colors">
          Reset Auditor
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto py-20 px-6">
      <div className="bg-[#0A0A0A] border border-slate-800 rounded-lg p-8 space-y-6 shadow-2xl">
        <header className="space-y-1">
          <h1 className="text-2xl font-bold text-blue-500 tracking-tight text-center">AI Engine Optimizer</h1>
        </header>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Brand Name</label>
              <input className="w-full bg-black border border-slate-800 rounded p-3 text-white focus:border-blue-500 outline-none transition-all" placeholder="Nike" value={brandName} onChange={e => setBrandName(e.target.value)} />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Category</label>
              <input className="w-full bg-black border border-slate-800 rounded p-3 text-white focus:border-blue-500 outline-none transition-all" placeholder="Footwear" value={category} onChange={e => setCategory(e.target.value)} />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Catalog CSV</label>
            <div className="relative border-2 border-dashed border-slate-800 rounded-lg p-12 text-center hover:bg-slate-900/50 cursor-pointer transition-all group">
              <input type="file" accept=".csv" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
              <UploadCloud className="mx-auto text-slate-600 mb-2 group-hover:text-blue-500 transition-colors" size={32} />
              <p className="text-[10px] text-slate-400">{csvContent ? "File Loaded ✅" : "Upload catalog"}</p>
            </div>
          </div>

          <button onClick={startAudit} disabled={isRunning} className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 py-4 rounded font-bold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
            {isRunning ? <Loader2 className="animate-spin" size={18} /> : <Zap size={18} />}
            {isRunning ? "Scouting..." : "Analyze Catalog"}
          </button>
        </div>
      </div>
    </div>
  );
}