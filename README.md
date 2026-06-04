# 🚀 Cyber-Premium Personal Portfolio

A state-of-the-art, high-performance personal portfolio website showcasing software development, blockchain innovation, and data analytics expertise. This application features a premium dark-by-default aesthetic, glassmorphic UI components, hardware-accelerated 3D custom cursor trails, a custom 3D canvas plexus background, and interactive career timelines.

---

## 💎 Live Experience Features
- **🌌 3D Canvas Plexus System**: An interactive, mouse-responsive 3D node connection plexus network rendered on an HTML5 Canvas, paired with multiple drifting blurred background orbs for deep parallax.
- **🛸 Aerodynamic 3D Cursor Trail**: A custom-drawn vector cursor (distinct dark/light modes) with interactive 3D pitch/yaw tilt response based on mouse velocity, coupled with a lagging outer halo and a canvas-rendered neon particle stream.
- **🎭 Framer Motion Animations**: Smooth slide-in, stagger, and scale-in reveal sequences triggered when scrolling into viewport sections.
- **🔄 Infinite Project Marquee**: A fluid, infinite horizontal marquee loop displaying full-stack projects, complete with interactive 3D card tilt transformations and overlay badges on hover.
- **📊 Interactive Career & Milestone Carousel**: A feature-rich multi-media slider illustrating hackathon victories, research papers, certifications, and entrepreneurship ventures with modal image lightbox zoom capabilities.
- **✉️ Direct Client-Side Contact**: A secure contact form integrated with **EmailJS** sending messages directly from the client browser without backend overhead.
- **🌗 Responsive Theme Toggle**: Instantly switch between custom dark and light themes using CSS variables, Tailwind classes, and `next-themes` client state synchronization.

---

## 🛠️ Technical Stack
### Core Frontend Architecture
- **Framework**: [React 18 (TypeScript)](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) (utilizing SWC compilation)
- **State & Queries**: [@tanstack/react-query 5](https://tanstack.com/query/latest)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)

### Design & Styling
- **CSS Preprocessor**: [Tailwind CSS v3](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (built on Radix UI primitives)
- **Icons**: [Lucide React](https://lucide.dev/)

### Animations & Graphics
- **Motion Engine**: [Framer Motion v12](https://www.framer.com/motion/)
- **Typewriter Effect**: `react-type-animation`
- **Plexus Background**: Vanilla HTML5 Canvas 2D API with 3D projection algorithms

### Cloud & Backend Integrations
- **Database**: [Supabase JS Client](https://supabase.com/)
- **Form Delivery**: [EmailJS API](https://www.emailjs.com/)

---

## 📂 Repository File Structure
```bash
├── public/                 # Static assets, image previews, and resume PDF
├── src/
│   ├── components/         # Reusable presentation and layout components
│   │   ├── ui/             # Shadcn UI low-level components (Radix primitives)
│   │   ├── Achievements.tsx       # Academic, hackathon, and campus awards
│   │   ├── AnimatedSection.tsx    # Intersection observer reveal wrappers
│   │   ├── CareerHighlights.tsx   # Milestone slider / carousel with lightbox
│   │   ├── Contact.tsx            # Form with EmailJS integration
│   │   ├── CustomCursor.tsx       # 3D aerodynamic pointer and trail canvas
│   │   ├── Experience.tsx         # Educational records and internships
│   │   ├── Hero.tsx               # Entrance section with typing roles
│   │   ├── Navbar.tsx             # Floating responsive header navigation
│   │   ├── ParticleBackground.tsx # 3D Plexus canvas and background mesh orbs
│   │   ├── Projects.tsx           # Scrolling marquee displaying projects
│   │   ├── ThemeProvider.tsx      # next-themes wrapper provider
│   │   └── ThemeToggle.tsx        # Toggle switch for Dark/Light mode
│   ├── hooks/              # Custom React hooks (use-toast, use-mobile)
│   ├── integrations/       # Database & API connectors
│   │   └── supabase/       # Supabase Client and TypeScript Database types
│   ├── pages/              # Routing landing components
│   │   ├── Index.tsx       # Consolidated single-page entry layout
│   │   └── NotFound.tsx    # Custom 404 error page
│   ├── App.tsx             # Main routing registry, providers, and toaster configs
│   ├── index.css           # Global typography, color tokens, and utility classes
│   └── main.tsx            # App bootstrapping entrypoint
├── package.json            # Dependencies and scripts definitions
├── tailwind.config.ts      # Typography, animations, and color system configuration
└── vite.config.ts          # Vite asset path and build configurations
```

---

## 💻 Installation & Setup

Follow these steps to run the portfolio website locally.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18.x or higher) and [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/) installed on your machine.

### 2. Clone and Open
```bash
git clone https://github.com/Balakumaran2022/personal-portfolio.git
cd personal-portfolio
```

### 3. Install Dependencies
Using npm:
```bash
npm install
```
Or using Bun:
```bash
bun install
```

### 4. Setup Environment Variables
Create a `.env` file in the root of the project and populate it with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

### 5. Running the Application
Launch the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 6. Building for Production
To build the application for hosting (Vercel, Netlify, GitHub Pages):
```bash
npm run build
```
This outputs compiled, optimized assets to the `dist` directory.

---

## 🔌 API Integrations

### EmailJS (Direct Mail Setup)
The application comes pre-configured with **EmailJS** inside [src/components/Contact.tsx](file:///C:/Users/acer/.gemini/antigravity/scratch/personal-portfolio/src/components/Contact.tsx). To map the messages to your personal inbox, swap out the template and service IDs:
```typescript
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

emailjs.sendForm(
  "YOUR_EMAILJS_SERVICE_ID",
  "YOUR_EMAILJS_TEMPLATE_ID",
  formRef.current!
);
```

### Supabase Connection
A database client is initialized inside [src/integrations/supabase/client.ts](file:///C:/Users/acer/.gemini/antigravity/scratch/personal-portfolio/src/integrations/supabase/client.ts) to support backend data fetching and type-safe query parameters.
