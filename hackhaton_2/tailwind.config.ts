import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm' : '750px',
        'sm1' : '700px',
        'sm2' : '650px',
        'sm3' : '600px',
        'sm4' : '550px',
        'sm5' : '500px',
        'sm6' : '450px',
        'sm7' : '400px',

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;