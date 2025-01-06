/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'isei-nav': '#24384d',
				'isei-dark': '#23597e',
				'isei-blue': '#3078ac',
				'isei-teal': '#49d8b7'
			},
			backgroundImage: {
				'hero-image': "url('/hero-image.jpg')",
			},
		},
	},
	plugins: [],
}
