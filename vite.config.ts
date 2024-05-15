import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html';
import { getResetStyles } from '@stihl-design-system/components/partials';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'index',
          injectResetStyles: getResetStyles({ format: 'html' }),
        },
      },
    })
  ],
})
