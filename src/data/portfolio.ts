// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO DATA — sourced from vamsidhar12/vamsidhar12 README.md
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Vamsidharrrr Reddy Poothi",
  initials: "VRP",
  title: "Senior Software Engineer",
  tagline: "A bug is just an undocumented feature waiting to disappoint someone.",
  bio: `Senior Software Engineer with 5+ years of experience building fault-tolerant, high-availability distributed systems at Microsoft, full stack experience at Paycom, and as a System Engineer at TCS. I specialize in cloud-native backend, platform engineering, and distributed architecture — turning complex reliability challenges into clean, resilient systems.

M.S. Computer Science (GPA 4.0) — Texas Tech University`,
  location: "Dallas, TX, USA",
  email: "vamsidhar.reddy1207@gmail.com",
  github: "https://github.com/vamsidhar12",
  linkedin: "https://linkedin.com/in/vamsidhar-reddy-poothi",
  leetcode: "https://leetcode.com/u/Vamsidhar12/",
  resumeUrl: "https://github.com/vamsidhar12/vamsidhar12/raw/main/Vamsi_Resume.pdf",
  availableForWork: true,
};

export const stats = [
  { label: "Prod Servers Managed", value: "1,300+" },
  { label: "MTTD Improvement", value: "20%" },
  { label: "App Perf Boost", value: "25%" },
  { label: "Remediation improved 70% → 98% across 12,000 servers", value: "98%" },
];

export const skills: Record<string, string[]> = {
  Languages: ["C# / .NET Core", "Java", "Python", "TypeScript", "JavaScript", "C++"],
  "Cloud & Infra": ["Azure", "AWS", "Kubernetes", "Docker", "Terraform", "CosmosDB", "Key Vault", "Blob Storage"],
  "DevOps & Security": ["Azure DevOps", "CI/CD Pipelines", "Grafana", "App Insights", "OAuth 2.0", "JWT", "mTLS", "MSAL"],
  Databases: ["SQL Server", "PostgreSQL", "MySQL", "Redis", "CosmosDB"],
};

export const certifications = [
  {
    name: "Microsoft Azure Fundamentals",
    short: "AZ-900",
    issuer: "Microsoft",
    status: "certified" as const,
    url: "https://learn.microsoft.com/api/credentials/share/en-us/VamsidharReddyPoothi-1958/6E4D70BBEF57DA9E?sharingId=B2BCA2C0AFFE25D6",
    badge: "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    short: "AI-900",
    issuer: "Microsoft",
    status: "certified" as const,
    url: "https://learn.microsoft.com/api/credentials/share/en-us/VamsidharReddyPoothi-1958/EE6F0DC23A86534D?sharingId=B2BCA2C0AFFE25D6",
    badge: "https://images.credly.com/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    short: "CLF-C02",
    issuer: "Amazon Web Services",
    status: "certified" as const,
    url: "https://www.credly.com/badges/d9074046-9bf0-4f0a-9091-ecccf6aaaea3/public_url",
    badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/linkedin_thumb_image.png",
  },
  {
    name: "AWS Certified AI Practitioner",
    short: "AIF-C01",
    issuer: "Amazon Web Services",
    status: "certified" as const,
    url: "https://www.credly.com/badges/23516378-d46d-418f-81b1-833058a76802/public_url",
    badge: "https://images.credly.com/size/340x340/images/4d4693bb-530e-4bca-9327-de07f3aa2348/linkedin_thumb_image.png",
  },
  {
    name: "AWS Certified Developer – Associate",
    short: "DVA-C02",
    issuer: "Amazon Web Services",
    status: "in-progress" as const,
    url: "",
    badge: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Distributed Observability Platform",
    description:
      "Internal platform to unify metrics, traces, and logs across 1,300+ production servers. Reduced MTTD by 20% and enabled on-call teams to pinpoint incidents in seconds.",
    tech: ["Azure", "Grafana", "App Insights", "Kubernetes", "C#"],
    github: "",
    live: "",
    featured: true,
    image: "/DistributedSystems.jpeg",
  },
  {
    id: 2,
    title: "Cloud-Native Auth Service",
    description:
      "Zero-trust authentication service supporting OAuth 2.0, mTLS, and Proof-of-Possession tokens for multi-tenant SaaS. Secured 100k+ daily active sessions.",
    tech: ["C# / .NET Core", "Azure", "MSAL", "JWT", "Docker"],
    github: "",
    live: "",
    featured: true,
    image: "/CloudComputing.png",
  },
  {
    id: 3,
    title: "Vulnerability Remediation Pipeline",
    description:
      "Automated scanning and remediation pipeline that resolved 98% of 12,000+ vulnerabilities across enterprise systems, integrated with Azure DevOps CI/CD.",
    tech: ["Splunk", "VMWare", "Microsoft Admin Center", "PowerShell", "Altiris/Symantec"],
    github: "",
    live: "",
    featured: false,
    image: "/Vulnerability.png",
  },
  {
    id: 4,
    title: "My Portfolio (This Site)",
    description:
      "Personal portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion. Shipped using Claude Code — an experiment in AI-assisted development.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/vamsidhar12",
    live: "",
    featured: false,
    image: "/Portfolio.png",
  },
];

export const experience = [
  {
    id: 1,
    company: "Microsoft",
    role: "Senior Software Engineer",
    period: "August 2022 – December 2025",
    location: "Dallas, TX (Remote)",
    bullets: [
      "Managed infrastructure for 1,300+ production servers, maintaining 99.9%+ availability across distributed services.",
      "Reduced Mean Time to Detect (MTTD) by 20% through unified observability using Grafana and Azure Application Insights.",
      "Built and owned YAML-based CI/CD pipelines in Azure DevOps for microservices deployed on Kubernetes.",
      "Implemented Proof-of-Possession (PoP) token auth and mTLS across inter-service communication, hardening the security posture significantly.",
    ],
  },
  {
    id: 2,
    company: "Paycom",
    role: "Software Engineer",
    period: "June 2021 – August 2022",
    location: "Dallas, TX",
    bullets: [
      "Boosted application performance by 25% through distributed caching (Redis), query optimization, and async processing.",
      "Implemented OAuth 2.0 / JWT authentication for a multi-tenant SaaS HR platform serving thousands of business clients.",
      "Contributed to platform engineering initiatives on Azure with Docker-containerized .NET Core services.",
    ],
  },
  {
    id: 3,
    company: "Tata Consultancy Services (TCS)",
    role: "Software Engineer",
    period: "June 2018 – June 2019",
    location: "Hyderabad, India",
    bullets: [
      "Remediated 98% of 12,000+ identified security vulnerabilities across enterprise client systems.",
      "Built RESTful APIs using .NET Core and Java for large-scale enterprise integrations.",
      "Collaborated on distributed system architecture and database performance tuning (SQL Server, PostgreSQL).",
    ],
  },
];

export const interests = [
  { label: "Distributed Systems", icon: "Network" },
  { label: "AI & LLM Research", icon: "Cpu" },
  { label: "Cricket", icon: "Trophy" },
  { label: "Chess", icon: "Crown" },
  { label: "PS5 Gaming", icon: "Gamepad2" },
  { label: "Competitive Programming", icon: "Code2" },
  { label: "Coffee", icon: "Coffee" },
  { label: "Cloud Architecture", icon: "Cloud" },
];
