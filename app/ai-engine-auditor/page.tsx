import AiEngineAuditor from "@/components/AiEngineAuditor";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// This MUST be a 'default' export for Next.js routing to work
export default function AuditorPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200">
      {/* Navigation Bar */}
      <nav className="border-b border-slate-900 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            Back to Lab
          </Link>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500/80">
            Internal Tool: AEO-V1
          </div>
        </div>
      </nav>

      {/* Main UI Component */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <AiEngineAuditor />
      </main>
    </div>
  );
}