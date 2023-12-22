import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'culture': "url('/images/bg/culture.jpg')",
        'culture-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.22) 60.94%, #FFF 93.75%)',
        'club-gradient': 'linear-gradient(180deg, rgba(104, 104, 104, 0.00) 0%, rgba(104, 104, 104, 0.37) 64.58%, #676767 100%)',
      },
      height: {
        '868': '868px',
      },
      fontFamily: {
        Antique: ['Antique Olive', 'sans-serif'],
        Reckless: ['Reckless Neue', 'serif'],
      },
    },
  },
  prefix: 'tw-',
  plugins: [],
}
export default config
