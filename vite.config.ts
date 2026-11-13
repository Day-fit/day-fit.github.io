import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        vitePrerenderPlugin({
            renderTarget: '#root',
            prerenderScript: fileURLToPath(
                new URL('./src/prerender.tsx', import.meta.url),
            ),
        }),
    ],
})
