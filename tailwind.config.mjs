function withOpacity(variableName) {
	return ({ opacityValue }) => {
	  	if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
	  	}
	  	return `rgb(var(${variableName}))`;
	};
}

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,md,mdx,ts,tsx}',
		'./src/**/**/*.{astro,html,md,mdx,ts,tsx}'
	],
	theme: {
		extend: {
		  colors: {
			primary: {
			  DEFAULT: "#17a2b8", // FandomWiki primary blue
			  dark: "#007b89", // Darkened primary for dark mode
			},
			secondary: {
			  DEFAULT: "#ffc107", // FandomWiki yellow
			  dark: "#e0a000", // Darkened yellow for dark mode
			},
			background: {
			  DEFAULT: "#fff", // Light background
			  dark: "#121212", // Dark background
			},
			text: {
			  DEFAULT: "#212529", // Dark text
			  light: "#717171", // Lighter text
			  dark: "#fff", // White text for dark mode
			},
		  },
		  fontFamily: {
			sans: ["Open Sans", "sans-serif"],
		  },
		  typography: {
			DEFAULT: {
			  css: {
				a: {
				  color: "#17a2b8", // FandomWiki blue for links
				  fontWeight: "600",
				},
				h1: {
				  fontSize: "2.5rem",
				  fontWeight: "700",
				  lineHeight: "1.25",
				},
				h2: {
				  fontSize: "2rem",
				  fontWeight: "700",
				  lineHeight: "1.25",
				},
				h3: {
				  fontSize: "1.75rem",
				  fontWeight: "600",
				  lineHeight: "1.25",
				},
				p: {
				  fontSize: "1rem",
				  lineHeight: "1.5",
				},
				code: {
				  backgroundColor: "#f8f8f8",
				  borderRadius: "4px",
				  padding: "0.25rem 0.5rem",
				  fontSize: "0.875rem",
				},
			  },
			},
		  },
		},
	  },
	plugins: [
		require("@tailwindcss/typography")
	],
}
