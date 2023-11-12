/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			padding: {
				'42': '10.5rem',
				'38': '9.5rem',
				'36': '9rem',
				'34': '8.5rem',
				'30': '7.5rem',
			},
		},
	},
	plugins: [],
}
