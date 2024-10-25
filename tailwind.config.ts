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
    keyframes: {
      fadeOut: {
        from: { opacity: '1', transform: 'scale(1)' },
        to: { opacity: '0', transform: 'scale(0.8)' },
      },
      scaleIn: {
        from: { opacity: '0', transform: 'scale(1.2)' },
        to: { opacity: '1', transform: 'scale(1)' },
      },
    },
    animation: {
      'fade-out': 'fadeOut 0.6s ease-out',
      'scale-in': 'scaleIn 0.6s ease-out',
    },
  },
  plugins: [],
};
export default config;
