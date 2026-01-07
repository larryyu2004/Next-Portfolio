# Gemini Context for Next-Portfolio

This `GEMINI.md` file provides context and instructions for AI agents working on this project.

## Project Overview

**Next-Portfolio** is a personal portfolio and blog application built with [Next.js](https://nextjs.org/) (App Router). It features a dynamic blog system powered by MDX files and a project showcase managed via a PostgreSQL database and Prisma.

### Tech Stack

*   **Framework:** Next.js 15.4.4 (React 19)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4, custom animations
*   **Content:** MDX (with `remark-gfm`, `rehype-highlight`, `rehype-slug`)
*   **Database:** PostgreSQL (via Prisma ORM)
*   **Animation:** Motion (Framer Motion)
*   **Package Manager:** npm

## Directory Structure

The project root contains the `next-portfolio` subdirectory where the actual application code resides.

```
/
├── cp.sh                   # Utility script (check content if needed)
├── README.md               # Root documentation
└── next-portfolio/         # Main Next.js application
    ├── app/                # App Router source
    │   ├── _home/          # Components for the home page
    │   ├── _nav/           # Navigation components
    │   ├── blog/           # Blog routes and components
    │   ├── projects/       # Projects page
    │   ├── globals.css     # Global styles (Tailwind + custom animations)
    │   └── page.tsx        # Main entry point
    ├── lib/                # Utility functions
    │   └── buildMarkdownTree.ts # Logic to parse MDX directory structure
    ├── markdown/           # MDX content files (Blog posts)
    ├── prisma/             # Database schema
    │   └── schema.prisma   # Prisma schema definition
    ├── public/             # Static assets (images, SVGs)
    ├── next.config.ts      # Next.js config (MDX plugins)
    └── package.json        # Dependencies and scripts
```

## Key Components

### Markdown/Blog System
*   **Content:** Blog posts are stored as `.mdx` files in `next-portfolio/markdown/`.
*   **Processing:** `lib/buildMarkdownTree.ts` recursively scans the `markdown/` directory to build a navigation tree (folders and files).
*   **Rendering:** MDX is configured in `next.config.ts` with plugins for GitHub-flavored markdown (`remark-gfm`), syntax highlighting (`rehype-highlight`), and slug generation (`rehype-slug`).

### Database (Prisma)
*   **Schema:** Defined in `prisma/schema.prisma`.
*   **Models:**
    *   `Projects`: Stores project details (name, description, dates, githubUrl).
    *   `Technology`: Stores tech stack items.
    *   `ProjectTechnology`: Many-to-many relation between Projects and Technologies.

### Styling & UI
*   **Tailwind:** Configured via `postcss.config.mjs` and `globals.css` (Tailwind v4 `@theme` and `@import`).
*   **Theming:** Supports light/dark mode (variables defined in `globals.css`).
*   **Animations:** Custom CSS keyframe animations (e.g., `wiggle`, `extendHeight`, `blob`) defined in `globals.css`.

## Development Workflow

**Working Directory:** All commands should be run inside the `next-portfolio/` directory.

### Scripts
*   `npm run dev`: Start the development server (localhost:3000).
*   `npm run build`: Build the application for production.
*   `npm run start`: Start the production server.
*   `npm run postinstall` / `npx prisma generate`: Generate Prisma client.

### Common Tasks

*   **Adding a Blog Post:** Create a new `.mdx` file in `next-portfolio/markdown/<category>/`. The system automatically picks it up.
*   **Modifying DB:** Edit `prisma/schema.prisma` and run `npx prisma migrate dev` (or `prisma db push` for prototyping).
*   **Styling:** Use Tailwind utility classes. For complex animations, check `globals.css`.

## Constraints & Conventions

*   **App Router:** Use Next.js App Router conventions (`page.tsx`, `layout.tsx`).
*   **Strict Mode:** TypeScript strict mode is enabled.
*   **Formatting:** Follow existing code style (Prettier/ESLint are configured).
