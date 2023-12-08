import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/login.css',
                'resources/js/app.js',
                'resources/js/bootstrap.js',
                'resources/js/design.js',
                'resources/js/headerFooter.js',
                'resources/js/java.js',
                'resources/js/javacourses.js',
                'resources/js/javagallery.js',
            ],
            refresh: true,
        }),
    ],
});
