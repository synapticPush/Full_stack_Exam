# The Angaar Labs — PS 04 | Team Angaar Devs

> **Vibe Coding Examination · Team Round · Full Stack Exam 2026**  
> **Domain**: Flagship Marketing & Web Development Studio  
> **Core Challenge**: World-Class UI & 60fps Motion Architecture  

---

## 👥 Team
| Name | Roll No. | GitHub | Primary Responsibility |
| :--- | :--- | :--- | :--- |
| **Pushpendra Sharma** | 2415800064 | @synapticpush | Core Architecture, Design Tokens, Base Components, Global Layout |
| **Nikhil Singh** | 2415800058 | @thakurnikhilsingh1 | Homepage Master Composition, Kinetic Typography, Ember Canvas |
| **Navya Garg** | 2415800059 | @navya-garg1105 | Portfolio Gallery, Dynamic Case Studies (`/work/[slug]`), Projects Repo |
| **Pratyaksh** | 2415800062 | @pratyaksh-agarwal | Brand Narrative (`/about`, `/story`, `/services`), Process Timeline |
| **Pranshi** | 2415800061 | @pranshi34 | Contact Engine, Zod Validation, API Endpoints, MongoDB Models & Seed |

---

## 🔗 Live Links
- **Frontend / Application**: https://the-angaar-labs.vercel.app *(or local dev server http://localhost:3000)*
- **Backend API**: `http://localhost:3000/api/v1`
- **Demo Video**: *(Link to YouTube / Google Drive 3-5 min walkthrough)*

---

## 🛠 Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with bespoke Angaari Ember Design Tokens
- **Motion & 3D**: [Framer Motion](https://www.framer.com/motion/) (60fps scroll reveals, card hover tilt) & HTML5 Canvas / R3F Embers
- **Database & Persistence**: [MongoDB Atlas](https://www.mongodb.com/) via [Mongoose ODM](https://mongoosejs.com/)
- **Validation**: [Zod](https://zod.dev/) (Shared client & server validation schemas)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## ✨ Features Checklist

### P0 Core Features (All Implemented & Polished)
- [x] **Signature Hero**: Kinetic typography headline reveal, interactive glowing particle canvas, dual CTAs, live client proof chips.
- [x] **Trusted / Industry Marquee**: Infinite smooth dual-ticker for technologies & industries served.
- [x] **Services Bento Grid**: Interactive capability cards with hover glow and direct links to `/services`.
- [x] **Industry Verticals Grid**: 8 specialized industry sectors with hover micro-animations.
- [x] **Featured Work**: 3 flagship animated project cards with live metrics and direct case study links.
- [x] **Why Us / Stat Counters**: Smooth quartic easing numeric counters (`40+ systems`, `99.9% uptime`, `<100ms latency`, `4.8x conversion`).
- [x] **4-Stage Process Timeline**: Connected scroll-revealed steps (Discover $\rightarrow$ Design $\rightarrow$ Build $\rightarrow$ Launch).
- [x] **Client Testimonials**: Verified quotes with client avatars, roles, companies, and metric highlights.
- [x] **Closing CTA Band**: Magnetic action banner routing to `/contact`.
- [x] **Portfolio Listing (`/work`)**: Real-time category filtering (E-commerce, AI Systems, FinTech, Healthcare, EdTech).
- [x] **Dynamic Case Studies (`/work/[slug]`)**: In-depth case studies with Problem, Solution, Result, Tech Stack badges, and Gallery.
- [x] **Brand Story & Culture (`/about`, `/story`)**: Studio manifesto, team cards, timeline storytelling.
- [x] **Services Deep-Dive (`/services`)**: Comprehensive 8-service specification matrix and interactive FAQ accordion.
- [x] **Contact Subsystem (`/contact`)**: Form with Name, Email, Company, Budget, Service, and Message.
- [x] **Backend API & Persistence (`POST /api/v1/contact`)**: Zod client + server validation, MongoDB storage, and structured JSON responses.
- [x] **Seed Script (`npm run seed`)**: One-click database population with 6 flagship case studies and initial enquiries.
- [x] **Responsive Design**: Flawless layout from 360px mobile up to 4K displays with zero horizontal scroll.

### Admin Note
> *Admin CMS and authentication were explicitly declared OUT OF SCOPE by mentor instruction. All dynamic content is served via resilient API routes with database caching and fallback repositories.*

---

## 🎨 Design Direction & Philosophy

### 1. Palette ("Angaari" Flame & Charcoal)
- **Base**: Ultra-deep Charcoal `#0C0A09` & Surface `#1A1614`
- **Primary Ember**: `#F2660A` (High-energy accent and CTAs)
- **Flame Gradient**: `#FF8A1E` $\rightarrow$ `#FACC15` (Gold spark highlights)
- **Ambient Depth**: Radial ember glow (`#7C2D1222`) and glassmorphic panels (`backdrop-blur-xl`).

### 2. Typography
- **Display / Headings**: *Plus Jakarta Sans* & *Outfit* with heavy weight and tight tracking (`leading-[1.1]`).
- **Body Text**: *Inter* for crisp contrast and readability.
- **Data & Tags**: *JetBrains Mono* for technical credibility.

### 3. Motion Language
- Transform and opacity only to maintain smooth 60fps across mobile and desktop.
- Subtle scroll reveals with `whileInView`, interactive card lift on hover, and magnetic custom cursor.

---

## 🚀 Local Setup & Installation

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- MongoDB (Local instance or MongoDB Atlas URI)

### Steps
```bash
# 1. Clone the repository
git clone https://github.com/synapticPush/Full_stack_Exam.git
cd Full_stack_Exam

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# (Optionally update MONGODB_URI in .env.local)

# 4. Seed the database with case studies & sample enquiries
npm run seed

# 5. Launch local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Documentation

Base URL: `/api/v1`

| Method | Endpoint | Access | Purpose |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/contact` | Public | Submit project enquiry (Zod validated, stored in MongoDB) |
| `GET` | `/api/v1/projects` | Public | List all case studies (filterable by `?industry=...&featured=true`) |
| `GET` | `/api/v1/projects/:slug` | Public | Get single case study by slug |

---

## ⚠️ Known Limitations
- MongoDB Atlas connection requires internet access; if offline, the system automatically falls back to an in-memory repository to guarantee zero crashes during local grading.
- Admin dashboard is excluded per explicit mentor guidance.
