"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { PAGE_CONFIG } from "@/lib/page-config"

export default function InsightsPage() {
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
              {PAGE_CONFIG.insights.title}
            </h1>
            <div className="text-slate-400 text-xs sm:text-sm">Lily David | November 2025</div>
          </header>

          {/* The Question */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">The Question doing the rounds</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              In November 2025, OpenAI investor Brad Gerstner asked Sam Altman: "How does a company with $13B in revenue
              sustain $1.4T in infrastructure commitments?"
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Altman's response? <span className="italic">"Happy to find a buyer for your shares."</span>
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              If OpenAI's CEO doesn't know, nobody does. I spent two weeks mapping $400B in AI infrastructure to
              understand why profits concentrate at NVIDIA (55% margins) and distribution players like Google (50-75%
              margins), while foundation models (OpenAI losing $11.5B quarterly) and GPU clouds (CoreWeave losing $1.5B
              annually) burn cash.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              My answer: It's potentially a pricing problem.
            </p>
          </section>

          {/* What I Got Wrong */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">What I Got Wrong</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Initially, I started analyzing underutilized GPU capacity, I was convinced that cost optimization was the
              problem. Primary research challenged this: enterprises expect infrastructure costs during experimentation.
              That's the cost of discovery, not inefficiency.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Back to first principles: What are enterprises actually trying to solve?
            </p>
            <div className="bg-slate-900 border-l-4 border-slate-700 pl-4 sm:pl-6 py-3 sm:py-4 my-4 sm:my-6">
              <p className="text-sm sm:text-base text-slate-300 mb-2">
                Not: <span className="italic">"How do I use 80% of capacity instead of 40%?"</span>
              </p>
              <p className="text-sm sm:text-base text-slate-300">
                But:{" "}
                <span className="italic">
                  "How do I find the one experiment out of 100 that generates $10M in revenue?"
                </span>
              </p>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              If you spend $2M running 100 experiments and find one generating $10M, you got 5× return. Optimizing $2M
              down to $1.2M doesn't matter. Finding winners faster does.
            </p>
          </section>

          {/* Who I Talked To */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Who I Talked To</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              I interviewed five practitioners representing different perspectives on AI economics:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-slate-300">
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold">Customer side:</span> ML Practitioner & Expert ($500K GPU spend)
                  building enterprise ML solutions
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold">Supply side:</span> Hyperscaler AI adoption lead and infrastructure
                  vendor (100+ deployments)
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold">Third-party:</span> Observability platform engineer with visibility
                  across 1,000+ customers
                </span>
              </li>
            </ul>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3 sm:mt-4">
              This cross-section revealed patterns invisible from any single vantage point.
            </p>
          </section>

          {/* Five Layers */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              The Five Layers (And Who's Making Money)
            </h2>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-300">
              <p>
                <span className="font-semibold">Layer 1: NVIDIA</span> - 55% net margin ✅
              </p>
              <p>
                <span className="font-semibold">Layer 2: Infrastructure</span> - Mixed (hyperscalers profitable, GPU
                clouds losing)
              </p>
              <p>
                <span className="font-semibold">Layer 3: Foundation Models</span> - Losing $1.15 per $1 revenue ❌
              </p>
              <p>
                <span className="font-semibold">Layer 4: Distribution</span> - 50-75% gross margin ✅
              </p>
              <p>
                <span className="font-semibold">Layer 5: Enterprises</span> - Can't find revenue-generating use cases ❌
              </p>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4 sm:mt-6">
              Notice the pattern? Only Layers 1 and 4 make money. Let me show you why Layers 3 and 5 are where the unit
              economics breaks down.
            </p>
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-900 border border-slate-800 rounded-lg">
              <p className="text-sm sm:text-base text-slate-300 mb-2">
                Want to explore the detailed financials behind each layer?
              </p>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                View Interactive Dashboard →
              </Link>
            </div>
          </section>

          {/* Layer 3 Deep Dive */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              LLMs (Where The Losses Concentrate)
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 mt-4 sm:mt-6">
              OpenAI's unit economics:
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">
              <li>• Revenue: $13B annualized</li>
              <li>• Quarterly loss: $11.5B</li>
              <li>• Per-user: $20/month subscription, $34-58/month cost</li>
              <li>• Losing $14-38 per user per month</li>
            </ul>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              <span className="font-semibold text-white">Why this fails:</span> Subscriptions decouple payment from
              consumption. Heavy users cost $50 but pay $20. Light users cost $5 but pay $20. Can't price-discriminate
              without losing power users to competitors.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Token pricing ties to compute costs, not value delivered. A coding assistant creating $40,000/year value
              gets priced at $300 based on token costs.
            </p>

            <div className="bg-slate-900 border-l-4 border-slate-700 pl-4 sm:pl-6 py-3 sm:py-4 my-4 sm:my-6">
              <p className="text-sm sm:text-base text-slate-300 font-semibold">The brutal math:</p>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                More customers = more revenue BUT also more compute costs. Can't scale to profitability when unit
                economics are negative at every scale point.
              </p>
            </div>
          </section>

          {/* Layer 5 Deep Dive */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Enterprises (The Discovery Problem)
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Primary research revealed a consistent pattern: AI agents haven't achieved the breakthrough everyone
              expected. The only consistently revenue-generating use cases remain narrow—developer productivity tools
              (GitHub Copilot), marketing content generation, and basic research assistance.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-6">
              Sales automation, customer service agents, and complex business process automation still struggle to
              deliver reliable results.
            </p>

            <div className="bg-slate-900 rounded-lg p-4 sm:p-6 my-4 sm:my-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">The Enterprise Dilemma:</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">
                Spend $2M/year on AI infrastructure running 100 experiments to find ONE that generates $10M revenue.
              </p>

              <h4 className="text-sm sm:text-base font-semibold text-white mb-2">Current Pricing Reality:</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">
                <li>• Pay $2M regardless of whether experiments succeed</li>
                <li>• If all 100 fail: Lost $2M</li>
                <li>• If 1 succeeds: Paid $2M to find it, but still paying per GPU-hour/API-token going forward</li>
              </ul>

              <h4 className="text-sm sm:text-base font-semibold text-white mb-2">What Enterprises Want:</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300">
                <li>• Flat exploration budget for 100 experiments</li>
                <li>• Pay based on outcomes when something works</li>
                <li>• Revenue-share: Give providers 20% of the $10M generated</li>
              </ul>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              But nobody prices AI this way. Everyone prices based on infrastructure costs (GPU-hours, API tokens), not
              business outcomes (revenue generated, costs saved).
            </p>
          </section>

          {/* Three Misalignments */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">The Three Misalignments</h2>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  #1: Hardware Pricing vs Software Consumption
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  NVIDIA sells GPUs for $30-50K upfront, gets paid regardless of downstream success. Customers provision
                  for peak scenarios, averaging 30-40% utilization. This isn't inefficiency—it's exploration cost. But
                  the pricing model treats capacity as consumed resource, not option value.
                </p>
                <p className="text-sm sm:text-base text-slate-300 italic">
                  Result: NVIDIA prints 55% margins while downstream players bear the mismatch.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  #2: Cost-Based vs Value-Based Pricing
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  Current AI pricing (GPU-hours, API tokens) is cost-plus: providers calculate costs and add margin. But
                  customers evaluate based on business outcomes.
                </p>
                <div className="bg-slate-900 rounded-lg p-3 sm:p-4 my-3 sm:my-4">
                  <p className="text-sm sm:text-base text-slate-300 mb-2">
                    <span className="font-semibold">Example:</span> A coding assistant saves 2 hours/day per developer =
                    $40,000/year value.
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 mb-2">
                    • Customer would pay $10,000 (25% of value)
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 mb-2">
                    • Provider prices at $300 based on token costs
                  </p>
                  <p className="text-sm sm:text-base text-slate-300">• 95% of value left uncaptured</p>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  From practitioner interviews: Enterprises accept infrastructure costs during exploration. The problem
                  is pricing doesn't align with the discovery process. Pay-as-you-go penalizes experimentation.
                  Subscriptions don't scale with value.
                </p>
                <p className="text-sm sm:text-base text-slate-300 italic">
                  Result: Providers underprice winners, lose money on exploration. Neither party aligned.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  #3: VC Expectations vs Sustainable Economics
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  VCs funded OpenAI/Anthropic expecting SaaS economics where scale drives costs down. But foundation
                  model pricing has opposite dynamics:
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">
                  <li>• More users = more compute costs (linear scaling)</li>
                  <li>• Can't raise prices (lose users to competitors)</li>
                  <li>• Token pricing commoditizes models</li>
                </ul>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  Meanwhile, Microsoft/Google price differently: per-seat subscriptions independent of usage, bundled
                  with existing products, aligned with enterprise budgets.
                </p>
                <p className="text-sm sm:text-base text-slate-300 italic">
                  Result: OpenAI loses $1.15 per $1 revenue. Microsoft makes 50-75% margins on Copilot. Anthropic spends
                  104% of revenue on AWS before R&D/personnel.
                </p>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              The Hypothesis: Outcome-Based Pricing
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Exploration Phase (3-6 months):</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Flat $50K-100K/month, unlimited usage. Run 100 experiments. Providers absorb infrastructure costs.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Production Phase:</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  Pay based on measurable outcomes:
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300">
                  <li>• Coding assistant: $X per developer hour saved</li>
                  <li>• Customer service: $Y per ticket deflected</li>
                  <li>• Revenue generation: Z% of incremental revenue</li>
                </ul>
              </div>

              <div className="bg-slate-900 rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Why This Works:</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-300">
                  <li>
                    <span className="font-semibold">For enterprises:</span> No cost anxiety during exploration, costs
                    scale with value
                  </li>
                  <li>
                    <span className="font-semibold">For foundation models:</span> Revenue share on successful cases
                    funds exploration losses
                  </li>
                  <li>
                    <span className="font-semibold">For infrastructure:</span> Enterprises commit to production,
                    reducing churn
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Now */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Why Outcome-Based Pricing Is Possible Now (But Wasn't Before)
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-6">
              Three factors converged to make outcome-based pricing viable:
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  1. Measurement Infrastructure Maturity
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mb-2">
                  <span className="font-semibold">2020:</span> Limited attribution, manual tracking, siloed analytics
                </p>
                <p className="text-sm sm:text-base text-slate-300 mb-2 sm:mb-3">
                  <span className="font-semibold">2025:</span> A/B testing platforms, multi-touch attribution, real-time
                  dashboards, ML-powered causal inference
                </p>
                <p className="text-sm sm:text-base text-slate-300">
                  <span className="font-semibold">Example:</span> Modern gaming analytics can track exact player
                  retention lift from AI-driven NPCs. Ecommerce platforms measure incremental sales from recommendations
                  with 95% confidence intervals.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">2. Market Precedent Validation</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300">
                  <li>• Unity AI Marketplace: Revenue-share models showing 3-5× higher customer willingness to pay</li>
                  <li>• Affirm (fintech): Charges merchants percentage of sales driven, not flat SaaS fee</li>
                  <li>• Dynamic Yield (Mastercard): Performance-based pricing for personalization</li>
                </ul>
                <p className="text-sm sm:text-base text-slate-300 mt-2 sm:mt-3">
                  Evidence: Customers in adjacent markets already pay 2-3× more when pricing tied to outcomes vs inputs.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  3. Financial Pressure Creates Urgency
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Foundation models losing $1.15 per $1 revenue creates existential pressure to redesign pricing. Status
                  quo is unsustainable. Altman's non-answer to Gerstner proved the current model has no path to
                  profitability.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4 sm:mt-6 font-medium">
              The infrastructure for outcome-based pricing exists. The question is who implements it first.
            </p>
          </section>

          {/* Case Studies */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Case Study: Gaming</h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Current Pricing:</h3>
                <p className="text-sm sm:text-base text-slate-300">
                  $1.5M/year (GPU $1M + APIs $500K) regardless of engagement impact
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Outcome-Based Pricing:</h3>
                <p className="text-sm sm:text-base text-slate-300 mb-2 sm:mb-3">
                  <span className="font-semibold">Exploration:</span> $100K/month × 6 months = $600K
                </p>
                <p className="text-sm sm:text-base text-slate-300 mb-2 sm:mb-3">
                  Studio tests AI-driven NPCs, procedural content, player matching across 5 games
                </p>
                <p className="text-sm sm:text-base text-slate-300 mb-2 sm:mb-3">
                  <span className="font-semibold">Production:</span> Game generates $10M incremental revenue from AI
                  features
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300 ml-4 sm:ml-6">
                  <li>• AI vendor: 15% = $1.5M/year</li>
                  <li>• Infrastructure: 5% = $500K/year</li>
                  <li>• Total: $2M tied to $10M measurable value</li>
                </ul>
              </div>

              <div className="bg-slate-900 rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Why It Works:</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  Studio pays more ($2M vs $1.5M) but proven $10M return = 5× ROI. AI vendor earns $1.5M (vs $500K
                  APIs). Infrastructure reduces churn. All parties aligned: studio succeeds = everyone succeeds.
                </p>
                <p className="text-sm sm:text-base text-slate-300">
                  <span className="font-semibold">Market Evidence:</span> Unity AI Marketplace moving toward
                  revenue-share. Roblox Creator Hub testing outcome-based models. Early data shows 3-5× higher
                  willingness to pay when pricing tied to player engagement outcomes.
                </p>
              </div>
            </div>
          </section>

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

          {/* If I Were PM */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              What I'd Build if I had the chance
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-sm sm:text-base text-slate-300 mb-2">
                  <span className="font-semibold text-white">Product:</span> Outcome-Based Pricing Pilot
                </p>
                <p className="text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">
                  <span className="font-semibold text-white">Target:</span> 10 customers spending $500K+ annually on
                  pay-as-you-go compute, already running production ML models generating measurable business outcomes
                </p>
                <p className="text-sm sm:text-base text-slate-300">
                  <span className="font-semibold text-white">MVP Scope:</span> 6 months, 2 engineers
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  Phase 1 (Months 1-2): Customer selection and instrumentation
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300">
                  <li>
                    • Identify 10 pilot customers with measurable KPIs (sales lift, cost savings, productivity gains)
                  </li>
                  <li>• Integrate outcome tracking (Google Analytics, CRM APIs, productivity metrics)</li>
                  <li>• Establish baseline metrics before outcome-based pricing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  Phase 2 (Months 3-5): Pilot contracts and measurement
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300">
                  <li>• 3-month exploration phase: Flat $75K/month, unlimited usage</li>
                  <li>• 6-month production phase: 15-25% value-share on measurable outcomes</li>
                  <li>• Real-time dashboard showing: outcome metrics, value delivered, invoicing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  Phase 3 (Month 6): Evaluation and iteration
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300">
                  <li>• Measure success metrics</li>
                  <li>• Gather qualitative feedback from customers and sales team</li>
                  <li>• Build business case for Year 2 expansion</li>
                </ul>
              </div>

              <div className="bg-slate-900 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Success Metrics:</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-300">
                  <li>• Primary: 80%+ pilot renewal rate (vs 60% baseline pay-as-you-go retention)</li>
                  <li>• Secondary: 2-3× revenue per customer vs standard pricing</li>
                  <li>• Tertiary: Customer NPS {">"}50 (vs baseline 30)</li>
                  <li>• Financial: Contribution margin {">"}40% after absorbing exploration costs</li>
                </ul>
              </div>

              <div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3">
                  <span className="font-semibold text-white">Why This Scope:</span> Tests outcome-based pricing without
                  requiring platform changes. Instruments existing APIs. If successful, expand to 100 customers in Year
                  2, then integrate natively into console by Year 3.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Biggest Risk:</span> Outcome measurement complexity across
                  diverse use cases. <span className="font-semibold">Mitigation:</span> Start with narrow verticals
                  (ecommerce recommendations, developer productivity) where measurement infrastructure is mature.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Conclusion</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              The AI industry has a $400B capital flow problem disguised as a technology problem. NVIDIA and
              distribution players capture all profit because their pricing models work. Foundation models and
              enterprises lose money because theirs don't.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Outcome-based pricing could solve this: enterprises pay for value, providers capture their fair share,
              everyone's incentives align. Early evidence from gaming and ecommerce proves it works—customers willing to
              pay 2-3× when pricing tied to measurable outcomes.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              My bet: The first hyperscaler to pilot outcome-based pricing with 10-20 enterprise customers in 2026 will
              define how AI gets priced for the next decade. That's a $30B opportunity hiding in plain sight.
            </p>
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
