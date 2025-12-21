# Shine Culture Marketing Website

A modern, high-converting marketing website built with React, TypeScript, and Vite. Features AI-powered automation services, interactive mascot, and conversion-optimized lead funnel.

## Features

- Responsive design optimized for all devices
- Interactive animated mascot (Shine Kid)
- Multi-step lead generation funnel
- ROI calculator
- Blog and case studies sections
- SEO optimized with structured data
- Fast performance with Vite

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons
- n8n Webhook Integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ShineCultureMarketing-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. (Optional) Configure your environment variables in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Deployment

### Deploying to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploying to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

### Deploying to Custom Server

1. Build the project
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

## Project Structure

```
├── components/         # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Mascot.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── SocialProof.tsx
│   ├── LeadFunnel.tsx
│   ├── Footer.tsx
│   └── ...
├── public/            # Static assets
│   ├── shine_culture_logo.png
│   ├── shine_kid_logo.png
│   └── robots.txt
├── App.tsx           # Main app component
├── index.tsx         # Entry point
├── types.ts          # TypeScript types
└── vite.config.ts    # Vite configuration
```

## Customization

- **Colors**: Modify Tailwind config in `index.html`
- **Content**: Edit component files in `/components`
- **Logo**: Replace files in `/public`
- **Meta Tags**: Update `index.html` and `App.tsx` (schema markup)

## SEO Optimization

- Structured data (JSON-LD) for search engines
- Open Graph tags for social sharing
- Optimized meta descriptions
- Semantic HTML structure
- robots.txt configured

## License

All rights reserved - Shine Culture Marketing

## Contact

For questions or support, contact: info@shineculturemarketing.com
