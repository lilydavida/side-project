"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { FileText, ArrowLeft, RefreshCw, Cpu, Server, Brain, AppWindow, ArrowRight, Info } from "lucide-react"
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
                  commitments:
                    financial.commitments > 0
                      ? Number.parseFloat(financial.commitments.toFixed(1))
                      : company.commitments,
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

    const interval = setInterval(loadData, 300000)
    return () => clearInterval(interval)
  }, [])

  const layer = layersData.find((l) => l.id === selectedLayer)!

  const chartData = layer.companies.map((c) => ({
    name: c.name,
    revenue: c.revenue,
    spend: c.commitments, // Mapping 'commitments' data to 'spend' for the chart
    gap: c.revenue - c.commitments,
    fulfillment: c.fulfillment,
  }))

  console.log("[v0] Chart Data for", selectedLayer, ":", chartData)
  console.log("[v0] Layer companies:", layer.companies)

  const deals = MATERIAL_DEALS[selectedLayer as keyof typeof MATERIAL_DEALS] || []

  const summary = getLayerSummary(layer.id, layer.companies)

  return (
    <div className="min-h-screen bg-background/95 px-3 py-4 md:py-12 font-sans text-foreground overflow-x-hidden selection:bg-primary/20">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4 border-b border-border/40 pb-6 md:pb-8">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 md:mb-6 text-sm font-medium group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to home</span>
            </Link>

            <div className="space-y-2 mb-4 md:mb-6">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                {PAGE_CONFIG.dashboard.title}
              </h1>
            </div>

            <div className="relative pl-4 md:pl-6 border-l-2 md:border-l-3 border-primary/40 py-1 md:py-2">
              <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-muted-foreground/90 italic text-balance">
                "I spent two weeks mapping{" "}
                <span className="text-foreground font-bold not-italic border-b-2 border-primary/30">$400B</span> in AI
                infrastructure capital flows to answer two questions:"
              </p>
              <ul className="mt-3 md:mt-4 space-y-2">
                <li className="flex items-start md:items-center gap-3 text-sm md:text-base font-medium text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 md:mt-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  Who's funding this buildout?
                </li>
                <li className="flex items-start md:items-center gap-3 text-sm md:text-base font-medium text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 md:mt-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  Where do the unit economics land when everyone's scaling simultaneously?
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 self-start md:self-end">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-sm text-xs font-medium text-muted-foreground">
              <RefreshCw size={12} className={isRefreshing ? "animate-spin text-primary" : ""} />
              <span>{isRefreshing ? "Syncing Market Data..." : `Live Data: ${lastUpdate.toLocaleTimeString()}`}</span>
            </div>
          </div>
        </div>

        <div className="relative py-4 md:py-8">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 hidden md:block z-0" />

          <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-6 relative z-10">
            {layersData.map((l, index) => {
              const Icon = l.icon
              const isSelected = selectedLayer === l.id
              return (
                <div
                  key={l.id}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                  onClick={() => setSelectedLayer(l.id)}
                >
                  <button
                    className={`relative w-full aspect-square md:w-24 md:h-24 rounded-xl md:rounded-3xl flex flex-col md:flex-row items-center justify-center transition-all duration-500 ${
                      isSelected
                        ? `bg-gradient-to-br ${l.color} shadow-[0_10px_40px_-10px_rgba(var(--primary),0.3)] scale-[1.02] md:scale-110 ring-1 md:ring-4 ring-background`
                        : "bg-card border border-muted hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                    }`}
                  >
                    <Icon
                      size={24}
                      className={`mb-1 md:mb-0 w-5 h-5 md:w-8 md:h-8 transition-all duration-300 ${isSelected ? "text-white scale-110" : "text-muted-foreground group-hover:text-foreground"}`}
                    />

                    <span
                      className={`md:hidden text-[9px] font-bold uppercase tracking-wider text-center px-1 leading-tight ${isSelected ? "text-white" : "text-muted-foreground"}`}
                    >
                      {l.name}
                    </span>

                    {isSelected && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-foreground hidden md:block"
                      />
                    )}

                    {index < layersData.length - 1 && (
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-muted-foreground/20 hidden md:block pointer-events-none z-[-1]">
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </button>

                  <div className="text-center space-y-1 hidden md:block">
                    <div
                      className={`text-sm md:text-lg font-bold transition-colors ${isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                    >
                      {l.name}
                    </div>
                    <div className="text-xs text-muted-foreground/80 max-w-[140px] mx-auto leading-snug text-balance">
                      {l.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLayer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
          >
            <div className="lg:col-span-8 order-1 lg:order-3">
              <Card className="p-4 md:p-6 border-border bg-card/50">
                <div className="mb-6">
                  <h3 className="text-base md:text-lg font-bold mb-1">Revenue vs Est. Spend (Annualized, $B)</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">
                    *Revenue: Annualized run rate (Q4 2024 × 4). Est. Spend: Annualized OpEx + Cost of Revenue.
                  </p>
                  <div className="flex items-center gap-4 text-xs md:text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-[#7c3aed]" />
                      <span>Revenue (Inflow)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-[#06b6d4]" style={{ opacity: 0.6 }} />
                      <span>Est. Spend (Outflow)</span>
                    </div>
                  </div>
                </div>
                <div className="h-[250px] md:h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9ca3af", fontSize: 10 }}
                        dy={10}
                        tickFormatter={(value) => (value.length > 8 ? `${value.substring(0, 6)}...` : value)}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9ca3af", fontSize: 10 }}
                        tickFormatter={(value) => `$${value}B`}
                      />
                      <Tooltip
                        cursor={{ fill: "hsl(var(--muted) / 0.2)" }}
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-popover border border-border p-3 rounded-lg shadow-lg">
                                <p className="font-bold mb-2">{label}</p>
                                <div className="space-y-1 text-sm">
                                  <div className="flex items-center justify-between gap-4 text-chart-1">
                                    <span>Revenue:</span>
                                    <span className="font-mono font-bold">${payload[0].value}B</span>
                                  </div>
                                  <div className="flex items-center justify-between gap-4 text-[#06b6d4]">
                                    <span>Est. Spend:</span>
                                    <span className="font-mono font-bold">${payload[1].value}B</span>
                                  </div>
                                  <div className="pt-2 mt-2 border-t border-border flex items-center justify-between gap-4">
                                    <span className="text-muted-foreground">Delta:</span>
                                    <span
                                      className={`font-mono font-bold ${
                                        (payload[0].value as number) - (payload[1].value as number) > 0
                                          ? "text-emerald-500"
                                          : "text-red-500"
                                      }`}
                                    >
                                      {((payload[0].value as number) - (payload[1].value as number) > 0 ? "+" : "") +
                                        ((payload[0].value as number) - (payload[1].value as number)).toFixed(1)}
                                      B
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Bar
                        dataKey="revenue"
                        fill="#7c3aed" // Purple (chart-1)
                        radius={[4, 4, 0, 0]}
                        barSize={30}
                      />
                      <Bar
                        dataKey="spend"
                        fill="#06b6d4" // Cyan (chart-2)
                        opacity={0.6}
                        radius={[4, 4, 0, 0]}
                        barSize={30}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-8 order-2 lg:order-2">
              <div className="grid grid-cols-3 gap-2 md:gap-6">
                <Card className="bg-card/50 border-border p-3 md:p-5 relative overflow-hidden hover:border-primary/20 transition-colors">
                  <div className="text-[9px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    Revenue (Annual)
                  </div>
                  <div className="text-sm md:text-3xl font-bold tracking-tight truncate">
                    ${layer.companies.reduce((sum, c) => sum + c.revenue, 0).toFixed(1)}B
                  </div>
                </Card>
                <Card className="bg-card/50 border-border p-3 md:p-5 relative overflow-hidden hover:border-primary/20 transition-colors">
                  <div className="text-[9px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    Est. Spend (Annual)
                  </div>
                  <div className="text-sm md:text-3xl font-bold tracking-tight truncate">
                    ${layer.companies.reduce((sum, c) => sum + c.commitments, 0).toFixed(1)}B
                  </div>
                </Card>
                <Card className="bg-card/50 border-border p-3 md:p-5 relative overflow-hidden hover:border-primary/20 transition-colors ring-1 ring-border">
                  <div className="text-[9px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    Revenue Delta
                  </div>
                  <div
                    className={`text-sm md:text-3xl font-bold tracking-tight truncate ${
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
            </div>

            <div className="lg:col-span-8 order-3 lg:order-1">
              <Card className="bg-card border-border shadow-sm overflow-hidden relative h-full">
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${layer.color}`} />
                <div className="p-5 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-secondary ${layer.accent}`}>
                        <FileText size={18} />
                      </div>
                      <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-foreground">
                        Layer Analysis
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/50 border border-border/60 w-fit">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${summary.healthColor} animate-pulse`} />
                      <span className={`text-sm font-bold ${summary.healthColor}`}>{summary.health}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Who's Funding?
                      </div>
                      <p className="text-sm md:text-base leading-relaxed font-medium text-foreground/90">
                        {summary.funding}
                      </p>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Unit Economics
                      </div>
                      <p className="text-sm md:text-base leading-relaxed font-medium text-foreground/90">
                        {summary.economics}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-12 order-4 lg:order-5">
              <Card className="bg-card/30 border-border/60 p-5 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                      <Info className="text-primary" size={20} />
                      The Core Economic Challenge
                    </h3>
                    <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        At its core, the AI infrastructure stack is built on big upfront spending—companies borrow money
                        or sign long-term contracts to buy thousands of GPUs and build huge data centers before knowing
                        if enough users will actually pay to use them.
                      </p>
                      <p>
                        Cloud providers and AI model companies hope that future business will cover these costs, but
                        there’s no guarantee, since most customers’ usage is unpredictable and contracts don’t always
                        line up with real demand. This creates a gap: money goes out fast, but steady income comes in
                        slowly (or sometimes not at all).
                      </p>
                      <p className="font-medium text-foreground/90">
                        Only the chip makers and platforms that collect money right away are guaranteed to profit.
                        Everyone else is stuck in a cycle where they keep spending and borrowing, hoping growth will
                        catch up to their commitments—if not, they risk running out of cash and must restructure or get
                        acquired.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start md:items-end space-y-4 w-full">
                    <Link
                      href="/ai-pricing-economics"
                      className="group flex flex-col gap-2 p-5 md:p-6 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-xl transition-all hover:scale-[1.02] cursor-pointer w-full"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary">
                          Deep Dive Analysis
                        </span>
                        <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                      <span className="text-base md:text-lg font-bold text-foreground">
                        Misaligned incentives in the AI ecosystem{" "}
                      </span>
                      <span className="text-xs md:text-sm text-muted-foreground">
                        Explore where profits live and why pricing might not be catching up with reality.
                      </span>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-4 lg:row-span-3 order-5 lg:order-4 h-full">
              <Card className="bg-card border-border h-full">
                <div className="p-4 md:p-6 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary text-primary">
                      <FileText size={20} />
                    </div>
                    <h3 className="font-bold text-base md:text-lg">Material Contracts</h3>
                  </div>
                </div>
                <div className="p-0">
                  {deals.length > 0 ? (
                    <div className="divide-y divide-border/40">
                      {deals.map((deal) => (
                        <div key={deal.id} className="p-4 md:p-5 hover:bg-secondary/30 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-semibold text-sm md:text-base">{deal.company}</div>
                            <div className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                              {deal.value}
                            </div>
                          </div>
                          <div className="text-xs md:text-sm text-muted-foreground mb-3">
                            Deal with <span className="text-foreground font-medium">{deal.customer}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground/80">
                            <span className="flex items-center gap-1">
                              <Info size={12} /> {deal.term}
                            </span>
                            <span>•</span>
                            <span>{deal.source}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-muted-foreground text-sm italic">
                      No public material contracts disclosed for this period.
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 md:mt-12 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} AI Infrastructure Map. Data aggregated from public filings and API sources.
          </div>
          <div className="flex items-center gap-6">
            <span>Built with Next.js & Tailwind</span>
            <span>Real-time FMP API Integration</span>
          </div>
        </div>
      </div>
    </div>
  )
}
