export const resumeUrl = "/resume/Mahimul_Islam_CV.pdf";

export const projects = [
  {
    id: "maeknit",
    number: "01",
    title: "Connecting the factory floor.",
    name: "MAEKNIT platform",
    category: "Engineering",
    period: "2025 to Present",
    kind: "systems",
    summary:
      "One connected workflow, from a client's first idea to the manufacturing floor.",
    description:
      "Leading engineering execution across a team of four, building the architecture that connects Admin, Client, and Factory portals with Odoo 18 Enterprise. The platform brings collections, quotations, documents, and production workflows into one ecosystem.",
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
    title: "Expert knowledge. New possibilities.",
    name: "KnitDraft / TMK-Knit",
    category: "Research",
    period: "2025 to Present",
    kind: "knit",
    summary:
      "Exploring AI-assisted industrial knitting, with the expert always in the loop.",
    description:
      "Developing a human-in-the-loop research system at MAEKNIT that applies Task–Method–Knowledge modeling to industrial flat-knitting machine programming. The goal is to reduce repetitive programming effort while preserving expert validation.",
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
    title: "Teaching agents to think again.",
    name: "SAMI · Design Intelligence Lab",
    category: "Research",
    period: "2024 to 2025",
    kind: "agent",
    summary:
      "Metacognitive AI that can locate reasoning errors and adapt its own behavior.",
    description:
      "Contributed to Social Agent Mediated Interactions at Georgia Tech's Design Intelligence Lab. SAMI has been deployed in the OMSCS program for ten semesters and used by more than 11,000 students.",
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
    title: "Care, carried through the system.",
    name: "Genome Medical",
    category: "Engineering",
    period: "2022 to 2025",
    kind: "health",
    summary:
      "Secure clinical platforms and patient data migration with zero data loss.",
    description:
      "Built healthcare applications across Admin, Patient, and Provider portals in a HIPAA-regulated environment. Developed a React and Redux workflow with secure REST APIs to migrate patient data between Genome Medical and GeneMatters.",
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
    title: "Making more room for language.",
    name: "Bangla text summarization",
    category: "Research",
    period: "2020",
    kind: "language",
    summary: "A hybrid extractive summarization system for Bangla documents.",
    description:
      "First-author research applying NLP and machine learning techniques to Bangla text summarization, published in the International Journal of Computer Vision and Signal Processing, Volume 10, Number 1.",
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
      "A two-level architecture using TMK-based self-modeling and integrated Knowledge-Based AI and LLM reasoning to localize and correct errors in deployed agents.",
  },
  {
    title:
      "Correcting LLM Errors: A Metacognitive Architecture for ToM Adaptation in AI Agents",
    venue: "ToM4AI Workshop · AAAI 2026",
    date: "Jan 2026",
    description:
      "A metacognitive Theory-of-Mind adaptation framework evaluated on real-world student feedback: 75% successful adaptation across 20 cases.",
  },
  {
    title: "Adaptable Social AI Agents",
    venue: "ToM4AI Workshop · AAAI 2025",
    date: "May 2025",
    description:
      "Episodic self-explanation capabilities for SAMI, supporting adaptive and context-dependent reasoning in social AI agents.",
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
    intro: "From client idea to factory execution.",
    description:
      "Lead engineering execution across four engineers, owning architecture, implementation, deployment, and production support while mentoring the team and working directly with the CEO and CTO.",
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
    intro: "Reliable software for high-stakes care.",
    description:
      "Built and maintained Admin, Patient, and Provider applications using React, Vue, Flask, Node.js, and PostgreSQL in a HIPAA-regulated environment.",
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
    intro: "Building the foundations.",
    description:
      "Developed websites, internal tools, REST services, scraping pipelines, and automation with Python, Django, JavaScript, and relational databases.",
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
