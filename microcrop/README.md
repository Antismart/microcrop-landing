# MicroCrop Landing

Immersive marketing site for the MicroCrop DeFi crop-insurance protocol. Built with the Next.js App Router, Tailwind CSS v4, and lucide-react icons to showcase product capabilities, metrics, and legal documentation on a single responsive page.

<p align="center">
	<!-- Replace with an actual screenshot when available -->
	<em>Hero dashboard, dynamic metrics, and policy activity feed.</em>
</p>

<p>
	<a href="https://nextjs.org/">
		<img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js" />
	</a>
	<a href="https://www.typescriptlang.org/">
		<img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript" />
	</a>
	<a href="https://tailwindcss.com/">
		<img src="https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwindcss" alt="Tailwind CSS" />
	</a>
</p>

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Available Scripts](#available-scripts)
6. [Customization Guide](#customization-guide)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)
9. [Next Steps](#next-steps)

## Features

- **Premium hero experience** – Animated gradients, wallet CTA, and a rotating metrics carousel to highlight traction.
- **Weather dashboard preview** – Simulated WeatherXM-powered readings with live-risk badges and environmental stats.
- **Policy activity feed** – Displays recent claim, liquidity, and policy events with animated status indicators.
- **Value proposition grid** – Three feature cards emphasizing onboarding, monitoring, and payout automation.
- **Integrated contact form** – Collects partner interest with validation-ready markup (hook up your API of choice).
- **Legal coverage** – Dedicated `Privacy Policy` and `Terms of Service` pages linked from the header and footer.
- **Responsive navigation** – Mobile slide-over menu and desktop hover interactions handled via the App Router.
- **Tailwind CSS v4 styling** – Utility-first design with gradients, glassmorphism, and motion baked in.

## Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- **Language:** TypeScript / JSX
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- **UI Icons:** [lucide-react](https://github.com/lucide-icons/lucide)
- **Tooling:** ESLint (Next-config), Turbopack development server

## Project Structure

```
microcrop/
├── app/
│   ├── page.tsx              # App entry that renders the landing experience
│   ├── landing.tsx           # Primary marketing layout with hero, metrics, CTA, footer
│   ├── privacy-policy/       # Legal copy rendered through the App Router
│   └── terms-of-service/     # Terms page mirroring the privacy layout
├── components/
│   └── ContactForm.tsx       # Partner inquiry form embedded mid-page
├── public/                   # Shared assets (logo, illustrations)
├── app/globals.css           # Tailwind CSS v4 global styles and theme tokens
├── next.config.ts            # Next.js configuration (App Router defaults)
├── package.json              # Scripts, dependencies, and metadata
└── tsconfig.json             # TypeScript compiler configuration
```

## Getting Started

1. **Prerequisites**
	 - Node.js ≥ 18.18 (Next.js 15 recommendation) or Node.js 20+
	 - npm ≥ 9 (or pnpm / yarn / bun if you prefer)

2. **Install dependencies**

	 ```bash
	 npm install
	 ```

3. **Start the development server**

	 ```bash
	 npm run dev
	 ```

	 The site will be available at [http://localhost:3000](http://localhost:3000) with hot reloading powered by Turbopack.

## Available Scripts

| Command        | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `npm run dev`  | Starts the dev server with Turbopack and live reload.                       |
| `npm run build`| Produces an optimized production build in `.next/`.                         |
| `npm run start`| Runs the production build locally. Use after `npm run build`.               |
| `npm run lint` | Lints the project with Next.js/ESLint defaults (warnings for `<img>` usage).|

## Customization Guide

- **Branding & assets** – Swap `/public/micro.jpeg` and color tokens for your brand palette.
- **Metrics carousel** – Edit the `metrics` array in `app/landing.tsx` to plug in live data or API calls.
- **Weather & activity data** – Currently static for design purposes; connect to WeatherXM or your backend via server actions or API routes.
- **CTAs & alerts** – Replace placeholder `alert()` handlers with wallet integrations, onboarding flows, or external links.
- **Legal copy** – Update `app/privacy-policy/page.tsx` and `app/terms-of-service/page.tsx` to match your compliance requirements.
- **Contact form** – Wire `components/ContactForm.tsx` to a submission endpoint or provider (e.g., Formspree, Supabase, custom API).

## Deployment

Deploy to any platform that supports Next.js 15. Common options:

- **Vercel** – Zero-config deployments with preview environments and edge optimizations.
- **Netlify / Render** – Build with `npm run build` and serve with `npm run start` behind a Node 18/20 runtime.
- **Docker** – Add a Dockerfile that installs dependencies, builds the project, and runs `next start`.

Ensure environment variables (if any) are duplicated in your hosting provider’s dashboard.

## Troubleshooting

- **Lint warnings for `<img>`** – Replace `<img>` tags with Next.js `<Image>` components or disable the rule if external constraints apply.
- **Tailwind classes missing** – Confirm the Tailwind v4 CLI is loaded via `@import "tailwindcss";` in `app/globals.css` and that the dev server restarted after dependency changes.
- **Typescript typing errors** – Run `npm run lint` to surface diagnostics, then adjust interfaces in `app/landing.tsx` as needed.

## Next Steps

- Hook the contact form to a backend to capture partner leads.
- Integrate wallet connectivity or on-chain interactions in the hero CTA.
- Replace static data with live metrics from your protocol or data warehouse.
- Add integration tests (Playwright/Cypress) once interactions extend beyond static previews.

---

Built with ❤️ to help MicroCrop bring resilient crop insurance to more farmers.
