"use server"

export async function fetchFinancialData(): Promise<
  Record<string, { revenue: number; price: number; volume: number }>
> {
  const apiKey = process.env.FMP_API_KEY

  if (!apiKey) {
    console.warn("[v0] FMP_API_KEY not found, using static data")
    return getStaticFinancialData()
  }

  const symbols = ["NVDA", "AMD", "INTC", "GOOGL", "MSFT", "META", "CRM", "ADBE", "TEAM", "AMZN"]
  const result: Record<string, { revenue: number; price: number; volume: number }> = {}

  const AI_REVENUE_RATIOS: Record<string, number> = {
    NVDA: 0.87, // Data Center
    AMD: 0.5, // Data Center
    INTC: 0.25, // DCAI
    GOOGL: 0.11, // Google Cloud
    MSFT: 0.42, // Intelligent Cloud
    META: 0.02, // Estimated AI-direct revenue (mostly ads)
    CRM: 0.1, // Data Cloud
    ADBE: 0.1, // AI Firefly/Creative Cloud lift
    TEAM: 0.05, // Intelligence features
    AMZN: 0.17, // AWS
  }

  try {
    const requests = symbols.map(async (symbol) => {
      try {
        const response = await fetch(
          `https://financialmodelingprep.com/stable/income-statement?symbol=${symbol}&period=quarter&limit=1&apikey=${apiKey}`,
        )
        if (!response.ok) return null
        const data = await response.json()
        return data[0] // Get latest quarter
      } catch (e) {
        console.error(`Failed to fetch for ${symbol}`, e)
        return null
      }
    })

    const responses = await Promise.all(requests)

    responses.forEach((financials) => {
      if (financials && financials.symbol) {
        const symbol = financials.symbol
        const totalRevenue = financials.revenue / 1000000000 // Convert to Billions
        const ratio = AI_REVENUE_RATIOS[symbol] || 0.1

        result[symbol] = {
          revenue: Number.parseFloat((totalRevenue * ratio).toFixed(1)),
          price: 0, // Not needed for this view
          volume: 0, // Not needed
        }
      }
    })

    const staticData = getStaticFinancialData()
    for (const symbol of symbols) {
      if (!result[symbol]) {
        result[symbol] = staticData[symbol]
      }
    }

    return result
  } catch (error) {
    console.error("[v0] Error fetching financial data:", error)
    return getStaticFinancialData()
  }
}

function getStaticFinancialData(): Record<string, { revenue: number; price: number; volume: number }> {
  return {
    NVDA: { revenue: 26.3, price: 140.5, volume: 45000000 }, // ~87% of 30B
    AMD: { revenue: 3.5, price: 145.2, volume: 25000000 }, // Data Center Segment
    INTC: { revenue: 3.0, price: 22.8, volume: 35000000 }, // DCAI Segment
    GOOGL: { revenue: 10.3, price: 175.3, volume: 20000000 }, // Cloud
    MSFT: { revenue: 26.7, price: 425.8, volume: 18000000 }, // Intelligent Cloud
    META: { revenue: 0.8, price: 580.2, volume: 12000000 }, // Est
    CRM: { revenue: 0.9, price: 345.6, volume: 5000000 }, // Est
    ADBE: { revenue: 0.5, price: 525.4, volume: 3000000 }, // Est
    TEAM: { revenue: 0.2, price: 215.7, volume: 2000000 }, // Est
    AMZN: { revenue: 25.0, price: 180.0, volume: 30000000 }, // AWS
  }
}

export async function fetchCompanyNews(tickers: string[]) {
  return []
}
