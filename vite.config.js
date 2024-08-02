import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
    'process.env': process.env
  },
	server: {
		port: 4378,
		fs: {
			allow: []
		}
	}
});
