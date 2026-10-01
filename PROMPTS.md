# PROMPTS.md — Vibe Coding Prompts Log
> **Project**: The Angaar Labs Flagship Website  
> **Problem Statement**: PS 04 — The Angaar Labs Website (Full Stack Exam 2026)  
> **Team**: Team Angaar Devs  

---

### Prompt 01 — Project Understanding & Architecture Planning
- **Prompt Summary**: Analyzed the problem statement PDF and existing Angaar Labs web presence to formulate the complete tech stack, 5-member team structure, information architecture, and UI design tokens.
- **Outcome**: Produced master architecture blueprint covering all 7 routes, ember theme design system, MongoDB schema, and milestone schedule.

---

### Prompt 02 — Master Implementation Blueprint
- **Prompt Summary**: Created `implementation.md` with complete evaluation rubric breakdown (100 marks + 10 bonus), information architecture, route breakdown, design tokens, API specifications, and risk mitigation plan.
- **Outcome**: Generated [implementation.md](file:///d:/SEM_5/Full_stack_Exam/implementation.md).

---

### Prompt 03 — Design Tokens & Core Scaffolding
- **Prompt Summary**: Initialized Next.js 14, TypeScript, Tailwind CSS with "angaari" palette (`base: #0C0A09`, `surface: #1A1614`, `ember: #F2660A`, `flame: #FF8A1E`, `gold: #FACC15`), Mongoose, Zod, and Framer Motion.
- **Outcome**: Created `tailwind.config.ts`, `globals.css`, `package.json`, and `.env.example`.

---

### Prompt 04 — Atomic UI Component Library
- **Prompt Summary**: Built reusable design system primitives with 60fps micro-animations, glassmorphic styling, and interactive states.
- **Outcome**: Created `Button.tsx`, `Container.tsx`, `SectionHeading.tsx`, `Badge.tsx`, `Reveal.tsx`, `Marquee.tsx`, `StatCounter.tsx`, `CustomCursor.tsx`, and `EmberHeroCanvas.tsx`.

---

### Prompt 05 — Global Layout & Navigation
- **Prompt Summary**: Developed responsive fixed glassmorphic Navbar with active route indicators, animated full-screen MobileMenu drawer, and rich Footer with newsletter registration and social links.
- **Outcome**: Created `Navbar.tsx`, `MobileMenu.tsx`, `Footer.tsx`, `layout.tsx`, and `not-found.tsx`.

---

### Prompt 06 — Show-Stopping Homepage (`/`)
- **Prompt Summary**: Assembled the 9 required P0 homepage sections including kinetic typography hero, dual-direction partner/industry marquee, bento services grid, industry sectors, featured project cards, animated stat counters, 4-stage process timeline, client testimonials, and magnetic CTA.
- **Outcome**: Created `HeroSection.tsx`, `MarqueeSection.tsx`, `ServicesGrid.tsx`, `IndustryShowcase.tsx`, `FeaturedWork.tsx`, `StatsSection.tsx`, `ProcessTimeline.tsx`, `TestimonialsSection.tsx`, `CTASection.tsx`, and `app/page.tsx`.

---

### Prompt 07 — Work Portfolio & Dynamic Case Studies (`/work`, `/work/[slug]`)
- **Prompt Summary**: Built category-filterable work grid and dynamic in-depth case study template detailing client profile, bottlenecks, architectural solutions, measurable results, tech badges, and visual gallery.
- **Outcome**: Created `app/work/page.tsx`, `app/work/[slug]/page.tsx`, `ProjectCard.tsx`, `ProjectFilter.tsx`, and `projects.ts` with 6 production case studies.

---

### Prompt 08 — Brand Narrative & Services Deep-Dive (`/about`, `/story`, `/services`)
- **Prompt Summary**: Built Studio manifesto, core values, leadership team cards, origin timeline from hackathon roots to enterprise studio, 8-service specification matrix, and FAQ accordion.
- **Outcome**: Created `app/about/page.tsx`, `app/story/page.tsx`, and `app/services/page.tsx`.

---

### Prompt 09 — Contact Subsystem, Zod Validation & MongoDB Persistence
- **Prompt Summary**: Created two-column contact page with SLA guarantees, interactive inquiry form with Zod client & server validation, `POST /api/v1/contact` route handler, Mongoose `Enquiry` model, and `npm run seed` script.
- **Outcome**: Created `ContactForm.tsx`, `app/contact/page.tsx`, `api/v1/contact/route.ts`, `api/v1/projects/route.ts`, `models/Enquiry.ts`, `models/Project.ts`, `lib/db.ts`, `lib/validations.ts`, and `lib/seed.ts`.

---

### Prompt 10 — Packaging, Verification & README
- **Prompt Summary**: Verified production build, responsive constraints, and generated final evaluation documentation.
- **Outcome**: Generated [README.md](file:///d:/SEM_5/Full_stack_Exam/README.md).
