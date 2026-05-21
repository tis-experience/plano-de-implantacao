import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

/** Dev server uses index.dev.html; index.html at repo root is the production build for Pages. */
function devHtmlPlugin() {
  return {
    name: 'dev-html',
    apply: 'serve' as const,
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url ?? ''
        if (url === '/' || url === '/index.html' || url.startsWith('/index.html?')) {
          req.url = '/index.dev.html'
        }
        next()
      })
    },
  }
}

export default defineConfig({
  // Relative asset paths let the build work on GitHub Pages under any repo name.
  base: './',
  plugins: [
    devHtmlPlugin(),
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
