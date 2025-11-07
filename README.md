# Fusion App

A modern Next.js 14 application powered by the [Fusion Design System](https://github.com/LoganAffleck/fusion-design-system) with full Builder.io visual editing integration.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Builder.io](https://img.shields.io/badge/Builder.io-Integrated-purple)](https://www.builder.io/)

## ✨ Features

- 🚀 **Next.js 14 App Router** - Modern React framework with server components
- 🎨 **Fusion Design System** - Beautiful, accessible components
- 🎭 **Builder.io Integration** - Visual page editor with drag-and-drop
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🌓 **Dark Mode Ready** - CSS variables for theming
- ⚡ **Optimized** - Static generation + ISR for Builder pages
- 🔒 **Type Safe** - Full TypeScript coverage

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/LoganAffleck/fusion-app.git
cd fusion-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Builder.io** (optional for visual editing)
   - Sign up at [builder.io](https://builder.io)
   - Create a new space
   - Copy your public API key
   - Create `.env.local` from the example:
   ```bash
   cp .env.local.example .env.local
   ```
   - Add your API key to `.env.local`:
   ```bash
   NEXT_PUBLIC_BUILDER_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - See the home page with component examples
   - Visit `/components` to view all design system components

## 📦 Design System Integration

This app uses the **[@fusion/design-system](https://github.com/LoganAffleck/fusion-design-system)** package for all UI components.

### Using Components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@fusion/design-system'

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

### Development with Design System

If you're developing the design system alongside this app:

```bash
# In design-system directory
cd ../design-system
npm run build  # or npm run dev for watch mode

# Changes will be immediately available in the app
```

## 🎨 Builder.io Visual Editing

### Registered Components

All Fusion Design System components are available in Builder.io's visual editor:

| Component | Variants | Description |
|-----------|----------|-------------|
| **Fusion Button** | default, destructive, outline, secondary, ghost, link | Interactive buttons with multiple styles |
| **Fusion Card** | Card, Header, Title, Description, Content, Footer | Composable card containers |
| **Fusion Input** | - | Styled text inputs |
| **Fusion Textarea** | - | Multi-line text inputs |
| **Fusion Badge** | default, secondary, destructive, outline | Status indicators |

### Creating Visual Pages

1. **Go to Builder.io**
   - Log into your Builder.io account
   - Navigate to your space

2. **Create a new page**
   - Click "New" → "Page"
   - Set the URL path (e.g., `/about`, `/pricing`)

3. **Design with components**
   - Drag and drop "Fusion" components from the left panel
   - Customize props, variants, and content visually
   - Preview in real-time

4. **Publish**
   - Click "Publish" when ready
   - Page is immediately live at the URL you specified

### Dynamic Routes

- `/` - Home page (static Next.js)
- `/components` - Component showcase (static Next.js)
- `/[any-path]` - Dynamic Builder.io pages (SSR/ISR)

Builder.io pages use the `[...page]` catch-all route for server-side rendering.

## 📁 Project Structure

```
app/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── components/          # Component showcase
│   │   │   └── page.tsx
│   │   ├── [...page]/           # Builder.io catch-all
│   │   │   └── page.tsx
│   │   └── globals.css          # Global styles + theme
│   ├── components/
│   │   └── builder-page.tsx     # Builder page wrapper
│   └── lib/
│       ├── builder.ts           # Builder SDK init
│       └── builder-registry.tsx # Component registration
├── public/                      # Static assets
├── .env.local                   # Environment variables (gitignored)
├── .env.local.example           # Example env file
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Production
npm run build        # Create optimized production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌍 Environment Variables

Required variables in `.env.local`:

```bash
# Builder.io Public API Key (optional - app works without it)
NEXT_PUBLIC_BUILDER_API_KEY=your_builder_api_key
```

**Note:** The app runs without Builder.io configured, but visual page editing features won't work.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variable: `NEXT_PUBLIC_BUILDER_API_KEY`
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with `npm run build && npm run start`

Make sure to set the `NEXT_PUBLIC_BUILDER_API_KEY` environment variable.

## 🔧 Customization

### Theming

Edit `src/app/globals.css` to customize colors and styles:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark overrides */
}
```

### Adding Components

1. Create component in `@fusion/design-system`
2. Export from `design-system/src/index.ts`
3. Register in `app/src/lib/builder-registry.tsx`
4. Rebuild design system: `cd design-system && npm run build`
5. Component appears in Builder.io editor

## 📚 Learn More

- **[Next.js Documentation](https://nextjs.org/docs)** - Next.js features and API
- **[Builder.io Docs](https://www.builder.io/c/docs)** - Visual editing guide
- **[Fusion Design System](https://github.com/LoganAffleck/fusion-design-system)** - Component library docs
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility classes reference

## 🐛 Troubleshooting

### Builder.io pages not loading

- Check that `NEXT_PUBLIC_BUILDER_API_KEY` is set in `.env.local`
- Verify the API key is valid
- Restart the dev server after adding the key

### Design system changes not reflecting

```bash
cd ../design-system
npm run build
# Restart the app dev server
```

### Build errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.

## 🔗 Related Projects

- **[Fusion Design System](https://github.com/LoganAffleck/fusion-design-system)** - Component library used in this app

---

Made with ❤️ using Next.js and Builder.io
