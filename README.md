# Nexora Technologies Website

A modern, responsive website for Nexora Technologies - a Rwanda-based technology and engineering company.

## Tech Stack

- **Framework**: Nuxt.js 4 (Vue.js)
- **Styling**: Tailwind CSS 4
- **TypeScript**: Full type safety
- **Animations**: @vueuse/motion
- **Dark Mode**: System preference detection with manual toggle

## Features

- ✨ Modern, responsive design
- 🌙 Dark/Light mode support
- 🎨 Smooth animations and transitions
- 📱 Mobile-first responsive layout
- 🔍 SEO optimized
- ⚡ Fast performance with Nuxt.js
- 🎯 Component-based architecture

## Project Structure

```
nexora-website/
├── app/
│   ├── components/       # Reusable Vue components
│   │   ├── About.vue
│   │   ├── Contact.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── Navbar.vue
│   │   ├── Portfolio.vue
│   │   ├── ProjectCard.vue
│   │   ├── RoadmapCard.vue
│   │   ├── ServiceCard.vue
│   │   ├── Services.vue
│   │   └── Testimonials.vue
│   ├── pages/           # Page components
│   │   └── index.vue
│   └── app.vue          # Root component
├── public/              # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── nuxt.config.ts       # Nuxt configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Development Server

The development server runs on `http://localhost:3000`

## Production Deployment

### Static Site Generation (Recommended)

```bash
npm run generate
```

This creates a `dist/` folder with static HTML/CSS/JS files that can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

### Server-Side Rendering

```bash
npm run build
```

Deploy the `.output` folder to:
- Vercel
- Netlify
- Cloudflare Pages
- Any Node.js hosting

## Environment Variables

No environment variables are required for the basic setup. For production, you may want to add:

- `NUXT_PUBLIC_API_BASE`: Backend API URL
- `NUXT_PUBLIC_CONTACT_EMAIL`: Contact form email destination

## Customization

### Update Company Information

Edit the following files:
- `nuxt.config.ts` - SEO meta tags, title
- `app/components/Navbar.vue` - Navigation links
- `app/components/Footer.vue` - Footer content
- `app/components/Contact.vue` - Contact information

### Update Services

Edit `app/components/Services.vue` to modify the services array.

### Update Portfolio

Edit `app/components/Portfolio.vue` to modify the projects array.

### Update Testimonials

Edit `app/components/Testimonials.vue` to modify the testimonials array.

## SEO

The site includes:
- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card support
- robots.txt
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Nexora Technologies. All rights reserved.
