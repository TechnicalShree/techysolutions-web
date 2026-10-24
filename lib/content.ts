// All site copy and data lives here. Items in [brackets] are placeholders — replace with real content.

export const site = {
  name: "TechySolutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://techysolutions.com",
  description:
    "ERPNext implementation, Frappe customisation, Next.js web apps and dedicated developers for growing businesses.",
  email: "hello@techysolutions.com",
  phone: "+00 000 000 0000",
  address: "[Office address, City, Country]",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { num: "[00]+", label: "ERPNext go-lives" },
  { num: "[00] yrs", label: "In business" },
  { num: "100%", label: "Open-source stack" },
];

export const heroDashboard = {
  kpis: [
    { label: "Sales orders", value: "1,284", delta: "+12% vs last month" },
    { label: "To deliver", value: "86", delta: "14 due today" },
    { label: "Overdue", value: "12", delta: "−5 this week" },
  ],
  bars: [38, 52, 45, 61, 58, 70, 64, 79, 72, 85, 80, 94],
  orders: [
    { id: "SO-0912", who: "Northwind Traders", status: "To deliver", tag: "tag tag-outline" },
    { id: "SO-0911", who: "Acme Wholesale", status: "Overdue", tag: "tag tag-accent" },
    { id: "SO-0910", who: "Globex Retail", status: "Paid", tag: "tag tag-neutral" },
  ],
  portal: [
    { item: "SO-0912 · 40 units", state: "Shipped" },
    { item: "SO-0887 · 12 units", state: "Delivered" },
    { item: "QTN-221", state: "Awaiting you" },
  ],
};

export const clientLogos = ["[Client]", "[Client]", "[Client]", "[Client]", "[Client]", "[Client]"];

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

export const goLiveChecklist = [
  { label: "Chart of accounts mapped", done: true },
  { label: "Opening stock migrated", done: true },
  { label: "Approval workflows live", done: true },
  { label: "Key users trained", done: false },
];

export const planWeeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"];

export const planPhases = [
  { label: "Discover", start: 1, span: 2, note: "Workshops", tone: "ink" },
  { label: "Configure", start: 3, span: 3, note: "Modules, roles, data", tone: "mid" },
  { label: "Build", start: 5, span: 4, note: "Custom apps & integrations", tone: "mid" },
  { label: "Go live", start: 9, span: 4, note: "Training & hypercare", tone: "accent" },
] as const;

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
  { num: "[00]+", label: "Implementations" },
  { num: "[00]", label: "Years in business" },
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

export const enquiryNeeds = ["ERP customisation", "ERPNext implementation", "Support & upgrades", "Next.js web app", "Hire developers"];
export const erpOptions = ["Yes", "No", "Not sure"];
export const timelineOptions = ["ASAP", "1–3 months", "Exploring"];
