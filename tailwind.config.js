/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'plant-dino': 'url("/assets/plant_full.png")',
        'bgdino3': 'url("/assets/bgdino3.png")',
        'banner': 'url("/assets/banner.png")',
        'footer': 'url("/assets/footer.png")',
      },
      backgroundSize: {
        '100%': '100% 100%'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        'bg-primary': '#45BA45',
        'text-primary': 'rgba(0, 0, 0, 0.7)',
        'bg-footer': '#093012',
        'text-base': '#51DA3F'
      },
      fontFamily: {
        'poppins': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'potta-one': ['Potta One',  'system-ui'],
        'wild': ['wild', 'system-ui'],
        'urban': ['urban', 'system-ui'],
        'roboto': ['roboto', 'system-ui'],
      },
      fontSize: {
        'big': '64px',
        'medium': '40px',
        'pre-medium': '32px',
        'small': '24px',
        'para': '14px',
      },
      fontWeight: {
        'super-bold': '900'
      },
      boxShadow: {
        'xs': '0px 4.282px 52.456px 0px rgba(0, 7, 72, 0.12)',
      },
      cursor: {
        'custom': 'url("/assets/dino_cursor.png), auto',
      }
    },
  },
  plugins: [],
}