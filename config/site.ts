export const siteConfig = {
  name: "Lokeswaran Aruljothy",
  role: "Software Engineer",
  description: "Lokeswaran Aruljothy portfolio website",
  myImage: "/lokeswaran.jpeg",
  author: "Lokeswaran Aruljothy",
  currentCompany: "Thoughtworks",
  currentCompanyImage: "/thoughtworks-logo.png",
  currentCompanyUrl: "https://www.thoughtworks.com",
  email: "lokeswaranaruljothy@gmail.com",
  links: {
    url: "https://lokeswaran.dev",
    resume:
      "https://drive.google.com/file/d/1a6sP_y6cJ4w3dE8x_3OLyVHSOp18EV7V/view",
    github: "https://github.com/lokeswaran-aj",
    linkedin: "https://www.linkedin.com/in/lokeswaran-aj/",
    twitter: "https://x.com/lokio_aj",
  },
  work: [
    {
      name: "Software Engineer at Thoughtworks",
      link: "https://www.thoughtworks.com",
      period: "Feb 2022 - Present",
      location: "Remote, IN",
      descriptions: [
        "Designed and implemented a B2B e-commerce platform by integrating MedusaJS and Strapi, resulting in a seamless and scalable solution that enhanced business operations and customer experience.",
        "Collaborated with cross-functional teams to design and develop new features for a remortgage platform for banks, streamlining mortgage processing and improving user experience.",
        "Designed and implemented a scalable, secured robust, maintainable infrastructure using Nomad, Consul and Vault in AWS.",
      ],
      skills:
        "Typescript, NextJS, ReactJS, ExpressJS, PostgreSQL, Python, Springboot, AWS, Docker",
    },
    {
      name: "Software Engineer Intern at Thoughtworks",
      link: "https://www.thoughtworks.com",
      period: "Feb 2022 - Jul 2022",
      location: "Remote, IN",
      descriptions: [
        "Optimized deployment time by 75%, creating a custom docker image & Gitlab pipeline workflows to incorporate automated testing and streamlined vulnerability checker for faster product delivery.",
        "Created custom-crafted SQL query dashboard in Apache Superset to monitor and resolve delivery issues, achieving 60%  success delivery status.",
      ],
      skills:
        "ReactJS, Java, Springboot, SQL, Docker, Apache Superset, AWS, CI/CD",
    },
  ],
  project: [
    {
      name: "Open Fiesta",
      link: "https://open-fiesta.com",
      period: "Aug 2025",
      descriptions: [
        "Open Fiesta lets you chat with 200+ AI models like OpenAI, Gemini, Claude, Perplexity, Deepseek, and Grok in one place. Compare multiple AI model responses side-by-side in real-time and choose the best AI for every task",
        "It is an open source project where you can bring your own API key from OpenRouter, Vercel AI Gateway or AI/ML API and access all the models",
      ],
      skills: "Typescript, Next.js, Tailwind CSS, Vercel AI SDK, Shadcn UI, Better Auth, Drizzle ORM",
    },
    {
      name: "CurlGPT",
      link: "https://curlgpt.vercel.app/",
      period: "May 2023",
      descriptions: [
        "Built a CLI tool with typescript and Node.js and published it on the NPM package manager, gaining over 2000+ downloads.",
        "Leveraged OpenAI's ChatGPT-3.5 API to generate  commands from prompts in the terminal, resulting in efficient development experience.",
      ],
      skills: "Typescript, NPM, NodeJS, NextJS, Github Actions, OpenAI",
    },
    {
      name: "Amplication",
      link: "https://github.com/amplication/amplication/pulls?q=+is%3Apr+author%3Alokeswaran-aj",
      period: "Feb 2023",
      descriptions: [
        "Enhanced the frontend of this open-source project with React, contributing valuable improvements to the user interface and overall user experience.",
        "Implemented an updated service and project name feature allowing users to instantly make modifications from the home page.",
      ],
      skills: "React, Typescript, GraphQL",
    },
    {
      name: "Translation App",
      link: "https://github.com/lokeswaran-aj/translator",
      period: "Nov 2022",
      descriptions: [
        "Developed a cross-platform Google-like Translation App clone using React Native for the frontend and public API for the backend.",
        "Supports 100+ languages and incorporates features like history of translations and saved translations.",
      ],
      skills: "React Native, Translation API",
    },
  ],
}

export type SiteConfig = typeof siteConfig
