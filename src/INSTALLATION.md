# 🛠️ Installation & Setup Guide

> **Complete installation guide for the Agent Wallboard system**

---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Building for Production](#building-for-production)
- [Docker Setup](#docker-setup)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)

---

## 🚀 Quick Start

### Option 1: Figma Make (No Installation)

This project is built with **Figma Make**:

✅ **No installation required**  
✅ **No build step needed**  
✅ **Just open and use**

Simply load the application in Figma Make and it's ready to go!

---

### Option 2: Local Development (5 Minutes)

```bash
# 1. Clone repository
git clone https://github.com/your-username/agent-wallboard.git
cd agent-wallboard

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:5173
```

✅ **Done!** Application is now running locally.

---

## ✅ Prerequisites

### Required Software

| Software | Minimum Version | Recommended | Download |
|----------|----------------|-------------|----------|
| **Node.js** | 18.0.0 | 20.x LTS | [nodejs.org](https://nodejs.org) |
| **npm** | 9.0.0 | Latest | Comes with Node.js |
| **Git** | 2.0.0 | Latest | [git-scm.com](https://git-scm.com) |

### Check Your Versions

```bash
# Check Node.js version
node --version
# Expected: v18.x.x or higher

# Check npm version
npm --version
# Expected: 9.x.x or higher

# Check Git version
git --version
# Expected: 2.x.x or higher
```

**Example output:**
```
$ node --version
v20.10.0

$ npm --version
10.2.3

$ git --version
git version 2.42.0
```

✅ **All good!** You're ready to proceed.

---

## 💻 Local Development Setup

### Step 1: Clone the Repository

**Using HTTPS:**
```bash
git clone https://github.com/your-username/agent-wallboard.git
cd agent-wallboard
```

**Using SSH:**
```bash
git clone git@github.com:your-username/agent-wallboard.git
cd agent-wallboard
```

**Verify you're in the right directory:**
```bash
ls -la
# You should see: App.tsx, components/, styles/, etc.
```

---

### Step 2: Install Dependencies

#### Using npm (Recommended)

```bash
npm install
```

This installs all dependencies from `package.json`:
- React 18+
- TypeScript
- Tailwind CSS v4.0
- Lucide React (icons)
- Sonner (toast notifications)
- Shadcn/UI components (40+)

**Expected output:**
```
added 1234 packages in 30s

123 packages are looking for funding
  run `npm fund` for details
```

#### Using yarn (Alternative)

```bash
yarn install
```

#### Using pnpm (Alternative)

```bash
pnpm install
```

---

### Step 3: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

The server will:
- ✅ Start at `http://localhost:5173`
- ✅ Hot reload on file changes
- ✅ Show TypeScript errors in console
- ✅ Open automatically in browser (optional)

---

### Step 4: Verify Installation

**Open your browser:**
```
http://localhost:5173
```

**You should see:**
1. ✅ View switcher at top (Agent View / Supervisor View)
2. ✅ Agent Dashboard (default view)
3. ✅ No console errors
4. ✅ Styles loading correctly

**Test basic functionality:**
- Click "Supervisor View" - should switch views
- Click status dropdown - should show options
- Check console (F12) - should have no errors

✅ **Success!** Your local setup is complete.

---

## 🏗️ Building for Production

### Create Production Build

```bash
npm run build
```

This command:
1. Runs TypeScript type checking
2. Optimizes all code
3. Minifies CSS and JavaScript
4. Generates source maps
5. Creates `/dist` directory

**Expected output:**
```
vite v5.0.0 building for production...
✓ 1234 modules transformed.
dist/index.html                   1.23 kB │ gzip:  0.45 kB
dist/assets/index-abc123.css     12.34 kB │ gzip:  3.45 kB
dist/assets/index-def456.js     234.56 kB │ gzip: 67.89 kB
✓ built in 5.67s
```

**Output directory structure:**
```
dist/
├── index.html           # Entry HTML file
├── assets/
│   ├── index-[hash].css  # Minified CSS
│   └── index-[hash].js   # Minified JavaScript
└── [other assets]
```

---

### Preview Production Build

```bash
npm run preview
```

**Expected output:**
```
  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
```

Test the production build at `http://localhost:4173`

**Verify:**
- ✅ All features working
- ✅ Performance is good
- ✅ No console errors
- ✅ Styles are correct

---

### Deploy Production Build

**Option 1: Static Hosting (Vercel, Netlify, etc.)**

```bash
# Build first
npm run build

# Deploy /dist folder to your hosting service
```

**Option 2: Your Own Server**

```bash
# Copy /dist folder to your web server
scp -r dist/* user@server:/var/www/agent-wallboard/

# Or use rsync
rsync -avz dist/ user@server:/var/www/agent-wallboard/
```

**Option 3: Docker (see below)**

---

## 🐳 Docker Setup

### Basic Docker Setup

**Create `Dockerfile`:**

```dockerfile
# Use Node.js 20 Alpine for smaller image size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 5173

# Start the application
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
```

**Build Docker image:**

```bash
docker build -t agent-wallboard:latest .
```

**Run Docker container:**

```bash
docker run -d -p 5173:5173 --name agent-wallboard agent-wallboard:latest
```

**Access the application:**
```
http://localhost:5173
```

---

### Docker Compose Setup

**Create `docker-compose.yml`:**

```yaml
version: '3.8'

services:
  agent-wallboard:
    build: .
    container_name: agent-wallboard
    ports:
      - "5173:5173"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

**Start with Docker Compose:**

```bash
# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

---

### Development with Docker

**Create `Dockerfile.dev`:**

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

**Create `docker-compose.dev.yml`:**

```yaml
version: '3.8'

services:
  agent-wallboard-dev:
    build:
      context: .
      dockerfile: Dockerfile.dev
    container_name: agent-wallboard-dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

**Start development environment:**

```bash
docker-compose -f docker-compose.dev.yml up
```

---

## ⚙️ Configuration

### Environment Variables

Create `.env` file in project root:

```bash
# .env
VITE_APP_NAME=Agent Wallboard
VITE_APP_VERSION=2.0.0

# API Configuration (if needed)
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000

# Feature Flags
VITE_ENABLE_REAL_TIME=true
VITE_ENABLE_NOTIFICATIONS=true
```

**Access in code:**

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
const appName = import.meta.env.VITE_APP_NAME;
```

---

### Tailwind Configuration

**File:** `tailwind.config.js` (if needed)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom theme extensions here
    },
  },
  plugins: [],
}
```

**Note:** This project uses Tailwind v4.0 with `@theme inline` in `globals.css`, so most configuration is in CSS.

---

### TypeScript Configuration

**File:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "components", "types"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

### VS Code Configuration

**Create `.vscode/settings.json`:**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

**Create `.vscode/extensions.json`:**

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

---

## 🔧 Troubleshooting

### Problem: npm install fails

**Error:**
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall with legacy peer deps
npm install --legacy-peer-deps

# Or use force
npm install --force
```

---

### Problem: Port 5173 already in use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::5173
```

**Solution 1 - Kill the process:**

**On macOS/Linux:**
```bash
# Find process using port 5173
lsof -ti:5173

# Kill the process
kill -9 $(lsof -ti:5173)

# Or in one line
lsof -ti:5173 | xargs kill -9
```

**On Windows:**
```cmd
# Find process
netstat -ano | findstr :5173

# Kill process (replace PID with actual number)
taskkill /PID <PID> /F
```

**Solution 2 - Use different port:**
```bash
npm run dev -- --port 3000
```

---

### Problem: TypeScript errors

**Error:**
```
Error: Cannot find module './components/...'
```

**Solution:**

1. **Restart TypeScript server:**
   - VS Code: Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type: "TypeScript: Restart TS Server"
   - Press Enter

2. **Check import paths:**
   ```typescript
   // ✅ Correct (relative path)
   import { Button } from './components/ui/button'
   
   // ❌ Incorrect (no leading ./)
   import { Button } from 'components/ui/button'
   ```

3. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

### Problem: Tailwind classes not working

**Error:**
```
Classes not applying or appearing as plain text
```

**Solution:**

1. **Check globals.css is imported:**
   ```typescript
   // In App.tsx or main.tsx
   import './styles/globals.css'
   ```

2. **Verify Tailwind configuration:**
   - Check `@tailwind` directives in `globals.css`
   - Ensure content paths are correct

3. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   # Start again
   npm run dev
   ```

4. **Clear Tailwind cache:**
   ```bash
   rm -rf node_modules/.cache
   npm run dev
   ```

---

### Problem: Hot reload not working

**Error:**
```
Changes not reflecting in browser
```

**Solution:**

1. **Check if server is running:**
   ```bash
   # Should see "VITE ... ready"
   npm run dev
   ```

2. **Hard refresh browser:**
   - Chrome/Firefox: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
   - Safari: `Cmd+Option+R`

3. **Clear browser cache:**
   - Open DevTools (F12)
   - Right-click refresh button
   - Select "Empty Cache and Hard Reload"

4. **Restart dev server:**
   ```bash
   # Stop with Ctrl+C
   # Start again
   npm run dev
   ```

---

### Problem: Build fails

**Error:**
```
Build failed with errors
```

**Solution:**

1. **Check for TypeScript errors:**
   ```bash
   npm run type-check
   ```

2. **Fix all errors shown**

3. **Try building again:**
   ```bash
   npm run build
   ```

4. **If still failing, check:**
   - Import paths are correct
   - No circular dependencies
   - All files are saved

---

### Problem: Module not found errors

**Error:**
```
Module not found: Can't resolve 'sonner@2.0.3'
```

**Solution:**

For specific version imports (like sonner):
```typescript
// ✅ Correct
import { toast } from 'sonner@2.0.3'

// For other libraries without version:
import { Button } from './components/ui/button'
```

---

### Problem: Permission denied errors

**Error (macOS/Linux):**
```
EACCES: permission denied
```

**Solution:**
```bash
# Don't use sudo with npm!
# Instead, fix npm permissions:

# Create directory for global packages
mkdir ~/.npm-global

# Configure npm to use new directory
npm config set prefix '~/.npm-global'

# Add to PATH (add to ~/.profile or ~/.bashrc)
export PATH=~/.npm-global/bin:$PATH

# Reload profile
source ~/.profile

# Now install without sudo
npm install
```

---

## ❓ FAQ

### Q: Do I need to install anything to use this app?

**A:** No! If using Figma Make, just open the app. For local development, you need Node.js 18+.

---

### Q: What's the difference between npm, yarn, and pnpm?

**A:** They're all package managers:
- **npm**: Default, comes with Node.js
- **yarn**: Alternative, faster caching
- **pnpm**: Alternative, saves disk space

**Recommendation:** Use **npm** (it's already installed with Node.js)

---

### Q: Can I use Node.js 16 or 17?

**A:** No, minimum is Node.js 18. Update with:
```bash
# Using nvm (recommended)
nvm install 20
nvm use 20

# Or download from nodejs.org
```

---

### Q: How do I update dependencies?

**A:**
```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update react

# Update to latest (major versions)
npm install react@latest
```

---

### Q: How much disk space is needed?

**A:**
- Repository: ~5 MB
- node_modules: ~300 MB
- Build output: ~2 MB

**Total:** ~310 MB

---

### Q: Can I use this on Windows?

**A:** Yes! Works on:
- ✅ Windows 10/11
- ✅ macOS 10.15+
- ✅ Linux (Ubuntu, Debian, etc.)

---

### Q: How do I deploy to production?

**A:** See [Deployment Guide](#deploy-production-build) above. Popular options:
- Vercel (easiest)
- Netlify
- Your own server
- Docker container

---

### Q: Where are the API endpoints?

**A:** This is a frontend-only application. For backend integration:
1. Set up your API server
2. Configure in `.env` file
3. Use `fetch()` or libraries like Axios
4. See [Configuration](#environment-variables) section

---

### Q: Can I customize the design?

**A:** Yes! Edit:
- **Colors**: `/styles/tokens.ts`
- **Spacing**: `/styles/tokens.ts`
- **Typography**: `/styles/tokens.ts`
- **Components**: `/components/` files

---

### Q: How do I contribute?

**A:**
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📚 Additional Resources

- **[README.md](README.md)** - Main documentation
- **[USAGE-GUIDE.md](USAGE-GUIDE.md)** - How to use the app
- **[COMPONENTS.md](COMPONENTS.md)** - Component documentation
- **[DESIGN-DECISIONS.md](DESIGN-DECISIONS.md)** - Design rationale

---

## 🆘 Still Need Help?

1. **Check Documentation:** [DOCUMENTATION-INDEX.md](DOCUMENTATION-INDEX.md)
2. **Search Issues:** Check GitHub issues for similar problems
3. **Ask for Help:** Contact your development team
4. **Create Issue:** If bug found, create detailed issue report

---

**Installation guide last updated: October 16, 2025**

✅ **You're all set!** Happy coding! 🎉
