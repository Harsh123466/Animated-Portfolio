/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07090e',
        surface: {
          50: '#1a2234',
          100: '#151b2a',
          200: '#101622',
          300: '#0c1017',
          DEFAULT: '#0c1017',
          card: 'rgba(15, 23, 42, 0.65)',
        },
        border: {
          light: 'rgba(255, 255, 255, 0.08)',
          neon: 'rgba(16, 185, 129, 0.4)',
          cyan: 'rgba(6, 182, 212, 0.4)',
        },
        neon: {
          emerald: '#10b981',
          lime: '#a3e635',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          purple: '#a855f7',
        },
        muted: {
          DEFAULT: '#94a3b8',
          dark: '#64748b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'neon-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'neon-purple': '0 0 25px -5px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'terminal-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.03)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
    },
  },
  plugins: [],
}
