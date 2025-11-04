"use server"

export async function fetchFinancialData() {
  const apiKey = process.env.FMP_API_KEY

  if (!apiKey) {
    return new Map([
      ["NVDA", { revenue: 28.0, netIncome: 15.4, operatingIncome: 16.2 }],
      ["AMZN", { revenue: 51.9, netIncome: 2.9, operatingIncome: 4.1 }],
      ["GOOGL", { revenue: 88.3, netIncome: 21.1, operatingIncome: 26.5 }],
      ["MSFT", { revenue: 72.8, netIncome: 21.9, operatingIncome: 25.6 }],
    ])
  }

  const symbols = ["NVDA", "AMZN", "GOOGL", "MSFT"]
  const newData = new Map()

  try {
    for (const symbol of symbols) {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/income-statement/${symbol}?period=quarter&limit=1&apikey=${apiKey}`,
      )
      if (response.ok) {
        const data = await response.json()
        if (data && data.length > 0) {
          const latest = data[0]
          newData.set(symbol, {
            revenue: (latest.revenue || 0) / 1e9,
            netIncome: (latest.netIncome || 0) / 1e9,
            operatingIncome: (latest.operatingIncome || 0) / 1e9,
          })
        }
      }
    }
    return newData
  } catch (error) {
    console.error("Error fetching data:", error)
    return newData
  }
}
