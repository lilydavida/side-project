"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { TrendingUp, FileText, ArrowLeft, RefreshCw, Cpu, Server, Brain, AppWindow, ArrowRight } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import Link from "next/link"
import { PAGE_CONFIG } from "@/lib/page-config"
import { fetchFinancialData } from "@/app/actions"
import { motion, AnimatePresence } from "framer-motion"

const LAYERS = [
  {
    id: "chips",
    name: "Chip Makers",
    description: "The silicon foundation powering AI computation",
    icon: Cpu,
    color: "from-blue-600 to-blue-400",
    accent: "text-blue-400",
    companies: [
      { name: "NVIDIA", revenue: 184, commitments: 152, fulfillment: 98 },
      { name: "AMD", revenue: 22.7, commitments: 18, fulfillment: 89 },
      { name: "Intel", revenue: 52.1, commitments: 42, fulfillment: 81 },
      { name: "Amazon", revenue: 18.5, commitments: 22, fulfillment: 84 },
      { name: "Google (TPU)", revenue: 14.8, commitments: 18, fulfillment: 83 },
    ],
  },
  {
    id: "gpu-resellers",
    name: "GPU Cloud",
    description: "Specialized compute access for training",
    icon: Server,
    color: "from-emerald-600 to-emerald-400",
    accent: "text-emerald-400",
    companies: [
      { name: "CoreWeave", revenue: 8.5, commitments: 11.8, fulfillment: 72 },
      { name: "Lambda Labs", revenue: 2.1, commitments: 3, fulfillment: 70 },
      { name: "Crusoe Energy", revenue: 1.2, commitments: 2, fulfillment: 60 },
    ],
  },
  {
    id: "foundation",
    name: "LLMs",
    description: "Intelligence models built on compute",
    icon: Brain,
    color: "from-amber-600 to-amber-400",
    accent: "text-amber-400",
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
    name: "Distribution",
    description: "Applications delivering AI to end-users",
    icon: AppWindow,
    color: "from-indigo-600 to-indigo-400",
    accent: "text-indigo-400",
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

const LAYER_TICKERS: Record<string, string[]> = {
  chips: ["NVDA", "AMD", "INTC"],
  "gpu-resellers": [], // Mostly private
  foundation: ["META", "GOOGL"], // OpenAI/Anthropic are private, using proxies
  distribution: ["MSFT", "GOOGL", "CRM", "ADBE", "TEAM"],
}

const getFulfillmentColor = (rate: number) => {
  if (rate >= 90) return "oklch(var(--emerald))"
  if (rate >= 75) return "oklch(var(--amber))"
  return "oklch(var(--red))"
}

const getLayerSummary = (layerId: string, companies: any[]) => {
  const avgFulfillment = companies.reduce((acc, c) => acc + c.fulfillment, 0) / companies.length
  const totalRev = companies.reduce((acc, c) => acc + c.revenue, 0)
  const totalCom = companies.reduce((acc, c) => acc + c.commitments, 0)
  const isSurplus = totalRev > totalCom

  let fundingSource = ""
  let economicsStatus = ""

  switch (layerId) {
    case "chips":
      fundingSource = "Hyperscaler CapEx is aggressively funding this layer, creating an immediate cash injection."
      economicsStatus =
        "Unit economics are exceptional, with hardware demand far outstripping supply, leading to massive pricing power and immediate profitability."
      break
    case "gpu-resellers":
      fundingSource = "Venture debt and specialized asset financing are driving the hardware acquisition."
      economicsStatus =
        "Arbitrage-based economics. Profitability depends entirely on sustained GPU scarcity and high rental yields."
      break
    case "foundation":
      fundingSource = "Strategic cloud credits and massive VC rounds are subsidizing the compute costs."
      economicsStatus =
        "Unit economics are effectively negative. High training and inference costs are currently subsidized to capture market share."
      break
    case "distribution":
      fundingSource = "Enterprise IT budgets and consumer subscriptions are starting to flow in."
      economicsStatus =
        "Unit economics are improving but fragile. The challenge is proving that AI productivity gains justify the higher seat costs."
      break
    default:
      fundingSource = "Capital flows are diverse."
      economicsStatus = "Economics vary by specific vertical."
  }

  return {
    funding: fundingSource,
    economics: economicsStatus,
    health:
      avgFulfillment > 85 ? "Healthy / Mature" : avgFulfillment > 65 ? "Scaling / Investment" : "Speculative / Early",
    healthColor: avgFulfillment > 85 ? "text-emerald-500" : avgFulfillment > 65 ? "text-amber-500" : "text-red-500",
  }
}

export default function AILayersDashboard() {
  const [selectedLayer, setSelectedLayer] = useState("chips")
  const [layersData, setLayersData] = useState(LAYERS)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      setIsRefreshing(true)
      const data = await fetchFinancialData()

      setLayersData((currentLayers) => {
        return currentLayers.map((layer) => {
          const updatedCompanies = layer.companies.map((company) => {
            let symbol = null
            let ratio = 1.0

            // Map companies to tickers
            if (company.name === "NVIDIA") symbol = "NVDA"
            else if (company.name === "AMD") symbol = "AMD"
            else if (company.name === "Intel") symbol = "INTC"
            else if (company.name === "Amazon") symbol = "AMZN"
            else if (company.name === "Google (TPU)") {
              symbol = "GOOGL"
              ratio = 0.3 // ~30% of Cloud revenue attributed to TPUs/Infra
            } else if (company.name === "Gemini (Google)") {
              symbol = "GOOGL"
              ratio = 0.2 // ~20% of Cloud revenue for Model/API
            } else if (company.name === "Google Workspace AI") {
              symbol = "GOOGL"
              ratio = 0.5 // ~50% of Cloud revenue for Workspace/SaaS AI
            } else if (company.name.includes("Microsoft")) symbol = "MSFT"
            else if (company.name.includes("Meta")) symbol = "META"
            else if (company.name.includes("Salesforce")) symbol = "CRM"
            else if (company.name.includes("Adobe")) symbol = "ADBE"
            else if (company.name.includes("Atlassian")) symbol = "TEAM"

            if (symbol && data[symbol]) {
              const financial = data[symbol]
              // Only update if we have a valid positive number
              if (financial.revenue > 0) {
                return {
                  ...company,
                  revenue: Number.parseFloat((financial.revenue * ratio).toFixed(1)),
                }
              }
            }
            return company
          })

          return {
            ...layer,
            companies: updatedCompanies,
          }
        })
      })

      setLastUpdate(new Date())
      setIsRefreshing(false)
    }

    loadData()

    const interval = setInterval(loadData, 30000)
    return () => clearInterval(interval)
  }, [])

  const layer = layersData.find((l) => l.id === selectedLayer)!

  const chartData = layer.companies.map((c) => ({
    name: c.name,
    revenue: c.revenue,
    commitments: c.commitments,
    gap: c.revenue - c.commitments,
    fulfillment: c.fulfillment,
  }))

  const deals = MATERIAL_DEALS[selectedLayer as keyof typeof MATERIAL_DEALS] || []

  const summary = getLayerSummary(layer.id, layer.companies)

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:py-12 font-sans text-foreground overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-2 text-sm"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{PAGE_CONFIG.dashboard.title}</h1>
            <div className="max-w-3xl relative pl-6 border-l-4 border-primary/30 py-1">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-muted-foreground/90 italic">
                "I spent two weeks mapping <span className="text-foreground font-bold not-italic">$400B</span> in AI
                infrastructure capital flows to answer two questions:"
              </p>
              <ul className="mt-3 space-y-1 text-base md:text-lg font-medium text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Who's funding this buildout?
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Where do the unit economics land when everyone's scaling simultaneously?
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-xs text-muted-foreground self-start md:self-center">
            <RefreshCw size={12} className={isRefreshing ? "animate-spin" : ""} />
            <span>{isRefreshing ? "Refreshing..." : `Updated: ${lastUpdate.toLocaleTimeString()}`}</span>
          </div>
        </div>

        {/* Interactive Ecosystem Flow Map */}
        <div className="relative py-8 overflow-x-auto">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 hidden md:block z-0" />
          <div className="flex flex-nowrap md:justify-between gap-4 md:gap-8 min-w-[800px] relative z-10 px-4">
            {layersData.map((l, index) => {
              const Icon = l.icon
              const isSelected = selectedLayer === l.id
              return (
                <div key={l.id} className="flex flex-col items-center gap-4 flex-1 min-w-[140px] group">
                  <button
                    onClick={() => setSelectedLayer(l.id)}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? `bg-gradient-to-br ${l.color} shadow-[0_0_30px_-5px_rgba(var(--primary),0.5)] scale-110 ring-2 ring-offset-2 ring-offset-background ring-white/20`
                        : "bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50"
                    }`}
                  >
                    <Icon size={32} className={isSelected ? "text-white" : "text-muted-foreground"} />
                    {index < layersData.length - 1 && (
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-muted-foreground/30 hidden md:block">
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </button>
                  <div className="text-center space-y-1">
                    <div
                      className={`text-sm font-bold transition-colors ${isSelected ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {l.name}
                    </div>
                    <div className="text-[10px] text-muted-foreground max-w-[120px] mx-auto leading-tight">
                      {l.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Detailed Metrics Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLayer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left Column: Charts & KPIs */}
            <div className="lg:col-span-8 space-y-6">
              {/* KPIs Row */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-secondary/30 border-border p-4 relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-5`} />
                  <div className="relative z-10">
                    <div className="text-xs text-muted-foreground mb-1">Total Revenue</div>
                    <div className="text-2xl font-bold">
                      ${layer.companies.reduce((sum, c) => sum + c.revenue, 0).toFixed(1)}B
                    </div>
                  </div>
                </Card>
                <Card className="bg-secondary/30 border-border p-4 relative overflow-hidden">
                  <div className="text-xs text-muted-foreground mb-1">Total Commitments</div>
                  <div className="text-2xl font-bold">
                    ${layer.companies.reduce((sum, c) => sum + c.commitments, 0).toFixed(1)}B
                  </div>
                </Card>
                <Card className="bg-secondary/30 border-border p-4 relative overflow-hidden">
                  <div className="text-xs text-muted-foreground mb-1">Revenue Delta</div>
                  <div
                    className={`text-2xl font-bold ${
                      layer.companies.reduce((sum, c) => sum + c.revenue, 0) -
                        layer.companies.reduce((sum, c) => sum + c.commitments, 0) <
                      0
                        ? "text-destructive"
                        : "text-emerald-500"
                    }`}
                  >
                    $
                    {(
                      layer.companies.reduce((sum, c) => sum + c.revenue, 0) -
                      layer.companies.reduce((sum, c) => sum + c.commitments, 0)
                    ).toFixed(1)}
                    B
                  </div>
                </Card>
              </div>

              {/* Main Chart */}
              <Card className="bg-card border-border overflow-hidden">
                <div className="p-6 border-b border-border/50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={18} className={layer.accent} />
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      Revenue vs Commitments
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary/50" /> Revenue
                    <span className="inline-block w-2 h-2 rounded-full bg-muted" /> Commitments
                  </div>
                </div>
                <div className="p-6">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                      <XAxis
                        dataKey="name"
                        stroke="var(--muted-foreground)"
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                        dy={10}
                      />
                      <YAxis
                        stroke="var(--muted-foreground)"
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}B`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--popover)",
                          borderColor: "var(--border)",
                          borderRadius: "8px",
                          fontSize: "12px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                        }}
                        itemStyle={{ color: "var(--foreground)" }}
                        cursor={{ fill: "var(--muted)/0.2" }}
                      />
                      <Bar dataKey="revenue" fill="var(--primary)" radius={[4, 4, 0, 0]} maxBarSize={50} />
                      <Bar dataKey="commitments" fill="var(--muted)" radius={[4, 4, 0, 0]} maxBarSize={50} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Layer Analysis Card */}
              <Card className="bg-secondary/20 border-border overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText size={18} className={layer.accent} />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Layer Analysis</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Who's Funding?
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/90">{summary.funding}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Unit Economics
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/90">{summary.economics}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border/50 flex items-center justify-between backdrop-blur-sm">
                    <div className="text-sm font-bold text-foreground/80 uppercase tracking-wide">Ecosystem Status</div>
                    <div
                      className={`text-base md:text-lg font-bold ${summary.healthColor} flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-background shadow-sm border border-border/50`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          summary.health.includes("Healthy")
                            ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                            : summary.health.includes("Scaling")
                              ? "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                              : "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]"
                        }`}
                      />
                      {summary.health}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Fulfillment Status Bars */}
              <Card className="bg-card border-border p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                  Fulfillment Health
                </h3>
                <div className="space-y-4">
                  {layer.companies.map((company) => (
                    <div key={company.name} className="group">
                      <div className="flex justify-between items-center text-sm mb-1.5">
                        <span className="font-medium text-foreground">{company.name}</span>
                        <span className={`font-mono text-xs ${getFulfillmentColor(company.fulfillment)}`}>
                          {company.fulfillment}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${company.fulfillment}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full"
                          style={{ backgroundColor: getFulfillmentColor(company.fulfillment) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column: Context & Deals */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="bg-gradient-to-br from-card to-secondary/50 border-border p-6">
                <div className="flex items-center gap-2 mb-4 text-foreground">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${layer.color} bg-opacity-20`}>
                    <layer.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{layer.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{layer.description}</p>
                <div className="mt-4 pt-4 border-t border-border/50 flex justify-between text-xs text-muted-foreground">
                  <span>Companies: {layer.companies.length}</span>
                  <span>Deals: {deals.length}</span>
                </div>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1">
                  <FileText size={16} className="text-muted-foreground" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Material Contracts
                  </h3>
                </div>
                {deals.length > 0 ? (
                  <div className="space-y-3">
                    {deals.map((deal) => (
                      <Card
                        key={deal.id}
                        className="p-4 border-border bg-card/50 hover:bg-card transition-colors group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {deal.company}
                          </div>
                          <div className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                            {deal.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <ArrowRight size={12} />
                          <span>{deal.customer}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-border/50 mt-2">
                          <span className="text-xs font-medium text-foreground">{deal.value}</span>
                          <span className="text-[10px] text-muted-foreground">{deal.term}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground text-sm bg-secondary/30 rounded-lg border border-dashed border-border">
                    No public material contracts available
                  </div>
                )}
              </div>

              <div className="text-center pt-4">
                <Link
                  href="/pricing-analysis"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors border-b border-dashed border-muted-foreground/50 hover:border-foreground pb-0.5"
                >
                  View Pricing Analysis <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
