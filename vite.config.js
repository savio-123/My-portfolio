import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Savio-Portfolio/',// it is used to set the base path of the application
})

