/*
  Path: vite.config.js
  Description: Vite configuration file for a React application.
  Author: Richard Anderson.
  Last Updated: 07-June-2025.
  Version: 1.0.0.
  Note: This file contains both AI-generated (Copilot -- Claude 3.7) and manually added comments for code clarity.
*/
// Vite Configuration for React Application.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0', // Explicitly bind to IPv4
    open: true // Optional: automatically open in browser
  },
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'automatic',
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx'
      }
    }
  },
  build: {
    target: 'esnext',
    outDir: 'dist'
  }
});