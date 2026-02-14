import { SearchSection } from "@/components/SearchSection";
// We will import the other components as we build them in steps 2, 3, 4

export default function AeoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <header className="max-w-4xl mx-auto pt-24 pb-16 px-6 text-center space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
          Case Study: K-Beauty Catalog
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          The Death of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Keyword Search</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Most E-commerce data is trapped in "dumb" text blobs. 
          See why standard search fails and how <span className="text-blue-400 font-bold">AEO</span> fixes it.
        </p>
      </header>

      {/* 2. THE PROBLEM (Legacy Search) */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-900">
        <div className="mb-12 text-center">
          <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest">
            Phase 1: The "Dumb" Search
          </span>
          <h2 className="text-3xl font-bold text-white mt-4">Try searching the "Legacy" Catalog</h2>
          <p className="text-slate-500 mt-2 max-w-lg mx-auto">
            This search engine only matches text strings. It has no brain. <br/>
            <span className="text-slate-400 italic">Try searching: "Alcohol free toner" or "Safe for pregnancy"</span>
          </p>
        </div>
        
        {/* The Component we built earlier */}
        <SearchSection mode="legacy" />
        
        
      </section>

      {/* Placeholder for Step 2... */}
    </main>
  );
}