# SPIE Hotwork - Heatup & Dryout Services

Modern, dark-themed website for SPIE Hotwork, showcasing over 50 years of expertise in heatup and dryout services for refractory consuming industries.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS with CSS Modules
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 🎨 Features

- ✨ Premium dark theme with iOS-like typography (San Francisco font stack)
- 🎭 Glassmorphism effects and smooth animations
- 📱 Fully responsive design (mobile-first)
- ⚡ Optimized performance with Vite
- 🔄 Automated deployment pipeline with GitHub Actions
- ♿ SEO-optimized with proper meta tags

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/samuelerm08/SpieFrontEnd.git

# Navigate to project directory
cd SpieFrontEnd

# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 🚢 Deployment

### Vercel Deployment

This project is configured for automatic deployment to Vercel via GitHub Actions.

#### Setup GitHub Secrets

Add the following secrets to your GitHub repository:

- `VERCEL_TOKEN`: Your Vercel authentication token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

## 📁 Project Structure

```
SpieFrontEnd/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/                     # Static assets
├── src/
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Expertise.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── index.scss         # Design system & global styles
│   ├── App.tsx                # Main app component
│   ├── App.module.scss
│   └── main.tsx               # Entry point
├── index.html
├── vercel.json                # Vercel configuration
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Key Sections

- **Hero**: Company introduction with 50+ years badge and statistics
- **Services**: Four core services (heatup/dryout, refractory heating, burner operation, furnace optimization)
- **Expertise**: Company expertise and technician statistics
- **Footer**: Contact information and quick links

## 🔧 Configuration

### SCSS Variables

All design tokens are centralized in `src/styles/index.scss`:
- Color palette (dark theme)
- Typography scale (iOS-like fonts)
- Spacing system
- Border radius
- Shadows and transitions
- Responsive breakpoints

### Customization

To customize the theme, edit the SCSS variables in `src/styles/index.scss`.

## 📝 License

© 2026 SPIE Hotwork. All rights reserved.

## 🤝 Contributing

This is a private project for SPIE Hotwork. For any questions or support, please contact the development team.
