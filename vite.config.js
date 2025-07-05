import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: true,         // otomatis jadi 0.0.0.0
        port: 5173,         // bebas, asal tidak bentrok
        strictPort: true,
        watch: {
            usePolling: true, // wajib untuk Ubuntu/WSL
        },
    },
    plugins: [
        laravel({
            input: [
                'resources/scss/main.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
