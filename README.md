# NGE Petroleum Website

A modern, visually appealing website for NGE Petroleum built with Next.js, React, shadcn/ui, and SVGR.

## Features

- 🚀 **Next.js 16** with App Router
- ⚛️ **React 19** with TypeScript
- 🎨 **shadcn/ui** components for beautiful UI
- 🖼️ **SVGR** configured for SVG imports
- 📱 **Fully Responsive** design
- ✨ **Modern Animations** and transitions
- 🎯 **SEO Optimized** with proper metadata

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **SVG Handling**: SVGR/Webpack

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nexpetrol/
├── app/
│   ├── page.tsx          # Main homepage component
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # shadcn/ui components
├── public/               # Static assets
├── lib/
│   └── utils.ts         # Utility functions
└── next.config.ts       # Next.js configuration with SVGR
```

## Features Implemented

### Sections

1. **Hero Section** - Eye-catching gradient hero with key statistics
2. **Services** - Four service cards (Diesel/Petrol, CNG, CBG, EV)
3. **Why Choose Us** - Six compelling reasons with icons
4. **Process** - Four-step process visualization
5. **About** - Company information and values
6. **Contact** - Contact form and information
7. **Footer** - Comprehensive footer with links

### Visual Enhancements

- Gradient backgrounds
- Hover effects and transitions
- Card animations
- Badge components
- Responsive grid layouts
- Modern typography
- Color-coded service sections

## Using SVGR

SVGR is configured in `next.config.ts`. You can import SVG files as React components:

```tsx
import FuelIcon from '@/public/fuel-icon.svg';

<FuelIcon className="w-6 h-6" />
```

## Customization

### Colors

Colors can be customized in `app/globals.css` using CSS variables.

### Components

Add more shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

## Build for Production

```bash
npm run build
npm start
```

## Contact Information

- **Phone**: 1800 309 0640
- **Email**: info@ngepetroleum.com
- **Address**: F-433 Sector-63, Noida, Uttar Pradesh 201301, India
- **Website**: www.ngepetroleum.com

## License

© 2025 NGE Petroleum. All rights reserved.
