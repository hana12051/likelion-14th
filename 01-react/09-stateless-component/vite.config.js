// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isProduction = mode === 'production'

  return {
    plugins: [react()], // ← compression 일단 끔
    server: {
      port: 3000,
      hmr: !isProduction,
      proxy: !isProduction
        ? {
            '/api': {
              target: env.VITE_API_URL || 'http://localhost:4000',
              rewrite: (p) => p.replace(/^\/api/, ''),
              changeOrigin: true,
            },
          }
        : {},
    },
    preview: {
      port: 5000,
    },
    css: {
      devSourcemap: !isProduction,
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: !isProduction,
      minify: isProduction ? 'terser' : false,
      // 빈 manualChunks 제거 (빈 배열은 불안정)
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          entryFileNames: 'entries/[name]-[hash].js',
          chunkFileNames: 'chunks/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
      treeshake: true,
      target: 'es2015',
      reportCompressedSize: isProduction,
    },
    envPrefix: 'VITE_',
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  }
})
