"use server"

export async function fetchFinancialData(): Promise<
  Record<string, { revenue: number; commitments: number; price: number; volume: number }>
> {
  const apiKey = process.env.FMP_API_KEY

  if (!apiKey) {
    console.warn("[v0] FMP_API_KEY not found, using static data")
    return getStaticFinancialData()
  }

  const symbols = ["NVDA", "AMD", "INTC", "GOOGL", "MSFT", "META", "CRM", "ADBE", "TEAM", "AMZN"]
  const result: Record<string, { revenue: number; commitments: number; price: number; volume: number }> = {}

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
          { next: { revalidate: 3600 } },
        )

        if (response.status === 429) {
          console.warn(`[v0] Rate limit reached for ${symbol}, using fallback`)
          return null
        }

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
        const netIncome = financials.netIncome / 1000000000 // Convert to Billions
        const ratio = AI_REVENUE_RATIOS[symbol] || 0.1

        // If NetIncome is negative, commitments = Revenue + Loss = Total Spending
        const impliedCommitments = (totalRevenue - netIncome) * ratio * 4 // Annualize
        const annualizedRevenue = totalRevenue * ratio * 4

        result[symbol] = {
          revenue: Number.parseFloat(annualizedRevenue.toFixed(1)),
          commitments: Number.parseFloat(impliedCommitments.toFixed(1)),
          price: 0,
          volume: 0,
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

function getStaticFinancialData(): Record<
  string,
  { revenue: number; commitments: number; price: number; volume: number }
> {
  return {
    NVDA: {
      revenue: 198.4,
      commitments: 95.2, // Est. costs (~48% margin)
      price: 140.5,
      volume: 45000000,
    },
    AMD: {
      revenue: 18.4,
      commitments: 16.2, // Lower margin
      price: 145.2,
      volume: 25000000,
    },
    INTC: {
      revenue: 13.7,
      commitments: 18.5, // Loss making -> higher commitments
      price: 22.8,
      volume: 35000000,
    },
    GOOGL: {
      revenue: 45.0,
      commitments: 32.0, // High capex/costs
      price: 175.3,
      volume: 20000000,
    },
    MSFT: {
      revenue: 118.3,
      commitments: 75.0, // High margin but high capex
      price: 425.8,
      volume: 18000000,
    },
    META: {
      revenue: 4.1,
      commitments: 3.5,
      price: 580.2,
      volume: 12000000,
    },
    CRM: {
      revenue: 4.1,
      commitments: 3.2,
      price: 345.6,
      volume: 5000000,
    },
    ADBE: {
      revenue: 2.4,
      commitments: 1.5,
      price: 525.4,
      volume: 3000000,
    },
    TEAM: {
      revenue: 1.0,
      commitments: 1.1, // Investing for growth
      price: 215.7,
      volume: 2000000,
    },
    AMZN: {
      revenue: 122.5,
      commitments: 95.0, // AWS margins are ~30%, so 70% costs
      price: 180.0,
      volume: 30000000,
    },
  }
}

export async function fetchCompanyNews(tickers: string[]) {
  return []
}
