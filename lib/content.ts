// All site copy and data lives here. Items in [brackets] are placeholders — replace with real content.

export const site = {
  name: "TechySolutions",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    "https://techysolutions.com",
  description:
    "ERPNext implementation, Frappe customisation, Next.js web apps and dedicated developers for growing businesses.",
  email: "hello@techysolutions.com",
  phone: "+00 000 000 0000",
  address: "[Office address, City, Country]",
  // Date we started delivering projects; drives the "years of experience" stats.
  startedOn: "2024-10-01",
};

/**
 * Years since site.startedOn, rounded down to a friendly label:
 * just past a year → "2+", around the middle → "2½", close to the next → "~3".
 */
export function yearsOfExperience(now = new Date()) {
  const years = (now.getTime() - new Date(site.startedOn).getTime()) / (365.25 * 24 * 3600 * 1000);
  const whole = Math.floor(years), part = years - whole;
  if (whole < 1) return "<1";
  if (part >= 0.75) return `~${whole + 1}`;
  if (part >= 0.4) return `${whole}½`;
  return `${whole}+`;
}

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { num: "3+", label: "ERPs live" },
  { num: `${yearsOfExperience()} yrs`, label: "Of experience" },
  { num: "100%", label: "Open-source stack" },
];

export const heroFlow = {
  order: { label: "Sales order", id: "SAL-ORD-2026-00118", customer: "Sahyadri Agro Supplies", amount: "₹4,86,200" },
  button: "Approve order",
  pending: "Pending approval",
  portal: { title: "Portal" },
  phone: { title: "Today's loads" },
  problem: { office: "Pending", portal: "Awaiting update", field: "On hold" },
  headlines: ["Three teams. Three versions of the same order.", "ERPNext at the center."],
};

export const clientLogos = [
  { name: "ICFC", url: "https://icfc.com.sg", logo: "/clients/icfc.webp", width: 450, height: 318 },
  { name: "Dieture", url: "https://www.dieture.com", logo: "/clients/dieture.svg", width: 107, height: 40 },
];

export const outcomes = [
  { icon: "database", title: "One source of truth", copy: "Sales, stock, purchasing, accounts and HR in one database." },
  { icon: "clock", title: "Faster month-end", copy: "Reconciliation and reporting that run themselves." },
  { icon: "workflow", title: "Your process, automated", copy: "Approvals, pricing and workflows built the way you work." },
  { icon: "trend", title: "Live dashboards", copy: "Decisions from today’s numbers, not last month’s export." },
] as const;

export type Service = {
  slug: string;
  num: string;
  title: string;
  short: string;
  outcome: string;
  what: string[];
  deliver: string[];
  tech: string[];
};

export const services: Service[] = [
  {
    slug: "erp-customisation",
    num: "01",
    title: "ERP customisation",
    short: "Workflows, approvals, reports and integrations — shipped as upgrade-safe custom apps.",
    outcome: "Your ERP follows your process — not the other way round — and still upgrades cleanly.",
    what: ["Custom doctypes, fields and workflows", "Server scripts and automations", "Reports, dashboards and print formats", "APIs and third-party integrations"],
    deliver: ["A separate, version-controlled custom app", "Tested on staging before release", "Handover docs for your team"],
    tech: ["Frappe", "Python", "JavaScript"],
  },
  {
    slug: "erpnext-implementation",
    num: "02",
    title: "Frappe & ERPNext implementation",
    short: "From spreadsheets or a legacy ERP to ERPNext — scoped, migrated and adopted.",
    outcome: "One system for finance, stock, sales and HR — live on a date you agreed up front.",
    what: ["Fit-gap workshops with your team", "Configuration of modules and roles", "Data migration and validation", "User training and go-live support"],
    deliver: ["A fixed scope and timeline", "Migrated, reconciled opening data", "Trained key users"],
    tech: ["ERPNext", "Frappe HR", "MariaDB"],
  },
  {
    slug: "nextjs-development",
    num: "03",
    title: "Next.js web apps",
    short: "Customer portals, B2B ordering and dashboards — live-synced with your ERP.",
    outcome: "Fast, modern web apps for customers and staff, with ERPNext as the source of truth.",
    what: ["Customer and vendor portals", "B2B / B2C ordering and storefronts", "Internal tools and dashboards", "Mobile-friendly front-ends"],
    deliver: ["Designs and a working prototype first", "Production app on your hosting", "Real-time sync with ERPNext"],
    tech: ["Next.js", "React", "TypeScript"],
  },
];

// Everything beyond the three core services; `id` doubles as an anchor on /services.
export const serviceCatalog = [
  { id: "mobile", icon: "phone", title: "Mobile apps", copy: "React Native apps for field sales, delivery and warehouse teams — online or offline, synced with ERPNext." },
  { id: "integrations", icon: "plug", title: "Integrations", copy: "Payment gateways, banks, WhatsApp, Shopify, marketplaces, GST e-invoicing and any REST API." },
  { id: "reports", icon: "chart", title: "Reports & dashboards", copy: "Query reports, print formats and live dashboards your owners and finance team actually open." },
  { id: "automation", icon: "zap", title: "Workflow automation", copy: "Approvals, alerts, scheduled jobs and auto-created documents that remove manual steps." },
  { id: "migration", icon: "database", title: "Data migration", copy: "Move from Tally, spreadsheets or a legacy ERP with validated, reconciled opening balances." },
  { id: "hr", icon: "users", title: "HR & payroll", copy: "Frappe HR set up for attendance, leave, payroll and appraisals — with your local rules." },
  { id: "custom-apps", icon: "box", title: "Custom Frappe apps", copy: "Standalone business apps and SaaS products built on Frappe, from data model to user roles." },
  { id: "ai", icon: "sparkles", title: "AI on your ERP data", copy: "Document extraction, smart search and assistants that read from ERPNext without leaking data." },
  { id: "hosting", icon: "server", title: "Hosting & DevOps", copy: "Setup on Frappe Cloud, AWS or your own servers — with backups, monitoring and SSL handled." },
  { id: "support", icon: "lifebuoy", title: "Support & upgrades", copy: "Version upgrades, fixes for slow or broken customisations and a monthly support retainer." },
  { id: "audit", icon: "search", title: "ERP health check", copy: "A review of your existing setup: performance, security, data quality and a prioritised fix list." },
  { id: "hire", icon: "code", title: "Dedicated developers", copy: "Frappe, ERPNext and Next.js engineers who join your team full-time or part-time." },
] as const;

export const engagementModels = [
  { title: "Fixed-scope project", fit: "You know what you need", copy: "Agreed scope, price and go-live date. Best for implementations, portals and new apps." },
  { title: "Monthly retainer", fit: "You're already live", copy: "A block of hours each month for support, small changes and upgrades — no tickets lost." },
  { title: "Dedicated team", fit: "You have a long roadmap", copy: "One or more developers working only on your product, managed by you or by us." },
];

export const goLiveChecklist = [
  { label: "Chart of accounts mapped", done: true },
  { label: "Opening stock migrated", done: true },
  { label: "Approval workflows live", done: true },
  { label: "Key users trained", done: false },
];

export const planWeeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"];

export const planPhases = [
  { label: "Discover", start: 1, span: 2, note: "Workshops", outcome: "Signed scope & price", tone: "a" },
  { label: "Configure", start: 3, span: 3, note: "Modules, roles, data", outcome: "Working system to try", tone: "b" },
  { label: "Build", start: 5, span: 4, note: "Custom apps & integrations", outcome: "Demo every week", tone: "c" },
  { label: "Go live", start: 9, span: 4, note: "Training & hypercare", outcome: "Your team running on it", tone: "d" },
] as const;

export const planPromises = [
  "Written scope and fixed price before any code",
  "A live demo every week — no black box",
  "A go-live date we commit to in writing",
  "Hands-on support after launch",
];

export const stack = ["Frappe", "ERPNext", "Python", "MariaDB", "Next.js", "React", "TypeScript", "Docker"];

export const caseCategories = ["All", "Customisation", "Implementation", "Next.js", "Support"] as const;

export type CaseStudy = {
  slug: string;
  category: Exclude<(typeof caseCategories)[number], "All">;
  industry: string;
  title: string;
  outcome: string;
  stack: string[];
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  { slug: "production-planning", category: "Customisation", industry: "[Manufacturing]", title: "[Custom production planning app on ERPNext]", outcome: "[Outcome — e.g. planning time cut from days to hours]", stack: ["Frappe", "Python"] },
  { slug: "warehouse-rollout", category: "Implementation", industry: "[Distribution]", title: "[ERPNext rollout across three warehouses]", outcome: "[Outcome — e.g. stock accuracy up to 99%]", stack: ["ERPNext"] },
  { slug: "b2b-portal", category: "Next.js", industry: "[Wholesale]", title: "[B2B ordering portal synced with ERPNext stock]", outcome: "[Outcome — e.g. 60% of orders now self-serve]", stack: ["Next.js", "Frappe API"] },
  { slug: "version-upgrade", category: "Support", industry: "[Healthcare]", title: "[Major version upgrade and customisation clean-up]", outcome: "[Outcome — e.g. page loads 3× faster]", stack: ["ERPNext", "Docker"] },
  { slug: "pos-pricing", category: "Customisation", industry: "[Retail]", title: "[POS integration and custom pricing rules]", outcome: "[Outcome]", stack: ["Frappe"] },
  { slug: "projects-billing", category: "Implementation", industry: "[Professional services]", title: "[Projects, timesheets and billing on ERPNext]", outcome: "[Outcome]", stack: ["ERPNext", "Frappe HR"] },
];

export const featuredCase = {
  industry: "[Industry]",
  quote: "[Client quote — what changed for the business after go-live.]",
  author: "[Name], [Role], [Company]",
  metrics: [
    { num: "[00%]", label: "[Result metric]" },
    { num: "[00 wks]", label: "[Time to go-live]" },
  ],
};

export const aboutStats = [
  { num: "3+", label: "ERPs live" },
  { num: yearsOfExperience(), label: "Years of experience" },
  { num: "[00]", label: "People on the team" },
];

export const principles = [
  { num: "01", title: "Configure before we customise", copy: "If standard ERPNext can do it, we use it. Less custom code, fewer upgrade headaches." },
  { num: "02", title: "Upgrade-safe by default", copy: "Custom work ships as separate, versioned apps — never edits to the core." },
  { num: "03", title: "Plain-language reporting", copy: "Weekly updates written for owners and finance leads, not just engineers." },
];

export const team = [
  { name: "[Name]", role: "[Founder & CEO]" },
  { name: "[Name]", role: "[Head of Delivery]" },
  { name: "[Name]", role: "[Senior Frappe Developer]" },
  { name: "[Name]", role: "[ERPNext Functional Consultant]" },
  { name: "[Name]", role: "[Next.js Lead]" },
  { name: "[Name]", role: "[Frappe Developer]" },
  { name: "[Name]", role: "[QA Engineer]" },
  { name: "[Name]", role: "[Project Manager]" },
];

export const contactNextSteps = [
  { num: "01", title: "We read it properly", copy: "A consultant reviews your enquiry — not a sales script." },
  { num: "02", title: "A short call", copy: "We ask about your processes, systems and timeline." },
  { num: "03", title: "A written proposal", copy: "Scope, approach and an estimate you can share internally." },
];

export const enquiryNeeds = ["ERP customisation", "ERPNext implementation", "Support & upgrades", "Next.js web app", "Mobile app", "Integrations", "Hire developers", "Something else"];
export const erpOptions = ["Yes", "No", "Not sure"];
export const timelineOptions = ["ASAP", "1–3 months", "Exploring"];
