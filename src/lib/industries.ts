export interface Engagement {
  sector: string;
  metric: string;
  metricLabel: string;
  headline: string;
  disciplines: string[];
}

export const allEngagements: Engagement[] = [
  { sector: "Energy",          metric: "$10B+",  metricLabel: "Project budget",        headline: "Tax, accounting, and customs structuring of a nuclear power plant construction for a Russian enterprise",                                            disciplines: ["Tax", "Finance"] },
  { sector: "Energy",          metric: "$2B+",   metricLabel: "Structured investment",  headline: "Tax & legal due diligence, holdings structuring, and transfer pricing documentation for all operations of a Chinese energy group of companies in Uzbekistan", disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "FMCG",            metric: "$250M",  metricLabel: "Transaction",            headline: "M&A of a large Uzbek bottler company",                                                                                                               disciplines: ["Tax", "Legal"] },
  { sector: "Fintech",         metric: "$200M",  metricLabel: "Transaction",            headline: "Two major restructuring projects of an international digital bank in its Uzbek subsidiaries",                                                         disciplines: ["Tax", "Legal"] },
  { sector: "Manufacturing",   metric: "$20M",   metricLabel: "Transaction",            headline: "M&A and corporate restructuring of a large Uzbek cement producer",                                                                                   disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Technology",      metric: "$5M",    metricLabel: "Investment",             headline: "Tax structuring and ad-hoc consulting of a major Russian IT company during its market launch in Uzbekistan",                                         disciplines: ["Tax", "Legal"] },
  { sector: "Retail",          metric: "$5M",    metricLabel: "Transaction",            headline: "M&A and structuring for a major local retailer",                                                                                                      disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Islamic Fintech", metric: "~$1M",   metricLabel: "Seed round",             headline: "Tax and legal advisory for the seed investment phase structuring of an Uzbek-based fintech startup operating on Islamic finance principles",           disciplines: ["Tax", "Legal"] },
  { sector: "Public Sector",   metric: "UzFund", metricLabel: "State-owned",            headline: "Reorganization and structuring of an Uzbek state-owned investment fund",                                                                              disciplines: ["Legal", "Tax"] },
  { sector: "Capital Markets", metric: "Policy", metricLabel: "Built from scratch",     headline: "Served as local tax, legal, and finance consultants for international firms hired by the government to develop capital market legislation",             disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Banking",         metric: "Policy", metricLabel: "Built from scratch",     headline: "Served as local consultants for international firms advising the government on banking legislation, including derivatives and REPO frameworks",         disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Islamic Finance", metric: "Policy", metricLabel: "Built from scratch",     headline: "Served as local consultants for an international firm advising the government on integrating Islamic finance instruments into Uzbek legislation",       disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Pharma",          metric: "5+",     metricLabel: "Companies",              headline: "Establishing, structuring, payroll consulting, and ongoing compliance advisory for international pharmaceutical companies in Uzbekistan",              disciplines: ["Tax", "Legal", "HR"] },
  { sector: "Cross-Industry",  metric: "80+",    metricLabel: "Entities incorporated",  headline: "End-to-end incorporation and registration advisory for both local and international companies across multiple industries",                             disciplines: ["Tax", "Legal", "HR"] },
  { sector: "Due Diligence",   metric: "30+",    metricLabel: "Tax & Legal DDs",        headline: "Tax and legal due diligence across renewable energy, mining, oil & gas, FMCG, and manufacturing sectors",                                             disciplines: ["Tax", "Legal"] },
];
