/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  theme: {
    extend: {
      borderRadius: {
        '4px': '4px',
        '8px': '8px'
      },
      boxShadow: {
        header: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sider: '2px 0 8px 0 rgb(29 35 41 / 5%)',
        sm: 'var(--un-shadow)',
        tab: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
      },
      colors: {
        error: 'rgb(var(--error-color) / <alpha-value>)',
        info: 'rgb(var(--info-color) / <alpha-value>)',
        primary: {
          50: 'rgb(var(--primary-color-50) / <alpha-value>)',
          100: 'rgb(var(--primary-color-100) / <alpha-value>)',
          200: 'rgb(var(--primary-color-200) / <alpha-value>)',
          300: 'rgb(var(--primary-color-300) / <alpha-value>)',
          400: 'rgb(var(--primary-color-400) / <alpha-value>)',
          500: 'rgb(var(--primary-color-500) / <alpha-value>)',
          600: 'rgb(var(--primary-color-600) / <alpha-value>)',
          700: 'rgb(var(--primary-color-700) / <alpha-value>)',
          800: 'rgb(var(--primary-color-800) / <alpha-value>)',
          900: 'rgb(var(--primary-color-900) / <alpha-value>)',
          DEFAULT: 'rgb(var(--primary-color) / <alpha-value>)'
        },
        success: 'rgb(var(--success-color) / <alpha-value>)',
        warning: 'rgb(var(--warning-color) / <alpha-value>)'
      },
      fontSize: {
        icon: '1.125rem',
        'icon-large': '1.5rem',
        'icon-small': '1rem',
        'icon-xl': '2rem',
        'icon-xs': '0.875rem'
      },
      spacing: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '48px': '48px',
        '56px': '56px',
        '64px': '64px',
        '72px': '72px',
        '128px': '128px',
        '240px': '240px',
        '250px': '250px',
        '280px': '280px',
        '300px': '300px',
        '320px': '320px',
        '360px': '360px',
        '400px': '400px',
        '480px': '480px',
        '520px': '520px'
      }
    }
  }
};
