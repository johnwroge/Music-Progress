// import { defineConfig } from 'vite'
/*
///<reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react  from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:  {
    globals: true,
    environment: 'happy-dom'
    // setupFiles: "./src/__tests__/setupTests.js"
  }
});
*/

/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom'
  },
})
