import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#FFFFFF",
        accent: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          green: "#10B981",
          orange: "#F59E0B",
        },
        muted: "#71717A",
        border: "#E4E4E7",
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        card: '12px',
        button: '6px',
      },
    },
  },
  plugins: [],
} satisfies Config;
