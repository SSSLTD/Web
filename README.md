# Strong Safety Systems

A professional website for a fire fighting and pump service company.

## Features
- **Next.js 15 (App Router)**: High-performance React framework.
- **Tailwind CSS**: Modern styling.
- **AI Chatbot**: Integrated with OpenRouter (Gemini 2.0 Flash).
- **Vercel Ready**: Optimized for Vercel deployment.

## Setup

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Environment Variables**: Create a `.env.local` file with:
   ```env
   OPENROUTER_API_KEY=your_key_here
   NEXT_PUBLIC_SITE_URL=your_site_url
   ```
4. **Run development server**: `npm run dev`

## Deployment

### Vercel (Recommended)
1. Fork this repo to your GitHub account.
2. Connect the repository to Vercel.
3. Add `OPENROUTER_API_KEY` to Vercel Environment Variables.
4. Vercel will automatically handle the build and deployment.
5. Route your custom domain in the Vercel dashboard.

### Note on GitHub Pages
Since this project uses Next.js API routes for the AI chatbot, it cannot be hosted purely as a static site on GitHub Pages. Vercel is the preferred host for the full-stack functionality.
