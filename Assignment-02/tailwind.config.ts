import type { Config } from "tailwindcss";

const config: Config = {
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
        bgcolor: "#252B42",
        h3 : "#FFFFFF",
        div1box : "#FFDCD1",
        div2box : "#B9EAA8",
      },
      fontFamily : {
        Montserrat : ["Montserrat"]
      }
    },
  },
  plugins: [],
};
export default config;
