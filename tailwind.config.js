/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#42210B",
        secondaryColor: "#683F24",
        thirdColor: "#8F584D",

        primaryBackgroundColor: "#F7C59F",
        secondaryBackgroundColor: "#FFCCC2",
        frontBackgroundColor: "#BB7B6E",
        thirdBackgroundColor: "#C78E63",

        primaryLineColor: "#BD7D53",
      },
      fontFamily: {
        satisfy: ['Satisfy', 'Arial', 'Helvetica', 'sans-serif'],
        sawarabi: ['Sawarabi Mincho', 'Arial', 'Helvetica', 'sans-serif'],
        roboto: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
