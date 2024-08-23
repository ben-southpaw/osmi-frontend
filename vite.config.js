import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	optimizeDeps: {
		exclude: ['gsap'], // This tells Vite not to pre-bundle gsap
	},

	ssr: {
		// noExternal: ['three', 'matter-js'],
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;',
			},
		},
	},
});
