import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import flowbite from "flowbite/plugin";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [daisyui, flowbite],
};

export default config;
