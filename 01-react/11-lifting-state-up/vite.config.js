// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'                 // ← 변경 포인트
import { fileURLToPath } from 'node:url'
// import viteCompression from 'vite-plugin-compression'  // ← 일단 끔

import tailwindcss from 'tailwindcss'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isProduction = mode === 'production'

  return {
    plugins: [
      react(),
      // 압축 다시 쓰려면 아래 2줄 주석 해제 + 최신버전 설치
      // viteCompression({ algorithm: 'gzip' }),
    ],
    server: {
      port: 3000,
      hmr: !isProduction,
      proxy: !isProduction
        ? {
            '/api': {
              target: env.VITE_API_URL || 'http://localhost:4000',
              rewrite: (p) => p.replace(/^\/api/, ''), // ← 변수명 충돌 회피
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
      terserOptions: isProduction
        ? {
            compress: { drop_console: true, drop_debugger: true },
            format: { comments: false },
          }
        : {},
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // 빈 청크 키 제거 (router/ui)
          manualChunks: isProduction
            ? {
                vendor: ['react', 'react-dom'],
              }
            : undefined,
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
