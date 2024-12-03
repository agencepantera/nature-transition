/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#16a34a', // green-600
				'secondary': '#1e293b', // slate-800
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
