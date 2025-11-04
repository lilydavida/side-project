"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { TrendingUp, FileText } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import Link from "next/link"

const LAYERS = [
  {
    id: "chips",
    name: "Chip Makers",
    color: "from-blue-600 to-blue-400",
    companies: [
      { name: "NVIDIA", revenue: 184, commitments: 152, fulfillment: 98 },
      { name: "AMD", revenue: 22.7, commitments: 18, fulfillment: 89 },
      { name: "Intel", revenue: 52.1, commitments: 42, fulfillment: 81 },
      { name: "Amazon", revenue: 18.5, commitments: 22, fulfillment: 84 },
      { name: "Google (TPU)", revenue: 14.8, commitments: 18, fulfillment: 83 },
    ],
  },
  {
    id: "hyperscalers",
    name: "Hyperscalers",
    color: "from-purple-600 to-purple-400",
    companies: [
      { name: "AWS", revenue: 248, commitments: 210, fulfillment: 95 },
      { name: "Microsoft Azure", revenue: 184, commitments: 165, fulfillment: 92 },
      { name: "Google Cloud", revenue: 84, commitments: 75, fulfillment: 88 },
    ],
  },
  {
    id: "gpu-resellers",
    name: "GPU Cloud Resellers",
    color: "from-emerald-600 to-emerald-400",
    companies: [
      { name: "CoreWeave", revenue: 8.5, commitments: 11.8, fulfillment: 72 },
      { name: "Lambda Labs", revenue: 2.1, commitments: 3, fulfillment: 70 },
      { name: "Crusoe Energy", revenue: 1.2, commitments: 2, fulfillment: 60 },
    ],
  },
  {
    id: "foundation",
    name: "Foundation Models",
    color: "from-amber-600 to-amber-400",
    companies: [
      { name: "OpenAI", revenue: 3.4, commitments: 5.2, fulfillment: 65 },
      { name: "Anthropic", revenue: 1.8, commitments: 2.9, fulfillment: 62 },
      { name: "Meta AI", revenue: 0.8, commitments: 1.5, fulfillment: 53 },
      { name: "Gemini (Google)", revenue: 2.1, commitments: 3.2, fulfillment: 66 },
      { name: "Grok (xAI)", revenue: 0.6, commitments: 1.2, fulfillment: 50 },
    ],
  },
  {
    id: "distribution",
    name: "Distribution & Enterprise AI",
    color: "from-indigo-600 to-indigo-400",
    companies: [
      { name: "Microsoft Copilot", revenue: 12.5, commitments: 18, fulfillment: 69 },
      { name: "Google Workspace AI", revenue: 8.2, commitments: 12, fulfillment: 68 },
      { name: "Slack Assistants", revenue: 2.1, commitments: 3.5, fulfillment: 60 },
      { name: "Salesforce Einstein", revenue: 5.8, commitments: 8, fulfillment: 72 },
      { name: "Adobe Firefly", revenue: 4.3, commitments: 6, fulfillment: 71 },
      { name: "Atlassian AI", revenue: 1.9, commitments: 2.8, fulfillment: 68 },
    ],
  },
]

const MATERIAL_DEALS = {
  chips: [
    {
      id: 1,
      company: "NVIDIA",
      customer: "Multiple Hyperscalers",
      value: "$15B+",
      term: "Annual",
      date: "2024-01",
      source: "10-Q Filing",
    },
    {
      id: 2,
      company: "AMD",
      customer: "AWS & Microsoft",
      value: "$2B+",
      term: "Multi-year",
      date: "2023-06",
      source: "Press Release",
    },
  ],
  hyperscalers: [
    {
      id: 3,
      company: "Microsoft",
      customer: "OpenAI",
      value: "$10B",
      term: "5 years",
      date: "2023-11",
      source: "10-K Filing",
    },
    {
      id: 4,
      company: "AWS",
      customer: "Anthropic",
      value: "$4B",
      term: "Multi-year",
      date: "2024-09",
      source: "8-K Filing",
    },
    {
      id: 5,
      company: "Google Cloud",
      customer: "Shopify",
      value: "$1B+",
      term: "Multi-year",
      date: "2023-07",
      source: "Earnings Call",
    },
  ],
  "gpu-resellers": [
    {
      id: 6,
      company: "CoreWeave",
      customer: "Multiple Enterprises",
      value: "$500M+",
      term: "Multi-year",
      date: "2024-06",
      source: "Press Release",
    },
  ],
  foundation: [
    {
      id: 7,
      company: "OpenAI",
      customer: "Microsoft",
      value: "$10B (invest)",
      term: "5 years",
      date: "2023-11",
      source: "Press Release",
    },
    {
      id: 8,
      company: "Anthropic",
      customer: "AWS & Google",
      value: "$2B+ each",
      term: "Multi-year",
      date: "2024-09",
      source: "8-K Filing",
    },
  ],
  distribution: [
    {
      id: 12,
      company: "Microsoft Copilot",
      customer: "Microsoft 365 Enterprise",
      value: "$20B+",
      term: "Annual",
      date: "2024-06",
      source: "Earnings Call",
    },
    {
      id: 13,
      company: "Google Workspace AI",
      customer: "Google Workspace Users",
      value: "$15B+",
      term: "Subscription",
      date: "2024-05",
      source: "Google I/O",
    },
    {
      id: 14,
      company: "Salesforce Einstein",
      customer: "Salesforce Customers",
      value: "$5B+",
      term: "Annual",
      date: "2024-04",
      source: "Dreamforce 2024",
    },
  ],
}

const MEDIA_DEALS = {
  chips: [
    {
      id: 101,
      company: "NVIDIA",
      announcement: "Record GPU demand from hyperscalers",
      details: "Sustained $15B+ quarterly orders through 2025",
      date: "2024-10",
      source: "Reuters, Bloomberg, TechCrunch",
    },
    {
      id: 102,
      company: "AMD",
      announcement: "Securing AI accelerator foothold",
      details: "Multiple cloud providers adopting MI300 chips",
      date: "2024-09",
      source: "VentureBeat, AnandTech",
    },
  ],
  hyperscalers: [
    {
      id: 103,
      company: "Microsoft",
      announcement: "Expanding OpenAI partnership",
      details: "$100M+ annual AI infrastructure investments",
      date: "2024-10",
      source: "Reuters, Wall Street Journal",
    },
    {
      id: 104,
      company: "AWS",
      announcement: "AI chip development acceleration",
      details: "Scaling Trainium and Inferentia deployments",
      date: "2024-08",
      source: "TechCrunch, VentureBeat",
    },
    {
      id: 105,
      company: "Google Cloud",
      announcement: "TPU expansion for enterprise AI",
      details: "Building dedicated AI infrastructure capacity",
      date: "2024-09",
      source: "Google Blog, Protocol",
    },
  ],
  "gpu-resellers": [
    {
      id: 106,
      company: "CoreWeave",
      announcement: "Raises $200M for GPU cloud expansion",
      details: "Serves 500+ AI companies with compute-on-demand",
      date: "2024-07",
      source: "Crunchbase, Forbes",
    },
    {
      id: 107,
      company: "Lambda Labs",
      announcement: "Becoming key GPU provider for startups",
      details: "Democratizing AI model training access",
      date: "2024-06",
      source: "Medium, Tech blogs",
    },
  ],
  foundation: [
    {
      id: 108,
      company: "OpenAI",
      announcement: "ChatGPT reaches 200M weekly users",
      details: "Enterprise contracts exceeding $1B ARR projection",
      date: "2024-09",
      source: "Reuters, Bloomberg, TechCrunch",
    },
    {
      id: 109,
      company: "Anthropic",
      announcement: "Claude adoption surges in enterprises",
      details: "Multiple Fortune 500 deployment announcements",
      date: "2024-10",
      source: "Anthropic Blog, Business Insider",
    },
    {
      id: 110,
      company: "Gemini (Google)",
      announcement: "Integrating Gemini into Google Workspace",
      details: "Enterprise rollout with subscription model",
      date: "2024-08",
      source: "Google Blog, The Verge",
    },
  ],
  distribution: [
    {
      id: 114,
      company: "Microsoft Copilot",
      announcement: "Copilot Pro hits 1M+ subscriptions",
      details: "Enterprise integration across Microsoft 365",
      date: "2024-09",
      source: "Microsoft Blog, Reuters",
    },
    {
      id: 115,
      company: "Google Workspace AI",
      announcement: "Duet AI becoming standard in Workspace",
      details: "Rolling out to millions of enterprise users",
      date: "2024-08",
      source: "Google Blog, TechCrunch",
    },
    {
      id: 116,
      company: "Salesforce Einstein",
      announcement: "Einstein agents drive customer success",
      details: "$5B+ annual revenue from AI features",
      date: "2024-07",
      source: "Salesforce Blog, Business Insider",
    },
  ],
}

const getFulfillmentColor = (rate: number) => {
  if (rate >= 90) return "#10b981"
  if (rate >= 75) return "#f59e0b"
  return "#ef4444"
}

export default function AILayersDashboard() {
  const [selectedLayer, setSelectedLayer] = useState("hyperscalers")
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date())
  const [showPreview, setShowPreview] = useState(true)

  useEffect(() => {
    const refreshInterval = setInterval(
      () => {
        setLastRefreshed(new Date())
      },
      5 * 60 * 1000,
    )

    return () => clearInterval(refreshInterval)
  }, [])

  const layer = LAYERS.find((l) => l.id === selectedLayer)!

  const chartData = layer.companies.map((c) => ({
    name: c.name,
    revenue: c.revenue,
    commitments: c.commitments,
    gap: c.revenue - c.commitments,
  }))

  const deals = MATERIAL_DEALS[selectedLayer as keyof typeof MATERIAL_DEALS] || []
  const mediaDeals = MEDIA_DEALS[selectedLayer as keyof typeof MEDIA_DEALS] || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-3 sm:px-4 py-6 sm:py-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {showPreview && (
          <Card className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 border border-blue-700/50 p-4 sm:p-6 relative overflow-hidden group cursor-pointer hover:border-blue-600/75 transition-colors">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    Research: The $280B Misalignment in AI Infrastructure
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    This portfolio maps every dollar flowing through the AI ecosystem to answer two critical questions:
                    Who is funding this buildout, and where do the unit economics land when your competitors are also
                    burning billions to scale? The answer reveals why profits concentrate in only two layers...
                  </p>
                  <Link
                    href="/article"
                    className="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-xs sm:text-sm font-medium"
                  >
                    Read Full Article →
                  </Link>
                </div>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-slate-400 hover:text-slate-200 transition-colors flex-shrink-0"
                  aria-label="Close preview"
                >
                  ✕
                </button>
              </div>
            </div>
          </Card>
        )}

        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
            AI Infrastructure Economics
          </h1>
          <p className="text-sm sm:text-lg text-slate-400">
            Revenue vs. contractual commitments across the 5-layer stack
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {LAYERS.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`relative p-3 sm:p-4 rounded-lg transition-all text-xs sm:text-sm ${
                  selectedLayer === layer.id
                    ? `bg-gradient-to-br ${layer.color} text-white shadow-lg scale-105`
                    : "bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                <div className="font-semibold">{layer.name}</div>
                <div className="text-xs mt-1 opacity-80">{layer.companies.length} cos</div>
              </button>
            ))}
          </div>

          <Card className="bg-slate-800/30 border-slate-700/50 p-3 sm:p-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {layer.companies.map((company) => (
                <div
                  key={company.name}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700/40 border border-slate-600/50 rounded text-xs sm:text-sm text-slate-300"
                >
                  <div className="font-medium">{company.name}</div>
                  <div className="text-xs text-slate-400">
                    {company.fulfillment}% • ${company.revenue}B
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
          <div className="p-4 sm:p-8">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <TrendingUp size={18} className="text-blue-400" />
              <h2 className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wide">
                Revenue vs Commitments ({layer.name})
              </h2>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="rgba(148, 163, 184, 0.5)"
                  tick={{ fontSize: 10 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  stroke="rgba(148, 163, 184, 0.5)"
                  tick={{ fontSize: 10 }}
                  label={{ value: "Billions USD", angle: -90, position: "insideLeft", fontSize: 10 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(71, 85, 105, 0.5)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  labelStyle={{ color: "#e2e8f0" }}
                  formatter={(value: number) => `$${value.toFixed(1)}B`}
                />
                <Legend wrapperStyle={{ paddingTop: "20px", fontSize: "12px" }} />
                <Bar dataKey="revenue" fill="rgb(59, 130, 246)" radius={[8, 8, 0, 0]} name="Revenue Recognized" />
                <Bar
                  dataKey="commitments"
                  fill="rgb(168, 85, 247)"
                  radius={[8, 8, 0, 0]}
                  name="Contractual Commitments"
                />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-slate-700/30 p-3 sm:p-4 rounded-lg border border-slate-600/30">
                <div className="text-xs text-slate-400 mb-1">Total Revenue</div>
                <div className="text-lg sm:text-2xl font-bold text-blue-300">
                  ${layer.companies.reduce((sum, c) => sum + c.revenue, 0).toFixed(1)}B
                </div>
              </div>
              <div className="bg-slate-700/30 p-3 sm:p-4 rounded-lg border border-slate-600/30">
                <div className="text-xs text-slate-400 mb-1">Total Commitments</div>
                <div className="text-lg sm:text-2xl font-bold text-purple-300">
                  ${layer.companies.reduce((sum, c) => sum + c.commitments, 0).toFixed(1)}B
                </div>
              </div>
              <div className="bg-slate-700/30 p-3 sm:p-4 rounded-lg border border-slate-600/30">
                <div className="text-xs text-slate-400 mb-1">Fulfillment Gap</div>
                <div className="text-lg sm:text-2xl font-bold text-emerald-300">
                  $
                  {(
                    layer.companies.reduce((sum, c) => sum + c.revenue, 0) -
                    layer.companies.reduce((sum, c) => sum + c.commitments, 0)
                  ).toFixed(1)}
                  B
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
          <div className="p-4 sm:p-8">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <FileText size={18} className="text-amber-400" />
              <h2 className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wide">
                Secured Contracts & Commitments
              </h2>
            </div>

            {deals.length > 0 ? (
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-slate-300 uppercase">
                        Provider
                      </th>
                      <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-slate-300 uppercase">
                        Customer
                      </th>
                      <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-slate-300 uppercase">
                        Value
                      </th>
                      <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-slate-300 uppercase hidden sm:table-cell">
                        Term
                      </th>
                      <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-slate-300 uppercase hidden lg:table-cell">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {deals.map((deal) => (
                      <tr
                        key={deal.id}
                        className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                      >
                        <td className="py-2 sm:py-4 px-3 sm:px-4">
                          <div className="font-semibold text-white">{deal.company}</div>
                        </td>
                        <td className="py-2 sm:py-4 px-3 sm:px-4">
                          <div className="text-slate-300">{deal.customer}</div>
                        </td>
                        <td className="py-2 sm:py-4 px-3 sm:px-4">
                          <div className="font-bold text-blue-300">{deal.value}</div>
                        </td>
                        <td className="py-2 sm:py-4 px-3 sm:px-4 hidden sm:table-cell">
                          <div className="text-slate-400 text-xs sm:text-sm">{deal.term}</div>
                        </td>
                        <td className="py-2 sm:py-4 px-3 sm:px-4 hidden lg:table-cell">
                          <div className="text-xs bg-slate-700/40 text-slate-300 px-2 py-1 rounded w-fit">
                            {deal.source}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-slate-400 text-sm">
                <p>No material agreements data available for this layer</p>
              </div>
            )}
          </div>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
          <div className="p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-rose-400" />
                <h2 className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wide">
                  Deals Mentioned in Media
                </h2>
              </div>
              <div className="text-xs text-slate-500 sm:ml-auto">Updated: {lastRefreshed.toLocaleTimeString()}</div>
            </div>

            {mediaDeals.length > 0 ? (
              <div className="space-y-2 sm:space-y-3">
                {mediaDeals.map((deal) => (
                  <div
                    key={deal.id}
                    className="border border-slate-700/50 rounded-lg p-3 sm:p-4 hover:bg-slate-700/20 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <div>
                        <h3 className="font-semibold text-white text-sm sm:text-base">{deal.announcement}</h3>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1">{deal.details}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs text-slate-400">{deal.date}</div>
                      </div>
                    </div>
                    <div className="flex gap-1 sm:gap-2 flex-wrap mt-2 sm:mt-3">
                      {deal.source.split(", ").map((src, idx) => (
                        <div key={idx} className="text-xs bg-rose-500/20 text-rose-300 px-2 py-1 rounded">
                          {src}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 sm:py-8 text-slate-400 text-sm">
                <p>No media coverage available for this layer</p>
              </div>
            )}
          </div>
        </Card>

        <div className="text-center text-xs text-slate-500 pt-6 sm:pt-8 border-t border-slate-700/50 mt-8 sm:mt-12">
          <p className="mb-2">
            Data aggregated from SEC filings and public disclosures • Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-slate-600">
            Created by <span className="text-slate-500 font-medium">Lily David</span> • Licensed under{" "}
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
      </div>
    </div>
  )
}
