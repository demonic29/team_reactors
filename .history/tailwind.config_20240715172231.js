/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
    },
    variants: {
        visibility: ["responsive", "hover", "focus", "group-hover"],
    },
    plugins: [],
};