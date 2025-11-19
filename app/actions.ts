"use server"

const STATIC_FINANCIAL_DATA = new Map([
  ["NVDA", { revenue: 28.0, netIncome: 15.4, operatingIncome: 16.2 }],
  ["AMD", { revenue: 5.8, netIncome: 0.3, operatingIncome: 0.4 }],
  ["INTC", { revenue: 12.7, netIncome: -1.6, operatingIncome: -2.4 }],
  ["AMZN", { revenue: 158.9, netIncome: 15.3, operatingIncome: 17.4 }],
  ["GOOGL", { revenue: 88.3, netIncome: 26.3, operatingIncome: 28.5 }],
  ["MSFT", { revenue: 65.6, netIncome: 24.7, operatingIncome: 30.6 }],
])

export async function fetchFinancialData() {
  return STATIC_FINANCIAL_DATA
}

export async function fetchCompanyNews(tickers: string[]) {
  return []
}
