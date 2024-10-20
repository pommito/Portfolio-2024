import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pp: ['var(--font-pp-neue-montreal)', 'sans-serif'],
        dot: ['var(--font-dotemp-bit)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      aspectRatio: {
        '4/3': '4/ 3',
      },
    },
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
