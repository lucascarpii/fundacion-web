/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'isei-footer': '#07111a',
				'isei-nav': '#24384d',
				'isei-dark': '#23597e',
				'isei-blue': '#3078ac',
				'isei-teal': '#49d8b7'
			},
			backgroundImage: {
				'hero-image': "url('/hero-image.jpg')",
				'radial-gradient': 'radial-gradient(circle, white, transparent)',
				'reverse-radial-gradient': 'radial-gradient(circle, transparent, white)',
			},
		},
	},
	plugins: [],
}
