import AiEngineAuditor from "@/components/AiEngineAuditor";

export default function AiEngineAuditorPage() {
  return (
    <main className="min-h-screen bg-black text-slate-200 selection:bg-indigo-500/30 font-sans">
      {/* 1. HERO SECTION */}
      <div className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/20 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            AI Engine Optimisation
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Optimize for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
              AI Overview Era
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Traditional SEO tracks links. <strong>AI Optimisation tracks citations.</strong>
            <br />
            Our Agents browse the web as real users to see if ChatGPT, Gemini, and Perplexity are
            recommending <em>your brand</em> as the answer.
          </p>
        </div>
      </div>

      {/* 2. THE DASHBOARD APPLICATION */}
      <div className="py-12 bg-black min-h-[600px]">
        <AiEngineAuditor />
      </div>

      {/* 3. EDUCATIONAL FOOTER */}
      <div className="border-t border-slate-900 bg-slate-950 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Why &quot;Brand Name&quot;?</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              AI engines map keywords to <strong>entities</strong>. We need your Brand Name to
              identify if the AI recognizes you as a trusted entity in your category.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">How it Works</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              1. We deploy an autonomous agent to search your keywords.
              <br />
              2. It reads the top AI-generated answers.
              <br />
              3. It scores your <strong>Visibility</strong> and <strong>Sentiment</strong>.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">The Metric: Optimisation Score</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              A composite score (0-100) based on:
              <br />
              • <strong>Mention:</strong> Are you in the top answer?
              <br />
              • <strong>Authority:</strong> Is the context positive?
              <br />
              • <strong>Accuracy:</strong> Is your pricing/info correct?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

