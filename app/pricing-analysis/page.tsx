"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PricingAnalysisPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-3 sm:px-4 py-4 sm:py-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors mb-4 sm:mb-8 text-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <article className="prose prose-invert prose-slate max-w-none">
          {/* Header */}
          <header className="mb-6 sm:mb-12 border-b border-slate-800 pb-4 sm:pb-8">
            <h1 className="text-2xl sm:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              The $1.4 Trillion AI Mystery: Rethinking How Value Flows
            </h1>
            <div className="text-slate-400 text-xs sm:text-sm">Lily David | November 2025</div>
          </header>

          {/* Introduction */}
          <section className="mb-6 sm:mb-12">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Sometimes, a single question can hang over an entire industry. In late 2025, an OpenAI investor asked CEO
              Sam Altman: "How does a company with $13B in revenue take on $1.4T in infrastructure commitments?" Altman,
              caught off-guard, famously replied, "Happy to find a buyer for your shares." It was a moment of public
              honesty and disbelief about how AI's economic engine actually works.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              It sent me on a two-week mission to figure out why do some players in AI make money hand over fist, while
              others light capital on fire?
            </p>
          </section>

          {/* Where Profits Live */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Where the Profits (and Losses) Live
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Recent industry data shows:
            </p>

            <div className="overflow-x-auto mb-4 sm:mb-6">
              <table className="w-full text-sm text-slate-300 border border-slate-800">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left p-2 sm:p-3 bg-slate-900">Layer</th>
                    <th className="text-left p-2 sm:p-3 bg-slate-900">Profitability Trend</th>
                    <th className="text-left p-2 sm:p-3 bg-slate-900">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="p-2 sm:p-3">NVIDIA</td>
                    <td className="p-2 sm:p-3">55% net margin</td>
                    <td className="p-2 sm:p-3">Hardware profits are insulated</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="p-2 sm:p-3">Hyperscalers</td>
                    <td className="p-2 sm:p-3">Positive, mixed</td>
                    <td className="p-2 sm:p-3">Big cloud strong, niche GPU clouds lose</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="p-2 sm:p-3">LLMs</td>
                    <td className="p-2 sm:p-3">Negative</td>
                    <td className="p-2 sm:p-3">~$1.15 lost per $1 revenue at scale</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="p-2 sm:p-3">Distribution</td>
                    <td className="p-2 sm:p-3">50 to 75% gross margin</td>
                    <td className="p-2 sm:p-3">Owning "the channel" wins</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3">Enterprises</td>
                    <td className="p-2 sm:p-3">Struggling for ROI</td>
                    <td className="p-2 sm:p-3">Only narrow use cases monetize</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The bottom line: hardware suppliers and platform distributors secure margins up front or at scale.
              Everyone else faces unpredictable returns, typically due to cost or usage based pricing models that miss
              value delivered.
            </p>
          </section>

          {/* Cost Optimization */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Why Cost Optimization Alone Doesn't Solve It
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Prevailing logic blames low hardware utilization or inefficient deployment for losses further downstream.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              I interviewed five experts representing different perspectives on AI economics:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold">Customer side:</span> ML Practitioner & Expert building enterprise ML
                  solutions
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold">Supply side:</span> Foundation Model Enterprise Sales head with
                  experience deploying AI across retail, logistics and banking sectors
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold">Third-party:</span> Observability platform engineer with visibility
                  across 10+ Enterprise customers
                </span>
              </li>
            </ul>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Primary research shows enterprises are actually budgeting for experimentation. Expecting only a handful of
              experiments to yield meaningful business returns. Their challenge is less "how to use 80% of our GPUs" and
              more "what's the fastest way to find a $10M win among $2M of discovery spend?" Cost-cutting helps, but
              discovering new value matters more.
            </p>
          </section>

          {/* Pricing Reality */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Perhaps, Pricing Isn't Catching Up With Reality
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Nearly everyone in the industry still charges based on resources.i.e. GPU-hours, tokens, or prepaid
              bundles, neither of which reflect the real value of successful adoption. Current models decouple what
              buyers pay from what they get. Sometimes heavy users get a great bargain at the provider's expense,
              sometimes the opposite. But both sides feel uneasy.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              In fact, most 2025 enterprise AI contracts now combine several pricing approaches like usage, tiered, hybrid, and nascent
              value-based resulting in confusion and volatile cost exposure.
            </p>
          </section>

          {/* Key Misalignments */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              The hypothesis: Misaligned Incentives 
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  1. Hardware vs. Outcome Pricing
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Vendors sell chips for up-front profit, selling into "peak demand," while software/application
                  providers absorb the long tail of discovery losses.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  2. Usage-Based vs. Value-Based
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Pricing is built on resource consumption, not business outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  3. Scaling Promises vs. Cost Realities
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  VCs and providers expected SaaS-like margin expansion as AI scales. But with variable, usage-driven
                  models, costs often grow linearly or worse. Pure API metering limits margin, while flat subscriptions
                  risk adverse selection or price wars, especially for LLM APIs.
                </p>
              </div>
            </div>
          </section>

          {/* What Leading Companies Are Trying */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">What Leading Companies Are Trying</h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <span className="font-semibold">Usage-Based Model (OpenAI/Anthropic):</span> Pay per token or seconds
                  of compute—aligns fees to activity, but can be volatile, hard to forecast, and risky for high-growth
                  use cases.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <span className="font-semibold">Hybrid Subscriptions (Google, Databricks):</span> Blend platform fees
                  with usage tiers, offering predictability but also complexity and budgeting confusion.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <span className="font-semibold">High-Value Bundles (Microsoft Copilot):</span> Add AI as a premium
                  "perk" to existing subscriptions, capturing value by tying to pre-committed spend, not marginal use.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <span className="font-semibold">Early Experiments with Outcome Pricing:</span> A few vendors—in
                  gaming, fintech, and ecommerce are piloting agreements that let clients pay for measurable results:
                  percent of incremental sales, cost savings, or productivity gains.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4 sm:mt-6">
              Despite their promise, these outcome-based deals remain rare as they require mature data, precise
              attribution, and tightly negotiated contracts that many enterprises aren't yet ready for at scale.
            </p>
          </section>

          {/* Hybrid Approach */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              The Hybrid Approach
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Imagine a world where companies pay a flat fee to try as many experiments as they want. When they find a
              real winner, the provider earns a share. Everyone assumes some risk, but everyone stands to benefit when
              an experiment pays off.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Sound obvious? It is. But measuring outcomes honestly, not just input costs, takes work. It needs robust
              tracking, good data, real trust.
            </p>
          </section>

          {/* Friction Points */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Friction Points Still to Solve</h2>
            <ul className="space-y-2 text-sm sm:text-base text-slate-300">
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  Reliable attribution of business value is complex and slow, especially outside high-visibility
                  verticals.
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  Upfront provider risk and working capital needs run counter to traditional SaaS or cloud economics.
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  Most billing and CPQ systems aren't designed for contract flexibility or mid-contract outcome
                  reconciliation
                </span>
              </li>
            </ul>
          </section>

          {/* Modern Pilot */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              What Would a Modern Pilot Look Like?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Instead of obsessing over per-GPU or API price, it would start with a 3–6 month "exploration
              retainer".i.e. a flat cost, unlimited use within reason. If a use case wins, shift to a negotiated
              production contract where the provider takes a defined share of business impact, whether productivity
              boost, cost reduction, or incremental profit.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              This approach is gaining ground in sectors where measurement is robust and attribution is trusted (e.g.,
              ecommerce recommendations, developer tools, game feature monetization).
            </p>
          </section>

          {/* Case Study */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Case Study: Ecommerce</h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Current Pricing:</h3>
                <p className="text-sm sm:text-base text-slate-300">
                  $450K/year (recommendations $200K + chatbot $100K + fraud detection $150K)
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Outcome-Based Pricing:</h3>
                <p className="text-sm sm:text-base text-slate-300 mb-2 sm:mb-3">
                  <span className="font-semibold">Exploration:</span> $50K/month × 3 months = $150K
                </p>
                <p className="text-sm sm:text-base text-slate-300 mb-2 sm:mb-3">
                  Retailer tests recommendations, chatbots, fraud detection across product catalog
                </p>
                <p className="text-sm sm:text-base text-slate-300 mb-2 sm:mb-3">
                  <span className="font-semibold">Production outcomes measured:</span>
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300 ml-4 sm:ml-6 mb-2 sm:mb-3">
                  <li>• Recommendations: $5M incremental sales (10% lift on $50M segment)</li>
                  <li>• Chatbot: $500K cost savings (50,000 tickets deflected × $10)</li>
                  <li>• Fraud detection: $2M fraud prevented</li>
                  <li>• Total value: $7.5M annually</li>
                </ul>
                <p className="text-sm sm:text-base text-slate-300 mb-2 sm:mb-3">
                  <span className="font-semibold">Pricing:</span>
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300 ml-4 sm:ml-6">
                  <li>• Recommendations: 8% = $400K (vs $200K SaaS)</li>
                  <li>• Chatbot: 40% = $200K (vs $100K per-seat)</li>
                  <li>• Fraud detection: 15% = $300K (vs $150K infrastructure)</li>
                  <li>• Total: $900K tied to $7.5M value = 8× ROI</li>
                </ul>
              </div>

              <div className="bg-slate-900 rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Why It Works:</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  Retailer pays 2× more ($900K vs $450K) because proven $7.5M value. CFO can justify: "$900K generates
                  $7.5M return" vs "$450K with unclear ROI."
                </p>
                <p className="text-sm sm:text-base text-slate-300">
                  <span className="font-semibold">Market Evidence:</span> Dynamic Yield (acquired by Mastercard for
                  $300M) offers performance-based pricing. Affirm charges percentage of GMV. Retailers paying 2-3× when
                  tied to revenue outcomes.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Conclusion</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              AI's $400B capital flow challenge is less a technology puzzle than a business model problem. Profits
              concentrate at the points in the stack where pricing is either predictable or value-capturing (hardware,
              distribution). Value-based and hybrid pricing pilots show potential to balance risk across the stack, but
              require investment in measurement, risk tolerance, and buyer education.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              The company that tries out a hybrid-outcome-based pricing contracts at scale, balancing provider risk and
              business impact, will reset how AI value pools for the next decade. But for now, hybrids, experimentation,
              and careful contract design define the actual frontier.
            </p>
          </section>

          {/* References */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">References & Further Reading</h2>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="space-y-2.5">
                <p className="text-slate-400">
                  <span className="text-slate-500">1.</span>{" "}
                  <a
                    href="https://zylo.com/blog/ai-cost/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors underline"
                  >
                    Zylo - AI Cost Management
                  </a>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">2.</span>{" "}
                  <a
                    href="https://bitskingdom.com/blog/ai-pricing-2025-costs-openai-claude-gemini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors underline"
                  >
                    Bits Kingdom - AI Pricing 2025: Costs of OpenAI, Claude, Gemini
                  </a>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">3.</span>{" "}
                  <a
                    href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors underline"
                  >
                    McKinsey - The State of AI
                  </a>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">4.</span>{" "}
                  <a
                    href="https://www.spglobal.com/market-intelligence/en/news-insights/research/2025/10/ai-infrastructure-midyear-2025-update-and-future-technology-considerations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors underline"
                  >
                    S&P Global - AI Infrastructure Midyear 2025 Update
                  </a>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">5.</span>{" "}
                  <a
                    href="https://metronome.com/blog/ai-pricing-in-practice-2025-field-report-from-leading-saas-teams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors underline"
                  >
                    Metronome - AI Pricing in Practice: 2025 Field Report
                  </a>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">6.</span>{" "}
                  <a
                    href="https://pilot.com/blog/ai-pricing-economics-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors underline"
                  >
                    Pilot - AI Pricing Economics 2025
                  </a>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">7.</span>{" "}
                  <a
                    href="https://www.chargebee.com/blog/pricing-ai-agents-playbook/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors underline"
                  >
                    Chargebee - Pricing AI Agents Playbook
                  </a>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">8.</span>{" "}
                  <a
                    href="https://www.mavvrik.ai/2025-state-of-ai-cost-management-research-finds-85-of-companies-miss-ai-forecasts-by-10/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors underline"
                  >
                    Mavvrik - 2025 State of AI Cost Management
                  </a>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">9.</span>{" "}
                  <a
                    href="https://www.cloudzero.com/state-of-ai-costs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors underline"
                  >
                    CloudZero - State of AI Costs
                  </a>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">10.</span>{" "}
                  <Link href="/dashboard" className="text-slate-300 underline hover:text-white transition-colors">
                    Follow the Money trail dashboard
                  </Link>{" "}
                  - Interactive financial tracking
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800">
            <div className="text-xs sm:text-sm text-slate-500 text-center">
              <p className="mb-2">Created by Lily David • November 2025</p>
              <p>
                Licensed under{" "}
                <a
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-300 transition-colors"
                >
                  CC BY-SA 4.0
                </a>
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  )
}
