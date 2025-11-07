# Contributing to Fusion App

Thank you for your interest in contributing! 🎉

## How to Contribute

### Reporting Bugs
Use the Bug Report template in Issues to report any bugs you find.

### Suggesting Features
Use the Feature Request template to suggest new features or improvements.

### Pull Requests

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/LoganAffleck/fusion-app.git
   cd fusion-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes**
   - Follow Next.js best practices
   - Use TypeScript for type safety
   - Test your changes locally

6. **Test your changes**
   ```bash
   npm run lint
   npm run build
   npm run dev  # Test in browser
   ```

7. **Commit your changes**
   ```bash
   git commit -m 'feat: add some feature'
   ```
   Use conventional commits:
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation
   - `style:` - Formatting, missing semicolons, etc.
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

8. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Open a Pull Request**
   - Provide a clear description
   - Link related issues
   - Wait for review

## Development Setup

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm

### Setup Steps
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Builder.io API key (optional)

# Start development server
npm run dev
```

## Project Structure

```
app/
├── src/
│   ├── app/              # Next.js pages and layouts
│   ├── components/       # React components
│   └── lib/              # Utilities and configurations
├── public/               # Static assets
└── ...config files
```

## Code Guidelines

- **TypeScript**: Use TypeScript for all code
- **Components**: Use React Server Components where possible
- **Styling**: Use Tailwind CSS utilities
- **Imports**: Use absolute imports with `@/` prefix
- **Formatting**: Code will be checked by ESLint

## Builder.io Integration

When adding new components to Builder.io:
1. Register them in `src/lib/builder-registry.tsx`
2. Follow the existing pattern for input/output definitions
3. Test in Builder.io visual editor

## Questions?

Open a discussion or issue if you have questions!

Thank you for contributing! 🙏
