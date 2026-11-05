export const siteConfig = {
  name: "Lokeswaran Aruljothy",
  role: "AI Engineer • Voice AI & LLM Agents",
  description:
    "AI Engineer at Gnani AI. I build and operate voice AI products, multilingual agents, and the systems behind them. Previously at Thoughtworks.",
  myImage: "/lokeswaran.jpeg",
  author: "Lokeswaran Aruljothy",
  currentCompany: "Gnani AI",
  currentCompanyImage: "/gnani-ai-logo.png",
  currentCompanyUrl: "https://www.gnani.ai",
  previousCompany: {
    name: "Thoughtworks",
    image: "/thoughtworks-logo.png",
    url: "https://www.thoughtworks.com",
  },
  currentProduct: {
    name: "GyaaniJyotish",
    url: "https://gyaanijyotish.com",
  },
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
      name: "AI Engineer at Gnani AI",
      link: "https://www.gnani.ai",
      period: "Jun 2026 – Present",
      descriptions: [
        "Built and launched GyaaniJyotish, a multilingual voice AI product for personalized astrology conversations. Own the product from architecture and full-stack development through deployment and day-to-day operations.",
        "Connected voice agents to personalized MCP tools and persistent memory, supporting 1.1M+ unique callers and 127K+ calls lasting at least five minutes.",
        "Separated API and MCP workloads and built durable background processing with PostgreSQL and Redis. The application handled 790K+ call attempts in a peak day and 2.1M+ answered calls overall.",
      ],
      skills:
        "Voice AI, LLM Agents, MCP, Python, FastAPI, TypeScript, Next.js, PostgreSQL, Redis, Docker",
    },
    {
      name: "Senior Software Engineer at Thoughtworks",
      link: "https://www.thoughtworks.com",
      period: "Sep 2025 – Apr 2026",
      location: "Remote, IN",
      descriptions: [
        "Led the Specification + MCP workflow for an AI-native software delivery platform: teams authored business and technical specifications in the browser, then made that context available to coding agents in their IDEs.",
        "Helped deliver the first internal release, adopted by two product teams at Thoughtworks.",
        "Provided technical leadership to four engineers through architecture discussions, pairing, and implementation support.",
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
        "Owned the UPI and NetBanking payments service from architecture to production, supporting ₹56Cr in first-day transaction volume across 530+ successful transactions.",
        "Integrated Juspay with fault-tolerant payment handling, bringing reliability concerns into the transaction flow from the start.",
        "Contributed to the migration from Spryker to Medusa.js, helping the team move away from a legacy monolith and reduce annual platform licensing costs by approximately $3M.",
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
        "Reduced deployment time by 75% through CI/CD improvements and containerized build pipelines.",
        "Worked on AWS deployment infrastructure using Nomad, Consul, and Vault.",
      ],
      skills:
        "AWS, Docker, Nomad, Consul, Vault, CI/CD",
    },
  ],

  project: [
    {
      name: "Zeppy",
      link: "https://github.com/lokeswaran-aj/zeppy",
      period: "Feb 2026",
      summary: "A multilingual voice agent that calls businesses in parallel and compares the answers.",
      recognition: "2nd Prize · Google DeepMind × Cerebral Valley · $30,000 in AI credits",
      descriptions: [
        "Describe what you need once. Zeppy calls businesses in parallel, holds real-time conversations in their preferred language, and returns a summary to help you compare the options.",
        "Built with my teammate at the Gemini 3 Bengaluru Hackathon, where we won second prize and $30,000 in Gemini AI credits among 80+ teams.",
      ],
      skills: "Gemini Realtime API, LiveKit, Twilio, Next.js, PostgreSQL",
    },
    {
      name: "OpenCut",
      link: "https://github.com/lokeswaran-aj/opencut",
      period: "Mar 2026",
      summary: "Turn a topic into a researched, narrated video with a live preview and MP4 export.",
      descriptions: [
        "Built an AI video creation workflow that turns a topic or URL into a researched script, generated narration, and an animated video.",
        "Connected Firecrawl research and ElevenLabs voice generation to a Remotion preview and export pipeline, so users can iterate in chat before downloading an MP4.",
      ],
      skills: "Next.js, TypeScript, Gemini, Firecrawl, ElevenLabs, Remotion, PostgreSQL, Cloudflare R2",
    },
    {
      name: "Open Fiesta",
      link: "https://github.com/lokeswaran-aj/open-fiesta",
      period: "Aug 2025",
      summary: "An open-source workspace for comparing AI model responses side by side.",
      descriptions: [
        "Built an open-source AI chat workspace with access to 200+ models and real-time, side-by-side response comparison, helping users evaluate models on the same task.",
        "Reached 800+ active users within the first few weeks. Supports bring-your-own-key access and image generation.",
      ],
      skills:
        "Next.js, Typescript, Tailwind CSS, Vercel AI SDK, Shadcn UI, Drizzle ORM, Postgres",
    },
    {
      name: "Not V0",
      link: "https://github.com/lokeswaran-aj/notv0.dev",
      period: "Jul 2025",
      descriptions: [
        "Built an open-source app builder that turns a natural-language prompt into a Next.js application, with live preview and chat-based iteration.",
        "Used isolated E2B sandboxes to run generated applications and onboarded 100+ early users.",
      ],
      skills:
        "Next.js, Typescript, Supabase, Vercel AI SDK, E2B Sandbox, Tailwind CSS, Shadcn UI, Postgres",
    },
    {
      name: "MCP Server Integrations",
      link: "https://github.com/Klavis-AI/klavis/pulls?q=+is%3Apr+author%3Alokeswaran-aj",
      period: "Jul 2025",
      descriptions: [
        "Contributed secure Airtable and monday.com MCP servers to Klavis, giving AI agents tools to interact with business data and workflows.",
      ],
      skills: "FastMCP, Python, Typescript",
    },
    {
      name: "AI Docs",
      link: "https://github.com/lokeswaran-aj/aidocs",
      period: "Jan 2025",
      descriptions: [
        "Built a documentation assistant that retrieves relevant Next.js documentation before generating an answer, connecting RAG and conversational search in a working application.",
        "Deployed with AWS, Docker, and Terraform.",
      ],
      skills:
        "Next.js, LangGraph, RAG, Postgres, Docker, AWS, Terraform",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
