"use client"

import { ArrowLeft, ArrowRight, Brain, Cloud, Cpu, Share2 } from "lucide-react"
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
              Stop Chasing CUDs, Start Tracking Dollars
            </h1>
            <div className="text-slate-400 text-xs sm:text-sm">November 2025</div>
          </header>

          {/* Introduction */}
          <section className="mb-6 sm:mb-12">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              An OpenAI investor asked CEO Sam Altman: "How does a company with $13B in revenue take on $1.4T in
              infrastructure spend?" It was a moment of public honesty and disbelief about how AI's economic engine
              actually works.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              It sent me on a two-week mission to figure out why do some players in AI make money hand over fist, while
              others light capital on fire?
            </p>
          </section>

          {/* Where Profits Live */}
          <section className="mb-6 sm:mb-12">
            <Link
              href="/ai-infrastructure-unit-economics"
              className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-900 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/20 transition-all mb-6"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex-1">
                  {/* Added layer icons to visually represent the connected ecosystem */}
                  <div className="flex items-center gap-0.5 sm:gap-3 mb-4 text-slate-500 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-0.5 sm:gap-2 px-1 py-0.5 sm:px-2 sm:py-1 rounded-md bg-slate-800/50 border border-slate-700/50">
                      <Cpu className="text-purple-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="text-[10px] sm:text-xs font-medium text-slate-300 leading-none">Chips</span>
                    </div>
                    <ArrowRight className="text-slate-600 w-2 h-2 sm:w-3 sm:h-3" />
                    <div className="flex items-center gap-0.5 sm:gap-2 px-1 py-0.5 sm:px-2 sm:py-1 rounded-md bg-slate-800/50 border border-slate-700/50">
                      <Cloud className="text-blue-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="text-[10px] sm:text-xs font-medium text-slate-300 leading-none">Cloud</span>
                    </div>
                    <ArrowRight className="text-slate-600 w-2 h-2 sm:w-3 sm:h-3" />
                    <div className="flex items-center gap-0.5 sm:gap-2 px-1 py-0.5 sm:px-2 sm:py-1 rounded-md bg-slate-800/50 border border-slate-700/50">
                      <Brain className="text-pink-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="text-[10px] sm:text-xs font-medium text-slate-300 leading-none">Models</span>
                    </div>
                    <ArrowRight className="text-slate-600 w-2 h-2 sm:w-3 sm:h-3" />
                    <div className="flex items-center gap-0.5 sm:gap-2 px-1 py-0.5 sm:px-2 sm:py-1 rounded-md bg-slate-800/50 border border-slate-700/50">
                      <Share2 className="text-emerald-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="text-[10px] sm:text-xs font-medium text-slate-300 leading-none">Apps</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    Explore AI ecosystem fulfillment health Dashboard
                  </h3>
                  <p className="text-slate-400 text-sm">
                    View the live breakdown of revenue vs. est. spend across Chips, GPU Cloud, LLMs, and Distribution
                    layers.
                  </p>
                </div>

                {/* Improved arrow visibility with a circle container and stronger hover effect */}
                <div className="flex-shrink-0 p-3 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all">
                  <ArrowRight
                    className="text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform"
                    size={24}
                  />
                </div>
              </div>
            </Link>
          </section>

          {/* Cost Optimization */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Falsified hypothesis</h2>
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
                  <span className="font-semibold">Supply side:</span> Foundation Model Enterprise Lead with experience
                  deploying AI across retail, logistics and banking sectors
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

          {/* Key Misalignments */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Working hypothesis: Misaligned Incentives
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
            </div>
          </section>

          {/* What Leading Companies Are Trying */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">What Leading Companies Are Trying</h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <span className="font-semibold">Usage-Based Model (OpenAI/Anthropic):</span> Pay per token aligns fees
                  to activity. Its hard to forecast, and risky for high-growth use cases.
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
                  gaming, fintech, and ecommerce—are piloting agreements that let clients pay for measurable results:
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
              The Hybrid solution: Flat + Outcome based pricing
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

          {/* Case Study */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Case Study: Mid-Market Fashion Retailer ($350M Annual Revenue)
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Company Profile */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Company Profile</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300">
                  <li>• Annual Revenue: $350M (65% online, 35% in-store)</li>
                  <li>• Monthly Site Visits: 2.5M</li>
                  <li>• Average Order Value: $85</li>
                  <li>• Customer Service Volume: ~15,000 tickets/month</li>
                </ul>
              </div>

              {/* The Challenge */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">The Challenge</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  The retailer had legacy systems and limited AI capabilities:
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300 ml-4 sm:ml-6 mb-2 sm:mb-3">
                  <li>• Basic rule-based product recommendations (2+ years old)</li>
                  <li>• Human-staffed customer service with no AI triage</li>
                  <li>• Fraud detection via third-party service with high false-positive rate (8%)</li>
                </ul>
                <p className="text-sm sm:text-base text-slate-300">
                  <span className="font-semibold">Previous Annual Spend on Tech:</span> $450K across these three areas
                </p>
              </div>

              {/* The Test */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  The Test: 6-Month Pilot (Q1–Q2 2024)
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mb-2 sm:mb-3">
                  <span className="font-semibold">Investment:</span> $150K ($25K/month × 6 months)
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  The retailer deployed three AI tools in a controlled pilot:
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300 ml-4 sm:ml-6">
                  <li>• AI Recommendations on 50% of product detail pages (A/B tested)</li>
                  <li>• AI Chatbot handling Tier-1 inquiries (order tracking, returns policy)</li>
                  <li>• Enhanced Fraud Detection with ML-based scoring</li>
                </ul>
              </div>

              {/* Measurement Approach */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Measurement Approach</h3>
                <div className="space-y-3 text-sm sm:text-base text-slate-300">
                  <div>
                    <p className="font-semibold mb-1.5">Recommendations (A/B Test):</p>
                    <ul className="space-y-1 ml-4 sm:ml-6">
                      <li>• Control Group: 50% of users saw legacy recommendations</li>
                      <li>• Treatment Group: 50% saw AI-powered recommendations</li>
                      <li>• Metric: Conversion rate and revenue per session</li>
                      <li>• Duration: 12 weeks of continuous testing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1.5">Chatbot (Controlled Rollout):</p>
                    <ul className="space-y-1 ml-4 sm:ml-6">
                      <li>• Baseline: Pre-pilot ticket volume and cost per ticket</li>
                      <li>• Test Period: 3 months of chatbot handling simple queries, with human escalation</li>
                      <li>• Metric: Deflection rate, customer satisfaction (CSAT), cost per resolution</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1.5">Fraud Detection (Pre/Post Comparison):</p>
                    <ul className="space-y-1 ml-4 sm:ml-6">
                      <li>• Baseline: 6 months of fraud data prior to pilot (Q3–Q4 2023)</li>
                      <li>• Test Period: 6 months with new system (Q1–Q2 2024)</li>
                      <li>• Metric: False positive rate, actual fraud losses, operational overhead</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  Results (6-Month Pilot Period)
                </h3>
                <div className="space-y-3 text-sm sm:text-base text-slate-300">
                  <div>
                    <p className="font-semibold mb-1.5">1. AI Recommendations</p>
                    <ul className="space-y-1 ml-4 sm:ml-6">
                      <li>• Conversion Lift: +3.2% (with ±0.8% confidence interval)</li>
                      <li>• Revenue Impact: ~$1.8M incremental revenue over 6 months</li>
                      <li className="text-slate-400 text-xs sm:text-sm">
                        Calculation: $350M × 65% online × 50% exposed × 3.2% lift = ~$1.8M
                      </li>
                      <li>• Annualized Projection: $3.6M (assuming sustained lift)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1.5">2. AI Chatbot</p>
                    <ul className="space-y-1 ml-4 sm:ml-6">
                      <li>• Tickets Deflected: 2,400/month (16% of total volume)</li>
                      <li className="ml-4">- 80% deflection for simple queries (tracking, FAQs)</li>
                      <li className="ml-4">- 5% deflection for complex queries (account issues, disputes)</li>
                      <li>• Cost Savings: ~$180K/year</li>
                      <li className="text-slate-400 text-xs sm:text-sm">
                        Calculation: 2,400 tickets × 12 months × $6.25 per ticket = $180K
                      </li>
                      <li>• CSAT Impact: Neutral (4.2/5 vs 4.3/5 for human agents)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1.5">3. Fraud Detection</p>
                    <ul className="space-y-1 ml-4 sm:ml-6">
                      <li>• False Positive Reduction: 8% → 4% (50% improvement)</li>
                      <li>• Operational Savings: $90K/year (less manual review time)</li>
                      <li>• Fraud Losses: $420K (6 months) vs $460K (prior 6 months)</li>
                      <li>• Net Benefit: ~$40K reduction + $90K operational savings = $130K/year</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Total Measured Value */}
              <div className="bg-slate-900 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                  Total Measured Value (First Year)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm sm:text-base text-left">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="pb-2 text-slate-300">Category</th>
                        <th className="pb-2 text-slate-300">Value</th>
                        <th className="pb-2 text-slate-300">Confidence Level</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2">Recommendations</td>
                        <td className="py-2">$3.6M/year</td>
                        <td className="py-2">High (A/B tested)</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2">Chatbot</td>
                        <td className="py-2">$180K/year</td>
                        <td className="py-2">Medium (assumes sustained deflection)</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2">Fraud Detection</td>
                        <td className="py-2">$130K/year</td>
                        <td className="py-2">Medium (small sample size for fraud events)</td>
                      </tr>
                      <tr className="font-semibold">
                        <td className="pt-2">Total</td>
                        <td className="pt-2">$3.91M/year</td>
                        <td className="pt-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pricing Comparison */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Pricing Comparison</h3>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-300">
                  <div>
                    <p className="font-semibold mb-1.5">Previous SaaS Model (Flat-Rate):</p>
                    <ul className="space-y-1 ml-4 sm:ml-6">
                      <li>• Total: $450K/year</li>
                      <li>• No attribution, no performance guarantees</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1.5">New Outcome-Based Model:</p>
                    <p className="mb-2">
                      <span className="font-semibold">Exploration Phase:</span> $150K (6-month pilot)
                    </p>
                    <p className="mb-1.5">
                      <span className="font-semibold">Production Pricing (Year 1):</span>
                    </p>
                    <ul className="space-y-1 ml-4 sm:ml-6">
                      <li>• Recommendations: 6% of incremental revenue = $216K</li>
                      <li>• Chatbot: 35% of cost savings = $63K</li>
                      <li>• Fraud Detection: 20% of combined savings = $26K</li>
                      <li className="font-semibold pt-1">• Total: $305K/year</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Why It Works */}
              <div className="bg-slate-900 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Why It Works:</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3">
                  Despite paying slightly less ($305K vs $450K), the retailer achieved $3.91M in measurable value with
                  outcome-based pricing. The exploration phase ($150K) de-risked deployment, and production fees scaled
                  with proven results. The CFO can now justify spend with: "$305K generated $3.91M return" vs "$450K
                  with unclear ROI."
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <span className="font-semibold">Key Success Factors:</span> Clear A/B testing, granular tracking,
                  multi-month measurement windows, and willingness to share upside. The pilot model allowed both sides
                  to learn before committing to full-scale deployment.
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
                  <Link
                    href="/ai-infrastructure-unit-economics"
                    className="text-slate-300 underline hover:text-white transition-colors"
                  >
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
              <p className="mb-2">November 2025</p>
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
