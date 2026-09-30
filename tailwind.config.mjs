/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Fresh, clean, reliable water cleaning palette
          water: {
            50: '#F0F9FF',   // Fresh clean water background
            100: '#E0F2FE',  // Light water tint
            200: '#BAE6FD',
            300: '#7DD3FC',
            400: '#38BDF8',
            500: '#0EA5E9',  // Vibrant clear water
            600: '#0284C7',  // Primary clean water blue
            700: '#0369A1',  // Deep clean blue
            800: '#075985',  // Sump & Tank navy blue
            900: '#0C4A6E',  // Dark water navy
            950: '#082F49',  // Header & Deep Footer navy
          },
          cyan: {
            DEFAULT: '#0891B2',
            50: '#ECFEFF',
            100: '#CFFAFE',
            500: '#06B6D4',
            600: '#0891B2',
            700: '#0E7490',
          },
          // Legacy mappings for smooth styling
          navy: {
            DEFAULT: '#0C4A6E',
            50: '#F0F9FF',
            100: '#E0F2FE',
            700: '#075985',
            800: '#0C4A6E',
            900: '#082F49',
            950: '#051E30',
          },
          teal: {
            DEFAULT: '#0284C7',
            50: '#F0F9FF',
            100: '#E0F2FE',
            200: '#BAE6FD',
            300: '#7DD3FC',
            400: '#38BDF8',
            500: '#0EA5E9',
            600: '#0284C7',
            700: '#0369A1',
            800: '#075985',
            900: '#0C4A6E',
          },
          offwhite: {
            DEFAULT: '#F8FAFC',
            50: '#FFFFFF',
            100: '#F8FAFC',
            200: '#F1F5F9',
            300: '#E2E8F0',
          },
          amber: {
            DEFAULT: '#F59E0B',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
          },
          charcoal: '#0F172A',
          muted: '#475569',
          surface: '#FFFFFF',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(2, 132, 199, 0.04), 0 1px 2px -1px rgba(2, 132, 199, 0.04)',
        'card': '0 4px 6px -1px rgba(8, 47, 73, 0.06), 0 2px 4px -2px rgba(8, 47, 73, 0.04)',
        'card-hover': '0 12px 24px -4px rgba(2, 132, 199, 0.12), 0 4px 8px -2px rgba(8, 47, 73, 0.06)',
        'elevated': '0 20px 25px -5px rgba(8, 47, 73, 0.12), 0 8px 10px -6px rgba(8, 47, 73, 0.08)',
      },
    },
  },
  plugins: [],
};
