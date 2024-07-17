/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				lato: ['"Lato"', 'sans-serif'],
				kanit: ['"Kanit"', 'sans-serif']
			}
		}
	},
	plugins: []
};
