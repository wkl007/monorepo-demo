import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, './node_modules/vite/dist/*')),
          dest: 'vite'
        }]
    })
  ]
})
