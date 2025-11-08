import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const dashboardTags = [{ label: "AI Infrastructure" }, { label: "Revenue Analytics" }, { label: "Financial Data" }]

  const insightsTags = [{ label: "AI Economics" }, { label: "Pricing Strategy" }, { label: "Market Analysis" }]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-16 lg:py-20">
        <div className="mb-8 md:mb-12">
          <p className="text-pretty text-sm leading-relaxed text-slate-300 md:text-base">
            Testing hypotheses through human validation and first-principles analysis with help from LLMs.{" "}
            <a
              href="https://www.linkedin.com/in/lily-david-5a726628/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 underline decoration-slate-600 underline-offset-2 transition-colors hover:text-slate-200 hover:decoration-slate-400"
            >
              Open to hear your ideas
            </a>
            .
          </p>
        </div>

        <section>
          <h2 className="mb-6 text-2xl font-medium text-slate-200 md:mb-8 md:text-3xl">Lily's recent work</h2>

          <div className="space-y-4 md:space-y-5">
            {/* Dashboard Link */}
            <Link
              href="/dashboard"
              className="group block rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-slate-700 hover:bg-slate-900/70 md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap gap-1.5 md:mb-3 md:gap-2">
                    {dashboardTags.map((tag) => (
                      <span
                        key={tag.label}
                        className="rounded border border-slate-700/50 bg-slate-800/30 px-2 py-0.5 text-[10px] font-medium text-slate-400 md:text-xs"
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-1.5 text-lg font-medium text-slate-200 md:mb-2 md:text-xl">
                    Follow the Money trail
                  </h3>
                  <p className="mb-2 text-xs text-slate-500 md:mb-2.5 md:text-sm">
                    Revenue vs. contractual commitments across the 5-layer AI stack
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                    Interactive dashboard tracking $400B in AI infrastructure spending.{" "}
                    <span className="hidden md:inline">
                      Visualize revenue performance, fulfillment rates, and contractual obligations across chip makers,
                      hyperscalers, GPU cloud providers, foundation models, and distribution layers.
                    </span>
                  </p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-slate-600 transition-colors group-hover:text-slate-400 md:h-5 md:w-5" />
              </div>
            </Link>

            {/* Insights Link */}
            <Link
              href="/insights"
              className="group block rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-slate-700 hover:bg-slate-900/70 md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap gap-1.5 md:mb-3 md:gap-2">
                    {insightsTags.map((tag) => (
                      <span
                        key={tag.label}
                        className="rounded border border-slate-700/50 bg-slate-800/30 px-2 py-0.5 text-[10px] font-medium text-slate-400 md:text-xs"
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-1.5 text-lg font-medium text-slate-200 md:mb-2 md:text-xl">
                    The $280B Misalignment: Why AI Pricing Models Don't Work
                  </h3>
                  <p className="mb-2 text-xs text-slate-500 md:mb-2.5 md:text-sm">Research & Analysis</p>
                  <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                    OpenAI loses $11.5B/quarter. CoreWeave's debt eats 21% of revenue.{" "}
                    <span className="hidden md:inline">
                      Everyone except NVIDIA and distribution is unprofitable. A deep dive into where the AI economy
                      breaks, why current models fail, and what fixes it.
                    </span>
                  </p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-slate-600 transition-colors group-hover:text-slate-400 md:h-5 md:w-5" />
              </div>
            </Link>
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 md:mt-16 md:pt-8 md:text-sm">
          <p>
            Created by Lily David •{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400"
            >
              CC BY-SA 4.0
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
