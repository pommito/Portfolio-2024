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
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.9s cubic-bezier(0, 0.55, 0.45, 1) forwards',
        'slide-in-delay': 'slide-in 0.9s cubic-bezier(0, 0.55, 0.45, 1) 0.25s forwards',
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
