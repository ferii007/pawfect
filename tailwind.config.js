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

        primaryBackgroundColor: "#F7C59F",
        secondaryBackgroundColor: "#FFCCC2",
        frontBackgroundColor: "#BB7B6E",

        primaryLineColor: "#BD7D53",
      },
      fontFamily: {
        satisfy: ['Satisfy', 'Arial', 'Helvetica', 'sans-serif'],
        sawarabi: ['Sawarabi Mincho', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
