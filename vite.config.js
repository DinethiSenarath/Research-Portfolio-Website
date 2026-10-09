import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' => course web server එකේ ඕනම folder එකක තිබුණත් වැඩ කරනවා
export default defineConfig({
  base: './',
  plugins: [react()],
})