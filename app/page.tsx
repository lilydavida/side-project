import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const dashboardTags = [
    { label: "Data Visualization", color: "blue" },
    { label: "Finance", color: "purple" },
    { label: "AI Infrastructure", color: "emerald" },
  ]

  const insightsTags = [
    { label: "Research", color: "slate" },
    { label: "Analysis", color: "amber" },
    { label: "Economics", color: "rose" },
  ]

  const getTagClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      slate: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    }
    return colorMap[color] || colorMap.slate
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        {/* Hero Quote Section */}
        <div className="mb-16 md:mb-24">
          <blockquote className="border-l-4 border-primary pl-6 md:pl-8">
            <p className="text-balance text-2xl font-light leading-relaxed text-foreground md:text-3xl lg:text-4xl">
              "Seek a fresh perspective by asking questions instead of relying on answers."
            </p>
            <footer className="mt-4 text-muted-foreground">— Roger Spitz</footer>
          </blockquote>
        </div>

        {/* Recent Work Section */}
        <section>
          <h2 className="mb-8 text-3xl font-semibold text-foreground md:text-4xl">Recent Work</h2>

          <div className="space-y-6">
            {/* Dashboard Link */}
            <Link
              href="/dashboard"
              className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {dashboardTags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`rounded-full px-3 py-1 text-xs font-medium border ${getTagClasses(tag.color)}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary md:text-2xl">
                    Follow the Money
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground md:text-base">
                    Revenue vs. contractual commitments across the 5-layer AI stack
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    Interactive dashboard tracking $400B in AI infrastructure spending. Visualize revenue performance,
                    fulfillment rates, and contractual obligations across chip makers, hyperscalers, GPU cloud
                    providers, foundation models, and distribution layers.
                  </p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </Link>

            {/* Insights Link */}
            <Link
              href="/insights"
              className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {insightsTags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`rounded-full px-3 py-1 text-xs font-medium border ${getTagClasses(tag.color)}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary md:text-2xl">
                    The $280B Misalignment: Why AI Pricing Models Don't Work
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground md:text-base">Research & Analysis</p>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    OpenAI loses $11.5B/quarter. CoreWeave's debt eats 21% of revenue. Everyone except NVIDIA and
                    distribution is unprofitable. A deep dive into where the AI economy breaks, why current models fail,
                    and what fixes it.
                  </p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </Link>
          </div>
        </section>

        {/* Footer Attribution */}
        <footer className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            Created by Lily David •{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              CC BY-SA 4.0
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
