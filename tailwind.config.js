
import colors from '@material-tailwind/html/theme/base/colors';


import withMT from "@material-tailwind/html/utils/withMT"
/** @type {import('tailwindcss').Config} */
// const tailwindcolors = require('tailwindcss/colors')
module.exports = withMT({

  enabled: true,
  // mode: 'layers', // or 'all' ☠️ be carefule process.env.NODE_ENV === 'production'
  // preserveHtmlElements: true, // or false ⚠️ not generally recommended
  // layers: ['base', 'components', 'utilities'], // remove layers to ignore from purging
  content: ["./src/**/*.{html,ts}"],
  extract: {
    md: (content) => {

      console.log(`process.env.NODE_ENV ${process.env.NODE_ENV}`)
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches =
        content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || []

      //  content.match(/[^<>"'`\s]*/) broadMatches.concat(innerMatches)
      // Remove and dedupe matches
      return broadMatches.concat(innerMatches)
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'], // Add variants if needed
    },
  },


  darkMode: 'class', // or 'media' or 'class'
  theme: {

    fontFamily: {
      sans: ['sofia-pro', 'sans-serif'],
      serif: ["Roboto Slab", "serif"],
      display: ['cubano', 'sans-serif'],
      body: ['sofia-pro', 'sans-serif'],
      code: ['attribute-mono', 'sans-serif'],
      roboto: ["Roboto", "sans-serif"],
      mono: [
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      dark: colors.dark,
      gray1: '#f8f8f8',
      gray2: '#dbe1e8',
      gray3: '#b2becd',
      gray4: '#6c7983',
      gray5: '#454e56',
      gray6: '#2a2e35',
      gray7: '#12181b',
      link: '#0000ee',
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
      brown: colors.brown,
      cyan: colors.cyan,
      gray: colors.gray,
      indigo: colors.indigo,
      light: colors.light,
      lime: colors.lime,
      teal: colors.teal,
      'deep-purple': colors['deep-purple'],
      'deep-orange': colors['deep-orange'],
      'blue-gray': colors['blue-gray'],
      'light-blue': colors['light-blue'],
      'light-green': colors['light-green'],


    },
    screens: {
      // X-Small devices (portrait phones, less than 480px)
      'xs': { 'min': '480px', 'max': '575px' },

      // => @media (min-width: 480px) { ... }

      // Small devices (landscape phones, 576px and up)
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      // Medium devices (tablets, 768px and up)
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      // Large devices (desktops, 992px and up)
      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      // X-Large devices (large desktops, 1200px and up)
      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      // XX-Large devices (larger desktops, 1400px and up)
      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }

      // XXX-Large devices (Largest desktops, 1535px and up)
      '3xl': '1535px',
      // => @media (min-width: 1535px ) { ... }
    },

    extend: {
      boxShadow: {
        '3xl': '0 5px 20px rgb(0 0 0 / 30%)',
        '4xl': '0 5px 20px rgb(0 0 0 / 90%)',
        'inner-pressed': 'inset 2px 2px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(255, 255, 255, 0.3)',
        'inner-pressed-black': 'inset 2px 2px 5px rgba(0, 0, 0, 0.7), inset -2px -2px 5px rgba(255, 255, 255, 0.1)',
      },
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              'font-weight': 'normal',
              'font-size': '2.5rem',
            },
            h2: {
              'font-weight': 'normal',
              'font-size': '2rem',
            },
            h3: {
              'font-weight': 'normal',
              'font-size': '1.75rem',
            },
            h4: {
              'font-weight': 'normal',
              'font-size': '1.5rem',
            },
            h5: {
              'font-weight': 'normal',
              'font-size': '1.25rem',
            }
          },
        },
      },
      screens: {
        '3xl': '1535px',
      },
    },

  },
  corePlugins: {
    preflight: true,
  },
  plugins: [

    require('@tailwindcss/typography'),
  ],
})

