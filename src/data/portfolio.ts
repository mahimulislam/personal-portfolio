export const resumeUrl = "/resume/Mahimul_Islam_CV.pdf";

export const projects = [
  {
    id: "maeknit",
    number: "01",
    title: "Connecting clients and factories.",
    name: "MAEKNIT platform",
    category: "Engineering",
    period: "2025 to Present",
    kind: "systems",
    summary:
      "Software that takes a client’s idea through to factory production.",
    description:
      "I lead a team of four engineers building Admin, Client, and Factory portals connected to Odoo 18 Enterprise. The platform handles collections, quotations, documents, and production workflows.",
    details: [
      "Multi-portal role-based access, CRM, and automated client onboarding with bidirectional Odoo synchronization.",
      "Factory quotation workflows connected to Sales, R&D, MRP, Inventory, and warehouse operations.",
      "S3 document management, Excalidraw collaboration, and real-time messaging through Server-Sent Events.",
      "AI-assisted meeting summaries, structured requirements, and draft proposals with expert review.",
    ],
    tech: ["Next.js", "TypeScript", "Python", "Odoo", "AWS", "PostgreSQL"],
  },
  {
    id: "knitdraft",
    number: "02",
    title: "Helping experts program knitting machines.",
    name: "KnitDraft / TMK-Knit",
    category: "Research",
    period: "2025 to Present",
    kind: "knit",
    summary:
      "Research into AI-assisted industrial knitting, with experts reviewing the results.",
    description:
      "At MAEKNIT, I’m developing a research system that uses Task–Method–Knowledge modeling to help program industrial flat-knitting machines. The aim is to reduce repetitive programming work while keeping experts responsible for validation.",
    details: [
      "A structured knowledge pipeline spanning machine programs, panel specifications, measurement data, and swatch results.",
      "Capturing program revisions, manufacturing timing, and machine-specific knowledge from development workflows.",
      "Combining symbolic manufacturing knowledge and LLMs to assist initial machine-program generation.",
    ],
    tech: ["Python", "LLMs", "TMK modeling", "OpenAI APIs", "Odoo"],
  },
  {
    id: "sami",
    number: "03",
    title: "Helping AI agents correct their mistakes.",
    name: "SAMI · Design Intelligence Lab",
    category: "Research",
    period: "2024 to 2025",
    kind: "agent",
    summary:
      "An AI agent that can find errors in its reasoning and adapt its behavior.",
    description:
      "I contributed to Social Agent Mediated Interactions (SAMI) at Georgia Tech's Design Intelligence Lab. More than 11,000 students have used SAMI in the OMSCS program across ten semesters.",
    details: [
      "Co-designed a two-level metacognitive architecture integrating Knowledge-Based AI and LLMs.",
      "Built a Task–Method–Knowledge self-model to localize hallucination, omission, and misinterpretation errors.",
      "Combined Neo4j knowledge graphs, structured representations, and a solution library for automated adaptation.",
      "Related ToM4AI 2026 research achieved 75% successful adaptation across 20 real-world feedback cases.",
    ],
    tech: ["Python", "Neo4j", "Knowledge-Based AI", "LLMs", "Docker"],
  },
  {
    id: "genome",
    number: "04",
    title: "Building healthcare software.",
    name: "Genome Medical",
    category: "Engineering",
    period: "2022 to 2025",
    kind: "health",
    summary:
      "Secure clinical platforms and patient data migration with zero data loss.",
    description:
      "I built Admin, Patient, and Provider applications in a HIPAA-regulated environment. I also developed a React and Redux workflow with secure REST APIs to migrate patient data between Genome Medical and GeneMatters.",
    details: [
      "Cloud services on AWS ECS, Fargate, EC2, S3, and RDS with Docker and PostgreSQL.",
      "Resolved more than 50 security vulnerabilities using Aikido and Sentry.",
      "Automated testing and deployment with Jest, Mocha, Selenium, Cypress, GitLab CI/CD, and Bitbucket Pipelines.",
      "Resolved more than 150 production support tickets within six months.",
    ],
    tech: ["React", "Vue", "Flask", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: "bangla",
    number: "05",
    title: "Summarizing Bangla documents.",
    name: "Bangla text summarization",
    category: "Research",
    period: "2020",
    kind: "language",
    summary: "A hybrid extractive summarization system for Bangla documents.",
    description:
      "I was the first author on research using NLP and machine learning to summarize Bangla text. The work was published in the International Journal of Computer Vision and Signal Processing, Volume 10, Number 1.",
    details: [
      "Developed a hybrid extractive text summarization system.",
      "Applied natural language processing and machine learning to Bangla documents.",
    ],
    tech: ["Python", "NLP", "Machine learning"],
  },
] as const;

export const publications = [
  {
    title:
      "A Metacognitive Architecture for Correcting LLM Errors in AI Agents",
    venue: "IAAI-26 · Emerging Applications of AI · AAAI 2026",
    date: "Jan 2026",
    description:
      "An architecture that helps deployed agents find and correct errors at two levels. It combines TMK-based self-modeling with Knowledge-Based AI and LLM reasoning.",
  },
  {
    title:
      "Correcting LLM Errors: A Metacognitive Architecture for ToM Adaptation in AI Agents",
    venue: "ToM4AI Workshop · AAAI 2026",
    date: "Jan 2026",
    description:
      "A metacognitive Theory-of-Mind framework for adapting agents based on real-world student feedback. It achieved 75% successful adaptation across 20 cases.",
  },
  {
    title: "Adaptable Social AI Agents",
    venue: "ToM4AI Workshop · AAAI 2025",
    date: "May 2025",
    description:
      "Episodic self-explanation capabilities that help SAMI adapt its reasoning to the situation.",
  },
  {
    title: "Hybrid Text Summarizer for Bangla Documents",
    venue:
      "International Journal of Computer Vision and Signal Processing · Vol. 10, No. 1",
    date: "Nov 2020",
    description:
      "First-author research on hybrid extractive summarization for Bangla text using natural language processing and machine learning.",
  },
];

export const experience = [
  {
    company: "MAEKNIT, Inc.",
    role: "Full Stack Software Engineer & AI Researcher",
    period: "Mar 2025 to Present",
    location: "Jamaica, NY",
    intro: "Building the software behind manufacturing.",
    description:
      "I lead a team of four engineers and take responsibility for architecture, implementation, deployment, and production support. I also mentor the team and work directly with the CEO and CTO.",
    points: [
      "Designed multi-portal RBAC architecture for Admin, Client, and Factory users with Next.js, React, and TypeScript.",
      "Integrated Odoo 18 Enterprise across CRM, Sales, R&D, MRP, Inventory, and warehouse operations using Python, OWL, and JSON-RPC.",
      "Built client onboarding, factory quotations, asset management, and real-time cross-portal collaboration.",
      "Built AI-assisted client workflows and am developing KnitDraft / TMK-Knit for expert-reviewed machine programming.",
    ],
    tech: "Next.js / TypeScript / Python / Odoo / AWS / PostgreSQL",
  },
  {
    company: "Genome Medical Inc.",
    role: "Full Stack Engineer",
    period: "Aug 2022 to Jan 2025",
    location: "South San Francisco, CA",
    intro: "Building and supporting clinical applications.",
    description:
      "I built and maintained Admin, Patient, and Provider applications in a HIPAA-regulated environment, using React, Vue, Flask, Node.js, and PostgreSQL.",
    points: [
      "Enabled secure patient data migration between Genome Medical and GeneMatters with zero data loss.",
      "Architected AWS cloud services and automated build, test, and deployment pipelines.",
      "Resolved 50+ vulnerabilities and 150+ support tickets within six months.",
      "Designed role-based permissions and automated testing with Mocha, Jest, Selenium, and Cypress.",
    ],
    tech: "React / Vue / Flask / Node.js / AWS / Docker / PostgreSQL",
  },
  {
    company: "Cardinal Selling Services",
    role: "Software Developer",
    period: "Jul 2014 to Jan 2021",
    location: "Huntingburg, IN",
    intro: "Developing web applications and internal tools.",
    description:
      "I developed websites, internal tools, REST services, scraping pipelines, and automation using Python, Django, JavaScript, and relational databases.",
    points: [
      "Analyzed user requirements and designed relational schemas and entity relationship diagrams.",
      "Built Python data scraping pipelines and automated testing workflows.",
      "Developed APIs and web systems deployed on AWS using React, TypeScript, Node.js, and Docker.",
    ],
    tech: "Python / Django / JavaScript / SQL / PostgreSQL / AWS",
  },
];

export const skillGroups = [
  { label: "Interfaces", skills: "React · Next.js · TypeScript · Vue · OWL" },
  {
    label: "Systems",
    skills: "Python · Node.js · Flask · Django · Odoo · REST · SSE",
  },
  {
    label: "Infrastructure",
    skills: "AWS · Docker · PostgreSQL · Neo4j · CI/CD",
  },
  {
    label: "Intelligence",
    skills: "LLMs · AI agents · Knowledge-Based AI · TMK modeling",
  },
];

export const service = [
  "ACM Collective Intelligence Conference",
  "Journal of Intelligent Manufacturing",
  "IEEE INDICON 2026",
  "ICADCML 2027",
];
