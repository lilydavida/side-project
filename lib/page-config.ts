export const PAGE_CONFIG = {
  dashboard: {
    title: "Follow the Money trail",
    subtitle: "Revenue vs. contractual commitments across the 5-layer AI stack",
    description:
      "Interactive dashboard tracking $400B in AI infrastructure spending. Visualize revenue performance, fulfillment rates, and contractual obligations across chip makers, hyperscalers, GPU cloud providers, LLMs, and distribution layers.",
    tags: [{ label: "AI Infrastructure" }, { label: "Revenue Analytics" }, { label: "Financial Data" }],
    href: "/dashboard",
  },
  insights: {
    title: "The $280B Misalignment: Why existing Pricing Models don't encourage AI adoption",
    subtitle: "Research & Analysis",
    description:
      "OpenAI loses $11.5B/quarter. CoreWeave's debt eats 21% of revenue. Everyone except NVIDIA and distribution is unprofitable. A deep dive into where the AI economy breaks, why current models fail, and what fixes it.",
    tags: [{ label: "AI Economics" }, { label: "Pricing Strategy" }, { label: "Market Analysis" }],
    href: "/insights",
  },
  pricingAnalysis: {
    title: "The $1.4 Trillion AI Mystery: Rethinking How Value Flows",
    subtitle: "Outcome-Based Pricing Research",
    description:
      "From Sam Altman's candid response to a $1.4T question to practical outcome-based pricing models. How hybrid approaches could realign incentives across the AI stack and make everyone profitable.",
    tags: [{ label: "Business Models" }, { label: "Outcome Pricing" }, { label: "Value Creation" }],
    href: "/ai-pricing-economics",
  },
} as const
