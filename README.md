# lokes.dev

This is my [personal website](https://lokes.dev) built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). The website is hosted on Vercel and uses Vercel Analytics for tracking.

## Features

- **MDX support**: I use [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) to render MDX files.
- **Syntax highlighting**: I use [rehype-pretty-code](https://rehype-pretty.pages.dev/) to highlight code blocks.
- **Responsive design**: The website is fully responsive and works well on all devices.

## Running Locally

This application uses Next.js 16, React 19, Tailwind CSS 4, and Node.js 26. The Node.js version is pinned
in `package.json` for Vercel and `.nvmrc` for local development.

```bash
git clone https://github.com/lokeswaran-aj/lokes.dev.git
cd lokes.dev
nvm install
nvm use
pnpm install
pnpm dev
```

> Note: you can use your favorite package manager

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Linting uses ESLint's flat configuration in `eslint.config.mjs`; Next.js 16 no
longer runs lint during builds. Tailwind's theme and plugins are configured in
`app/globals.css`, with `@tailwindcss/postcss` handling CSS compilation.

Type checking uses TypeScript 7 (`tsc`). ESLint still needs the TypeScript 6 API,
so the compiler packages follow Microsoft's documented
[side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0):
`@typescript/native` aliases the latest TypeScript compiler and `typescript`
aliases the latest `@typescript/typescript6` compatibility package.
