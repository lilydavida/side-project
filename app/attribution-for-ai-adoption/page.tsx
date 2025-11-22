"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ConfidenceGamePage() {
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
              The Confidence Game: Why the Next Era of AI Belongs to Those Who Measure the Odds
            </h1>
            <div className="text-slate-400 text-xs sm:text-sm">November 2025</div>
          </header>

          {/* Hook */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">The Friction of Certainty</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              In business, we crave certainty. We want to know that Action A definitely caused Revenue B. But AI doesn’t
              deal in certainties; it deals in probabilities.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              This creates a fundamental friction. Engineers want models to run autonomously to scale. Business leaders
              are terrified to let a "black box" make high-stakes decisions based on a probability curve they can't see.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Company ABC bridged this gap. They didn't try to force AI to be perfect. Instead, they built a system that
              made the probability visible and controllable. This is the story of how they turned a Central Event
              Tracker into a "Confidence Engine" and why Google is sitting on an opportunity to do the same for the rest
              of the world.
            </p>
          </section>

          {/* The Case Study */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              The Case Study: Company ABC’s "Confidence Engine"
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              Company ABC faced a classic problem: Their ML engineers built a powerful recommendation model, but the PM
              and Business teams did feel ready to turn it on fully. Why? Because if the model hallucinated or optimized
              for the wrong metric, the business had no way to stop it until the damage was done.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              ABC’s solution wasn’t better AI models. It was better infrastructure.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              They built a Centralized Event Tracker. But, they didn't fall for the trap of "perfect attribution," which
              doesn't exist. instead, they solved for Consistency. They created a single, agreed-upon proxy for truth
              that captured the AI's prediction alongside the business outcome.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              This changed the conversation from "The AI is right/wrong" to "The AI is 80% confident."
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-slate-300 ml-4 mb-4">
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold text-white">For the Engineer:</span> It provided a feedback loop to
                  calibrate the model’s weights.
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold text-white">For the Business User:</span> It gave them a dashboard to
                  see weighted attribution. If certain thresholds are hit. If the AI’s confidence dipped below a
                  threshold, it could fallback to Rules-Based Pricing.
                </span>
              </li>
            </ul>
          </section>

          {/* Human-in-the-Loop */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Why Human-in-the-Loop Builds Credibility (Not Just Control)
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              We often think "Human-in-the-Loop" means a human rubber-stamping every decision. That doesn't scale.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <h3 className="font-semibold text-white mb-2">The System</h3>
                <p className="text-sm text-slate-400">
                  Optimised for speed. Processes millions of signals in milliseconds.
                </p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <h3 className="font-semibold text-white mb-2">The Human</h3>
                <p className="text-sm text-slate-400">Defines the risk tolerance</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              By keeping the human in the loop, ABC didn't just get "control." They got calibration. The business
              learned to trust the AI because the system explicitly told them when not to trust it.
            </p>
          </section>

          {/* The Fork in the Road */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              The Fork in the Road: Strategic vs. Commodity
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Not every decision needs this level of scrutiny. We must apply First Principles to separate the signal
              from the noise:
            </p>

            <div className="overflow-x-auto mb-6 rounded-lg border border-slate-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 text-slate-300">
                  <tr>
                    <th className="p-3 sm:p-4 font-semibold border-b border-slate-800">Feature</th>
                    <th className="p-3 sm:p-4 font-semibold border-b border-slate-800 w-[40%]">Strategic Outcomes</th>
                    <th className="p-3 sm:p-4 font-semibold border-b border-slate-800 w-[40%]">
                      Commoditized Outcomes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/30">
                  <tr>
                    <td className="p-3 sm:p-4 font-medium text-slate-300">Examples</td>
                    <td className="p-3 sm:p-4 text-slate-400">Pricing, Homepage Rank</td>
                    <td className="p-3 sm:p-4 text-slate-400">Spam Filter, Tier 1 Support</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-medium text-slate-300">The Goal</td>
                    <td className="p-3 sm:p-4 text-slate-400">Maximizing Revenue / Brand Equity</td>
                    <td className="p-3 sm:p-4 text-slate-400">Minimizing Cost / Speed</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-medium text-slate-300">The Risk</td>
                    <td className="p-3 sm:p-4 text-slate-400">High. A bad prediction costs millions.</td>
                    <td className="p-3 sm:p-4 text-slate-400">Low. A bad prediction is an annoyance.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-medium text-slate-300">The Model</td>
                    <td className="p-3 sm:p-4 text-slate-400">
                      Probabilistic & Transparent. We need to see the weights.
                    </td>
                    <td className="p-3 sm:p-4 text-slate-400">Deterministic & Opaque. We just need the result.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-medium text-slate-300">Pricing</td>
                    <td className="p-3 sm:p-4 text-slate-400">Outcome-based (Attribution Heavy).</td>
                    <td className="p-3 sm:p-4 text-slate-400">Usage-based (Volume Heavy).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-900/10 border border-blue-900/30 p-4 rounded-lg">
              <p className="text-sm sm:text-base text-blue-200 font-medium text-center">
                The Insight: You cannot apply "Black Box" autonomy to Strategic Outcomes. You need a cockpit, not an
                autopilot.
              </p>
            </div>
          </section>

          {/* Google Opportunity */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              The Blue Ocean: Why Google Should Own This Space
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              Here is the irony: Google has all the parts to build this cockpit, but they are sold as separate airplane
              parts.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 bg-slate-900/50 p-3 rounded border border-slate-800/50">
                <span className="font-bold text-blue-400">The Brain:</span>
                <span className="text-slate-300">Gemini creates the probabilities.</span>
              </li>
              <li className="flex items-start gap-3 bg-slate-900/50 p-3 rounded border border-slate-800/50">
                <span className="font-bold text-purple-400">The Memory:</span>
                <span className="text-slate-300">Google Analytics/Firebase captures the events.</span>
              </li>
              <li className="flex items-start gap-3 bg-slate-900/50 p-3 rounded border border-slate-800/50">
                <span className="font-bold text-emerald-400">The Nervous System:</span>
                <span className="text-slate-300">Vertex AI manages the deployment.</span>
              </li>
            </ul>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              If they integrated these, they would have the ultimate "OS for Business AI."
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Why haven't they done it?</h3>
            <ul className="space-y-2 text-sm sm:text-base text-slate-300 ml-4 mb-4">
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold text-white">The Transparency Trap:</span> Google’s core business (Ads)
                  relies on a degree of opacity ("trust our algorithm"). If they build a hyper-transparent attribution
                  engine for their Cloud customers, they implicitly highlight the lack of transparency in their Ad
                  ecosystem.
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="text-slate-500">•</span>
                <span>
                  <span className="font-semibold text-white">The "Good Enough" Fallacy:</span> Most enterprises are
                  still struggling with basic data hygiene. Google is waiting for the market to mature before offering
                  advanced governance tools.
                </span>
              </li>
            </ul>
          </section>

          {/* Competitive Landscape */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">The Competitive Landscape</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              If Google doesn't build this, someone else will.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">AWS</h3>
                <p className="text-sm sm:text-base text-slate-300">
                  Has the raw infrastructure (SageMaker + Kinesis) but lacks the user-friendly frontend of Google
                  Analytics.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Microsoft Azure</h3>
                <p className="text-sm sm:text-base text-slate-300">
                  Is bundling OpenAI tightly with PowerBI, which is the closest current competitor to a "Confidence
                  Dashboard."
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">The Enterprise</h3>
                <p className="text-sm sm:text-base text-slate-300">
                  Right now, companies like ABC are forced to build this themselves. That is a massive inefficiency in
                  the market.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Conclusion: The Future belongs to the Translators
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              The era of "blind trust" in AI is over. The winners of the next decade won't be the companies with the
              smartest models; they will be the companies that can translate probability into profit.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tech giants like Google have a massive opportunity to standardize the infrastructure, but they are
              conflicted. Until they solve that, the advantage belongs to companies like ABC who are willing to build
              their own Confidence Engines to measure the risk.
            </p>
          </section>

          {/* References */}
          <section className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">References & Further Reading</h2>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <h3 className="text-slate-200 font-semibold mb-2">On Outcome-Based Pricing & AI Models:</h3>
                <ul className="space-y-1 pl-4 border-l border-slate-800">
                  <li>
                    <span className="text-slate-400">Chargebee Blog:</span>{" "}
                    <span className="text-slate-300 italic">
                      "How AI-Era SaaS Proves Value When Outcome-Based Pricing Models Gain Traction"
                    </span>
                  </li>
                  <li>
                    <span className="text-slate-400">Pragmatic Institute:</span>{" "}
                    <span className="text-slate-300 italic">"Understanding Outcome-Based Pricing"</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold mb-2">On The Shift to Attribution & Control:</h3>
                <ul className="space-y-1 pl-4 border-l border-slate-800">
                  <li>
                    <span className="text-slate-400">Metronome:</span>{" "}
                    <span className="text-slate-300 italic">
                      "What is Outcome-Based Pricing, and How Can You Use It?"
                    </span>
                  </li>
                  <li>
                    <span className="text-slate-400">Zendesk Newsroom:</span>{" "}
                    <span className="text-slate-300 italic">"Scaling outcome-based pricing with AI"</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold mb-2">On AI Infrastructure & Monetization:</h3>
                <ul className="space-y-1 pl-4 border-l border-slate-800">
                  <li>
                    <span className="text-slate-400">a16z Newsletter:</span>{" "}
                    <span className="text-slate-300 italic">"AI Is Driving A Shift Towards Outcome-Based Pricing"</span>
                  </li>
                  <li>
                    <span className="text-slate-400">Sequoia Capital Podcast:</span>{" "}
                    <span className="text-slate-300 italic">"Pricing in the AI Era: From Inputs to Outcomes"</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
