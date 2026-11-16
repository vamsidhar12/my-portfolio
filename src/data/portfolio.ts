// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO DATA — sourced from vamsidhar12/vamsidhar12 README.md
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Vamsidhar Reddy Poothi",
  initials: "VRP",
  title: "Senior Software Engineer",
  tagline: "A bug is just an undocumented feature waiting to disappoint someone.",
  headline: "I build reliable, secure distributed systems on Azure and Kubernetes.",
  siteDescription:
    "Senior Software Engineer in Dallas, TX specializing in cloud-native backend, distributed systems, and platform engineering. Former Microsoft engineer; open to Mid-level and Senior roles.",
  bio: `Senior Software Engineer with 5+ years of experience building fault-tolerant, high-availability distributed systems at Microsoft, full stack experience at Paycom, and as an Associate Systems Engineer at TCS. I specialize in cloud-native backend, platform engineering, and distributed architecture — turning complex reliability challenges into clean, resilient systems.

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
  "Core & Architecture": [
    "Distributed Systems",
    "Microservices",
    "Event-Driven Architecture",
    "REST APIs",
    "High Availability",
    "Fault Tolerance",
    "System Design",
  ],
  Languages: ["C# / .NET Core", "Java (8/11/17)", "Python", "TypeScript", "JavaScript (ES6+)", "C++"],
  "Cloud & Infra": ["Azure (AKS)", "AWS", "Kubernetes", "Docker", "Infrastructure as Code", "Key Vault", "Blob Storage"],
  "DevOps & Security": [
    "Azure DevOps",
    "CI/CD & YAML Pipelines",
    "Git",
    "Grafana",
    "App Insights",
    "OAuth 2.0",
    "JWT",
    "MSAL",
    "PoP Tokens",
    "mTLS",
    "Azure NSGs",
  ],
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
    title: "Distributed Orchestration Platform",
    description:
      "Designed a fault-tolerant orchestration platform in C#/.NET Core managing configuration state transitions across 1,300+ production servers, enabling zero-downtime cloud migrations and eliminating unplanned maintenance windows.",
    tech: ["C# / .NET Core", "Azure", "Kubernetes", "IaC", "Azure DevOps"],
    github: "",
    live: "",
    featured: true,
    image: "/images/orchestration.svg",
  },
  {
    id: 2,
    title: "Distributed Observability Platform",
    description:
      "Observability stack built on 30+ Grafana dashboards and 100+ alerts across 1,300+ production servers. Improved MTTD by 20%, made on-call response more efficient, and helped the team meet SLO targets.",
    tech: ["Azure", "Grafana", "App Insights", "Kubernetes", "C#"],
    github: "",
    live: "",
    featured: true,
    image: "/images/observability.svg",
  },
  {
    id: 3,
    title: "Platform Security Hardening",
    description:
      "Implemented OAuth 2.0 / MSAL, migrated service authentication from mTLS to Proof-of-Possession (PoP) tokens, and extended Azure NSGs to Redis, Key Vault, CosmosDB, and Blob Storage — reducing attack surface and compliance risk.",
    tech: ["C# / .NET Core", "Azure", "MSAL", "PoP Tokens", "mTLS", "NSGs"],
    github: "",
    live: "",
    featured: true,
    image: "/images/security.svg",
  },
  {
    id: 4,
    title: "Enterprise Vulnerability Remediation",
    description:
      "Remediated 98% of 12,000 vulnerabilities across production-scale VMware infrastructure for Mars, Incorporated, improving security posture and uptime reliability.",
    tech: ["Splunk", "VMWare", "Active Directory", "PowerShell", "Group Policy"],
    github: "",
    live: "",
    featured: true,
    image: "/images/vulnerability.svg",
  },
  {
    id: 5,
    title: "My Portfolio (This Site)",
    description:
      "Personal portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion. Shipped using Claude Code — an experiment in AI-assisted development.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/vamsidhar12",
    live: "",
    featured: true,
    image: "/images/portfolio.svg",
  },
];

export const education = [
  {
    id: 1,
    school: "Texas Tech University",
    degree: "M.S. in Computer Science",
    detail: "GPA 4.0 / 4.0",
    period: "Aug 2019 – May 2021 · Lubbock, TX",
  },
  {
    id: 2,
    school: "Andhra University",
    degree: "B.Tech in Computer Science",
    detail: "GPA 8.0 / 10",
    period: "Sep 2014 – May 2018 · Visakhapatnam, India",
  },
];

export const experience = [
  {
    id: 1,
    company: "Microsoft",
    role: "Software Engineer",
    period: "August 2022 – December 2025",
    location: "Dallas, TX (Remote)",
    bullets: [
      "Owned the design of a fault-tolerant distributed orchestration platform in C#/.NET Core managing configuration state transitions across 1,300+ production servers, enabling zero-downtime cloud migrations and eliminating unplanned maintenance windows.",
      "Re-architected configuration-as-code and IaC pipelines to decouple cloud dependencies and add modular orchestration layers, reducing configuration-driven incidents and cutting deployment cycle time.",
      "Built observability infrastructure with 30+ Grafana dashboards and 100+ alerts, improving MTTD and on-call response efficiency by 20% while meeting SLO targets.",
      "Led platform security hardening: implemented OAuth 2.0 / MSAL, migrated from mTLS to Proof-of-Possession (PoP) tokens, and extended Azure NSGs to Redis, Key Vault, CosmosDB, and Blob Storage.",
      "Partnered with infrastructure, security, and deployment teams on a Kubernetes (AKS) containerization strategy enabling horizontal scaling and standardized deployments.",
    ],
  },
  {
    id: 2,
    company: "Paycom",
    role: "Software Engineer – Full Stack",
    period: "June 2021 – August 2022",
    location: "Dallas, TX",
    bullets: [
      "Led migration of critical modules from a legacy PHP MVC monolith to a React + Node.js architecture supporting high-concurrency enterprise workloads, delivering a 25% improvement in application performance.",
      "Co-designed and delivered 3 customer-driven features used by hundreds of concurrent users, working with product, QA, and business stakeholders.",
    ],
  },
  {
    id: 3,
    company: "Tata Consultancy Services (TCS)",
    role: "Associate Systems Engineer",
    period: "June 2018 – June 2019",
    location: "Hyderabad, India",
    bullets: [
      "Remediated 98% of 12,000 vulnerabilities across production-scale VMware infrastructure for Mars, Incorporated, improving system security and uptime reliability.",
      "Managed Active Directory and Group Policy Objects (GPOs) across enterprise-scale environments, enforcing secure and reliable access control.",
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
