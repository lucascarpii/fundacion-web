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
				'isei-teal': '#49d8b7',
				'isei-lime': '#84cc16',
				'isei-lime-2': '#d0f500',
				'colegio': '#f04a4a',
				'deporte': '#fa8723',
				'comunicacion': '#4cc4fc',
				'comunidad': '#e8c441',
				'mediacion': '#c07ade',
				'title-black': '#101829',
			},
			backgroundImage: {
				'hero-image': "url('/cultivando-comunidad.jpeg')",
				'accompany': "url('/acompañar.jpg')",
				'igualdad': "url('/igualdad.jpg')",
				'compasion': "url('/compasion.jpg')",
				'radial-gradient': 'radial-gradient(circle, white, transparent)',
				'hero-radial-gradient': 'radial-gradient(circle, rgba(0,0,0,0) 30%, rgba(255,255,255,1) 80%)',
			},
		},
	},
	plugins: [],
}
