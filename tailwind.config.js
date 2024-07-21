/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],

	theme: {
		extend: {
			colors: {
				primaryColor: "#0078DA",
				secondaryColor: "#004B88",
			},
		},
		fontFamily: {
      kiwiMaru: ["Kiwi Maru", "serif"],
    },
		screens: {
			"2xl": { max: "1435px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
	},

	plugins: [
	],
};
