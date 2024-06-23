/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryColor: "#0078DA",
				secondaryColor: "#004B88",
			},
		},
	},
	plugins: [],
};
