export const siteConfig = {
  name: "Lokeswaran Aruljothy",
  role: "Senior Software Engineer • AI & Full-Stack",
  description:
    "Building AI-native platforms, 0→1 products, and high-impact engineering systems.",
  myImage: "/lokeswaran.jpeg",
  author: "Lokeswaran Aruljothy",
  currentCompany: "Thoughtworks",
  currentCompanyImage: "/thoughtworks-logo.png",
  currentCompanyUrl: "https://www.thoughtworks.com",
  email: "lokeswaranaruljothy@gmail.com",
  links: {
    url: "https://lokes.dev",
    resume:
      "https://drive.google.com/file/d/1a6sP_y6cJ4w3dE8x_3OLyVHSOp18EV7V/view",
    github: "https://github.com/lokeswaran-aj",
    linkedin: "https://www.linkedin.com/in/lokeswaran-aj/",
    twitter: "https://x.com/lokio_aj",
  },

  work: [
    {
      name: "Senior Software Engineer at Thoughtworks",
      link: "https://www.thoughtworks.com",
      period: "Sep 2025 – Present",
      location: "Remote, IN",
      descriptions: [
        "Leading development of an AI-native SDLC automation platform enabling autonomous agents to translate product intent into code.",
        "Designed and built the Specification + MCP workflow, enabling teams to generate business and technical specs using AI in the browser and consume them directly in AI IDEs for agent-driven code execution.",
        "Created architectural patterns that connect reasoning agents, enterprise tools, and delivery pipelines to enable continuous ideation → design → implementation flows.",
        "Shipped the platform's first internal release, now adopted by 2 product teams at Thoughtworks.",
        "Mentoring and guiding 4 engineers through solutioning, pairing, and unblock sessions, improving team velocity and technical alignment.",
        "Working across LLMs, RAG, vector search, structured actions, orchestration graphs, and developer experience tooling."
      ],
      skills:
        "AI Agents, MCP, LangGraph, Typescript, Next.js, Vercel AI SDK, RAG, Postgres, AWS, Docker",
    },

    {
      name: "Software Engineer at Thoughtworks",
      link: "https://www.thoughtworks.com",
      period: "Jul 2022 – Aug 2025",
      location: "Remote, IN",
      descriptions: [
        "Owned the end-to-end UPI + NetBanking payments module from architecture to production launch, supporting ₹56Cr+ in Day-1 volume with 530+ successful transactions.",
        "Built fault-tolerant payment flows with Juspay integrations, adding consistency, retries, and error handling to reduce transaction failures.",
        "Reduced checkout time by 80% (3 min → ~40 sec) by restructuring cart workflows, optimizing APIs, and reducing payload overhead.",
        "Led platform migration from Spryker to Medusa.js, removing legacy bottlenecks and eliminating ~$3M in annual licensing costs.",
        "Built automated reporting tooling reducing turnaround from multiple days to under 5 minutes, eliminating repetitive manual work for 10+ engineers across 5 squads.",
        "Collaborated with designers, PMs, and stakeholders to align roadmap priorities and streamline delivery."
      ],
      skills:
        "Typescript, React, Next.js, Medusa.js, Python, Postgres, Strapi, AWS, CI/CD",
    },

    {
      name: "Software Engineer Intern at Thoughtworks",
      link: "https://www.thoughtworks.com",
      period: "Feb 2022 – Jul 2022",
      location: "Remote, IN",
      descriptions: [
        "Built secure deployment infrastructure on AWS using Nomad, Consul, and Vault, supporting multiple production applications.",
        "Reduced deployment time by 75% through CI/CD automation, containerized pipelines, and optimized image build processes.",
        "Created monitoring dashboards for real-time visibility into delivery metrics and operational health."
      ],
      skills:
        "AWS, Docker, Nomad, Consul, Vault, CI/CD",
    },
  ],

  project: [
    {
      name: "Open Fiesta",
      link: "https://open-fiesta.com",
      period: "Aug 2025",
      descriptions: [
        "AI chat platform with 200+ models such as Gemini, Claude, Perplexity, DeepSeek, Grok, OpenAI, etc., allowing real-time side-by-side comparison and image generation.",
        "Supports bring-your-own-key via OpenRouter, Vercel AI Gateway, and ML APIs. Reached 500+ active users within weeks, fully open-source."
      ],
      skills:
        "Next.js, Typescript, Tailwind CSS, Vercel AI SDK, Shadcn UI, Drizzle ORM, Postgres",
    },
    {
      name: "Not V0",
      link: "https://notv0.dev",
      period: "Jul 2025",
      descriptions: [
        "Open-source alternative to v0.app that generates full Next.js apps from natural-language prompts with live preview and interactive chat-driven iteration.",
        "Onboarded 100+ early users and introduced a sandbox execution environment enabling rapid prototype-to-production cycles."
      ],
      skills:
        "Next.js, Typescript, Supabase, Vercel AI SDK, E2B Sandbox, Tailwind CSS, Shadcn UI, Postgres",
    },
    {
      name: "MCP Server Integrations",
      link: "https://github.com/Klavis-AI/klavis/pulls?q=+is%3Apr+author%3Alokeswaran-aj",
      period: "Jul 2025",
      descriptions: [
        "Developed secure MCP servers for Airtable and monday.com enabling structured JSON-RPC tool execution for AI agents over HTTP/SSE."
      ],
      skills: "FastMCP, Python, Typescript",
    },
    {
      name: "AI Docs",
      link: "https://aidocs.lokeswaran.dev",
      period: "Jan 2025",
      descriptions: [
        "AI-powered documentation assistant using RAG to answer Next.js queries with context awareness.",
        "Fully deployed in production using AWS, Docker, Terraform, and orchestrated retrieval indexing."
      ],
      skills:
        "Next.js, LangGraph, RAG, Postgres, Docker, AWS, Terraform",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
