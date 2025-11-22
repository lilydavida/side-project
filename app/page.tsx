import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllPages } from "@/lib/cms"

export default function HomePage() {
  const pages = getAllPages()

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-16 lg:py-20">
        <div className="mb-8 md:mb-12">
          <p className="text-pretty text-sm leading-relaxed text-slate-300 md:text-base">
            Studying how things work, Analysing behaviour and Writing to learn.
          </p>
        </div>

        <section>
          <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
            <h2 className="text-2xl font-medium text-slate-200 md:text-3xl">Lily's recent posts</h2>
            <a
              href="https://www.linkedin.com/in/lily-david-5a726628/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 transition-colors hover:text-slate-200 md:text-sm"
            >
              Connect on LinkedIn <ArrowRight className="inline h-3 w-3 md:h-4 md:w-4" />
            </a>
          </div>

          <div className="space-y-4 md:space-y-5">
            {pages.map((page) => (
              <Link
                key={page.id}
                href={page.href}
                className="group block rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-slate-700 hover:bg-slate-900/70 md:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap gap-1.5 md:mb-3 md:gap-2">
                      {page.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-slate-700/50 bg-slate-800/30 px-2 py-0.5 text-[10px] font-medium text-slate-400 md:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-1.5 text-lg font-medium text-slate-200 md:mb-2 md:text-xl">{page.title}</h3>
                    <p className="mb-2 text-xs text-slate-500 md:mb-2.5 md:text-sm">{page.subtitle}</p>
                    <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                      {page.description.split(".")[0]}.{" "}
                      <span className="hidden md:inline">{page.description.split(".").slice(1).join(".")}</span>
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-slate-600 transition-colors group-hover:text-slate-400 md:h-5 md:w-5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 md:mt-16 md:pt-8 md:text-sm">
          <p>
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
