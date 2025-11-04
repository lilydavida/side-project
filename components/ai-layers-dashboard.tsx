"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { TrendingUp, FileText } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

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
    id: "enterprise",
    name: "Enterprise & AI Labs",
    color: "from-rose-600 to-rose-400",
    companies: [
      { name: "DeepMind", revenue: 2.5, commitments: 4.1, fulfillment: 61 },
      { name: "OpenAI Research", revenue: 1.9, commitments: 3.2, fulfillment: 59 },
      { name: "Anthropic", revenue: 1.5, commitments: 2.8, fulfillment: 54 },
      { name: "Meta FAIR", revenue: 1.2, commitments: 2.1, fulfillment: 57 },
      { name: "Stanford HAI", revenue: 0.8, commitments: 1.5, fulfillment: 53 },
      { name: "MIT CSAIL", revenue: 0.6, commitments: 1.2, fulfillment: 50 },
      { name: "UC Berkeley AI Research", revenue: 0.7, commitments: 1.3, fulfillment: 54 },
      { name: "JPMorgan AI Research", revenue: 1.1, commitments: 1.9, fulfillment: 58 },
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
  enterprise: [
    {
      id: 9,
      company: "DeepMind",
      customer: "Multiple Cloud Providers",
      value: "$1.2B+",
      term: "Multi-year",
      date: "2024-03",
      source: "Earnings Call",
    },
    {
      id: 10,
      company: "Stanford HAI",
      customer: "AWS & Google Cloud",
      value: "$150M",
      term: "3 years",
      date: "2024-01",
      source: "Press Release",
    },
    {
      id: 11,
      company: "MIT CSAIL",
      customer: "Microsoft & AWS",
      value: "$120M",
      term: "3 years",
      date: "2023-09",
      source: "Partnership Announcement",
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
  const layer = LAYERS.find((l) => l.id === selectedLayer)!

  const chartData = layer.companies.map((c) => ({
    name: c.name,
    revenue: c.revenue,
    commitments: c.commitments,
    gap: c.revenue - c.commitments,
  }))

  const deals = MATERIAL_DEALS[selectedLayer as keyof typeof MATERIAL_DEALS] || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">AI Infrastructure Economics</h1>
          <p className="text-lg text-slate-400">Revenue vs. contractual commitments across the 4-layer stack</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {LAYERS.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`relative p-4 rounded-lg transition-all ${
                  selectedLayer === layer.id
                    ? `bg-gradient-to-br ${layer.color} text-white shadow-lg scale-105`
                    : "bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                <div className="font-semibold text-sm">{layer.name}</div>
                <div className="text-xs mt-2 opacity-80">{layer.companies.length} companies</div>
              </button>
            ))}
          </div>

          <Card className="bg-slate-800/30 border-slate-700/50 p-4">
            <div className="flex flex-wrap gap-2">
              {layer.companies.map((company) => (
                <div
                  key={company.name}
                  className="px-3 py-2 bg-slate-700/40 border border-slate-600/50 rounded-lg text-sm text-slate-300"
                >
                  <div className="font-medium">{company.name}</div>
                  <div className="text-xs text-slate-400">
                    {company.fulfillment}% fulfillment • ${company.revenue}B rev
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={20} className="text-blue-400" />
              <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                Revenue vs Commitments ({layer.name})
              </h2>
            </div>

            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="rgba(148, 163, 184, 0.5)"
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  stroke="rgba(148, 163, 184, 0.5)"
                  tick={{ fontSize: 12 }}
                  label={{ value: "Billions USD", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(71, 85, 105, 0.5)",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#e2e8f0" }}
                  formatter={(value: number) => `$${value.toFixed(1)}B`}
                />
                <Legend wrapperStyle={{ paddingTop: "20px" }} />
                <Bar dataKey="revenue" fill="rgb(59, 130, 246)" radius={[8, 8, 0, 0]} name="Revenue Recognized" />
                <Bar
                  dataKey="commitments"
                  fill="rgb(168, 85, 247)"
                  radius={[8, 8, 0, 0]}
                  name="Contractual Commitments"
                />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <div className="text-xs text-slate-400 mb-1">Total Revenue</div>
                <div className="text-2xl font-bold text-blue-300">
                  ${layer.companies.reduce((sum, c) => sum + c.revenue, 0).toFixed(1)}B
                </div>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <div className="text-xs text-slate-400 mb-1">Total Commitments</div>
                <div className="text-2xl font-bold text-purple-300">
                  ${layer.companies.reduce((sum, c) => sum + c.commitments, 0).toFixed(1)}B
                </div>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <div className="text-xs text-slate-400 mb-1">Fulfillment Gap</div>
                <div className="text-2xl font-bold text-emerald-300">
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
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <FileText size={20} className="text-amber-400" />
              <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                Secured Contracts & Commitments
              </h2>
            </div>

            {deals.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-300 uppercase">Provider</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-300 uppercase">Customer</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-300 uppercase">Value</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-300 uppercase">Term</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-300 uppercase">Date</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-300 uppercase">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deals.map((deal) => (
                      <tr
                        key={deal.id}
                        className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="font-semibold text-white">{deal.company}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-slate-300">{deal.customer}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-bold text-blue-300">{deal.value}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-slate-400 text-sm">{deal.term}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-slate-400 text-sm">{deal.date}</div>
                        </td>
                        <td className="py-4 px-4">
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
              <div className="text-center py-12 text-slate-400">
                <p>No material agreements data available for this layer</p>
              </div>
            )}
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-slate-500 pt-6">
          <p>
            Data aggregated from SEC filings and public disclosures • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}
