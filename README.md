# Cybersecurity SaaS Landing Page

A premium, futuristic cyberpunk-styled cybersecurity [SaaS Nextjs landing page](https://codescandy.com/template-categories/nextjs-templates/) built with Next.js 16, React 19, and [TailwindCSS](https://codescandy.com/template-categories/tailwind-css-templates/). Features neon glow effects, glassmorphism design, and an enterprise-grade user experience inspired by industry leaders like CrowdStrike and Palo Alto.

![Design Preview](https://img.shields.io/badge/Design-Cyberpunk%20Neon-FF00FF?style=flat-square) ![Next.js](https://img.shields.io/badge/Next.js-16.0-000000?style=flat-square) ![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-06B6D4?style=flat-square)

---

## 🌟 Features

### Design & Aesthetics
- **Neon Cyberpunk Theme**: Deep navy background (#0a0015) with electric neon accents (cyan #00ffff, green #00ff99, magenta #ff00ff)
- **Glassmorphism Effects**: Frosted glass cards with backdrop blur and semi-transparent overlays
- **Animated Glows**: Dynamic neon glow shadows and hover effects throughout
- **Responsive Design**: Fully mobile-optimized with fluid breakpoints (mobile, tablet, desktop)
- **Micro-interactions**: Smooth transitions, hover states, and animated elements

### Pages & Routes
- **Home** (`/`) - Hero section with dashboard preview, problem/solution overview, features grid, testimonials, pricing, and FAQ
- **About Us** (`/about`) - Company mission, statistics, and core values
- **Services** (`/services`) - Six core security services with detailed descriptions
- **Contact** (`/contact`) - Contact form with validation and business information
- **Join Now** (`/join`) - Multi-step registration form with company and account setup

### Components
- **Navbar** - Fixed header with logo, navigation links, search bar, and CTA button
- **Footer** - Comprehensive footer with links, social media, and company info
- **Hero Section** - Eye-catching headline, dashboard preview, and call-to-action buttons
- **Features Grid** - Showcase of six key capabilities
- **Use Cases** - Industry-specific security solutions
- **Testimonials** - Social proof with client quotes and metrics
- **Pricing** - Three-tier pricing plans (Starter, Pro, Enterprise)
- **FAQ** - Common questions with accordion-style answers
- **Forms** - Contact form and multi-step registration with validation

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/anitaparmar26/cybershield.git>
   cd cyber-security-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
project-root/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles and design tokens
│   ├── about/
│   │   └── page.tsx            # About Us page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   └── join/
│       └── page.tsx            # Join Now registration page
├── components/
│   ├── navbar.tsx              # Navigation bar component
│   ├── sections/
│   │   ├── hero.tsx            # Hero section
│   │   ├── problem.tsx         # Problem statement section
│   │   ├── solution.tsx        # Solution section
│   │   ├── features.tsx        # Features grid
│   │   ├── use-cases.tsx       # Use cases section
│   │   ├── testimonials.tsx    # Testimonials section
│   │   ├── pricing.tsx         # Pricing plans
│   │   ├── faq.tsx             # FAQ accordion
│   │   ├── final-cta.tsx       # Final call-to-action
│   │   └── footer.tsx          # Footer
│   ├── dashboard-preview.tsx   # Dashboard visualization component
│   └── ui/                     # shadcn/ui components
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#00ff99` | Main accent, buttons, glows |
| **Accent** | `#00ffff` | Secondary accent, borders |
| **Secondary** | `#ff00ff` | Highlights, decorative elements |
| **Background** | `#0a0015` | Main background |
| **Card** | `#1a0a2e` | Card backgrounds |
| **Foreground** | `#ffffff` | Text color |
| **Muted** | `#4a4a6a` | Secondary text |
| **Destructive** | `#ff1744` | Error states |

### Typography

- **Font Family**: System fonts (Geist, Geist Mono)
- **Headings**: Bold, uppercase, 2-4 sizes (text-2xl to text-5xl)
- **Body Text**: Regular weight, leading-relaxed (1.4-1.6)
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold)

### Spacing Scale
Uses Tailwind's standard spacing scale (4px increments):
- `gap-4`, `gap-6`, `gap-8` for component spacing
- `p-4`, `p-6`, `px-8` for padding
- `mb-8`, `mt-12` for margin

---

## 🧩 Key Components

### Navbar
Fixed navigation with:
- Logo with shield icon
- Desktop navigation links (HOME, ABOUT US, SERVICES, CONTACT)
- Search input with neon border
- "JOIN NOW" CTA button
- Mobile hamburger menu

### Hero Section
- Large "CYBER SECURITY" headline with neon glow
- Subheading and descriptive text
- Dashboard preview image with glowing border
- "JOIN US" and "LEARN MORE" buttons
- Address/location info

### Features Grid
Six feature cards showcasing:
- Threat Detection & Prevention
- Real-time Monitoring
- Vulnerability Assessment
- Incident Response
- Security Analytics
- Compliance Management

### Forms
- **Contact Form**: Email, phone, message validation
- **Registration Form**: 3-step multi-step form with progress indicator
  - Step 1: Company Information
  - Step 2: Contact Details
  - Step 3: Account Setup

---

## ⚙️ Technologies

### Frontend
- **Next.js 16**: React framework with App Router
- **React 19**: UI library with latest hooks
- **TypeScript**: Type-safe development
- **TailwindCSS 4**: Utility-first CSS framework

### UI Components
- **shadcn/ui**: Accessible component library
- **Radix UI**: Headless component primitives
- **Lucide React**: Icon library (300+ icons)
- **Recharts**: Data visualization

### Forms & Validation
- **React Hook Form**: Efficient form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration for form validation

### Other
- **Sonner**: Toast notifications
- **Next Themes**: Dark mode support
- **Class Variance Authority**: Component variant management
- **Tailwind Merge**: Utility class management

---

## 🎯 Pages Overview

### Home Page
The main landing page featuring:
- Hero section with CTA
- Problem/Solution narrative
- Features highlight
- Industry use cases
- Social proof (testimonials)
- Pricing comparison
- FAQs
- Final conversion CTA
- Footer with navigation

### About Us Page
Highlights the company with:
- Mission statement
- Key statistics (years, threats blocked, clients)
- Core values (Security First, Customer Focused, Excellence, Innovation)
- Team commitment messaging

### Services Page
Details six security services:
1. **Threat Detection** - Real-time threat identification
2. **Vulnerability Management** - Continuous scanning and remediation
3. **Incident Response** - 24/7 incident handling
4. **Security Analytics** - Data-driven insights
5. **Compliance Management** - Regulatory compliance
6. **Security Training** - Employee education programs

### Contact Page
Enables customer inquiries with:
- Contact form with validation
- Email, phone, address display
- Business hours information
- Social links

### Join Now Page
Multi-step registration featuring:
- Progress indicator
- Company information collection
- Contact details
- Account setup
- Benefits sidebar
- Form validation and error handling

---

## 🎬 Getting Started with Development

### Create New Pages
1. Create a new folder in `/app` (e.g., `/app/new-page`)
2. Add `page.tsx` with your content
3. Update navbar links to include the new page
4. Use existing components and styles for consistency

### Create New Components
1. Create `.tsx` file in `/components`
2. Import shadcn/ui components as needed
3. Apply Tailwind classes following the design system
4. Use design tokens for colors (primary, accent, etc.)

### Add Form Validation
```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  // ... more fields
});

export default function MyForm() {
  const form = useForm({ resolver: zodResolver(schema) });
  // ...
}
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Deploy with one click

3. **Custom Domain**
   - In Vercel project settings, add your custom domain
   - Update DNS records as instructed

### Deploy Elsewhere

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## 🔧 Customization

### Change Colors
Edit `/app/globals.css` color variables:
```css
:root {
  --primary: #00ff99;  /* Change primary color */
  --accent: #00ffff;   /* Change accent color */
  /* ... other colors */
}
```

### Add Company Logo
1. Place logo in `/public/logo.png`
2. Update navbar component:
   ```typescript
   <Image src="/logo.png" alt="Logo" width={40} height={40} />
   ```

### Modify Pricing Plans
Edit `/components/sections/pricing.tsx` to update plan names, prices, and features.

### Update Service Descriptions
Edit `/app/services/page.tsx` to add/remove services and update details.

---

## 📊 Performance

- **Optimized Images**: Using Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **CSS Purging**: TailwindCSS removes unused styles
- **Fast Refresh**: Instant feedback during development

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port
npm run dev -- -p 3001
```

### Node Modules Issues
```bash
# Clear node modules
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Rebuild TypeScript
npx tsc --noEmit
```

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

For support visit our [Contact Page](https://codescandy.com/contact-us/).

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Zod Documentation](https://zod.dev)

