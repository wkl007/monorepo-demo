import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, './node_modules/vite/dist/*')),
          dest: 'vite'
        }]
    })
  ]
})
