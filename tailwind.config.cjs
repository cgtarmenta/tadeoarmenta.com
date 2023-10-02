/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './index.html',
   './src/**/*.{vue,ts,js,css}',
   './src/assets/**/*.{vue,ts,js,css}',
   './src/components/**/*.{vue,ts,js,css}',
   './src/layouts/**/*.{vue,ts,js,css}',
   './src/views/**/*.{vue,ts,js,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Fira Code"', 'monospace'],
      },
      colors: {
        lines: '#1E2D3D',
        inputBg: '#011221',
        buttonBg: '#1C2B3A',
        varColour: '#5565E8',
        violet: {
          '50': '#fcf9fd',
          '100': '#faf3fc',
          '200': '#f2e2f7',
          '300': '#e9d1f2',
          '400': '#d9aee9',
          '500': '#c98bdf',
          '600': '#b57dc9',
          '700': '#9768a7',
          '800': '#795386',
          '900': '#62446d'
        },
        pink: {
          '50': '#fefaf9',
          '100': '#fdf4f3',
          '200': '#fae4e1',
          '300': '#f6d3cf',
          '400': '#f0b3ab',
          '500': '#e99287',
          '600': '#d2837a',
          '700': '#af6e65',
          '800': '#8c5851',
          '900': '#724842'
        },
        emerald: {
          '50': '#f6fdfb',
          '100': '#ecfbf7',
          '200': '#d0f6eb',
          '300': '#b4f0de',
          '400': '#7be4c6',
          '500': '#43d9ad',
          '600': '#3cc39c',
          '700': '#32a382',
          '800': '#288268',
          '900': '#216a55'
        },
        orange: {
          '50': '#fffbf7',
          '100': '#fff6ef',
          '200': '#ffe9d7',
          '300': '#ffdbbf',
          '400': '#fec08f',
          '500': '#fea55f',
          '600': '#e59556',
          '700': '#bf7c47',
          '800': '#986339',
          '900': '#7c512f'
        },
        blue: {
          '50': '#f6f7fd',
          '100': '#edeffa',
          '200': '#d3d6f3',
          '300': '#b8bdeb',
          '400': '#828cdd',
          '500': '#4d5bce',
          '600': '#4552b9',
          '700': '#3a449b',
          '800': '#2e377c',
          '900': '#262d65'
        },
        cyan: {
          '50': '#f5fafa',
          '100': '#ecf5f4',
          '200': '#cee7e4',
          '300': '#b1d8d4',
          '400': '#77bab3',
          '500': '#3c9d93',
          '600': '#368d84',
          '700': '#2d766e',
          '800': '#245e58',
          '900': '#1d4d48'
        },
        slate: {
          '50': '#f7f8fa',
          '100': '#eff2f5',
          '200': '#d7dee5',
          '300': '#bfcad5',
          '400': '#90a3b6',
          '500': '#607b96',
          '600': '#566f87',
          '700': '#485c71',
          '800': '#3a4a5a',
          '900': '#2f3c4a'
        },
        gray: {
          '50': '#f2f3f4',
          '100': '#e6e8e9',
          '200': '#c0c5c9',
          '300': '#99a2a9',
          '400': '#4d5c68',
          '500': '#011627',
          '600': '#01101e',
          '700': '#010e19',
          '800': '#010b14',
          '900': '#000910'
        },
        stone: {
          '50': '#f2f3f3',
          '100': '#e6e6e7',
          '200': '#c0c1c3',
          '300': '#999c9f',
          '400': '#4d5256',
          '500': '#01080e',
          '600': '#01070d',
          '700': '#01060b',
          '800': '#010508',
          '900': '#000407'
        },
       'tonys-pink': {
         DEFAULT: '#E99287',
         50: '#FFFFFF',
         100: '#FFFFFF',
         200: '#FCF0EE',
         300: '#F6D1CC',
         400: '#EFB1A9',
         500: '#E99287',
         600: '#E06758',
         700: '#D83C28',
         800: '#A92E1F',
         900: '#792116',
         950: '#621B12'
       },
       'lynch': {
         DEFAULT: '#607B96',
         50: '#CED7E0',
         100: '#C2CDD8',
         200: '#A9B8C8',
         300: '#90A4B8',
         400: '#778FA8',
         500: '#607B96',
         600: '#4A5F74',
         700: '#344352',
         800: '#1E272F',
         900: '#080B0D',
         950: '#000000'
        },
      },
      extend: {
       spacing: {
        '16.5': '68px',
       }
     }
    },
  },
  plugins: [],
}
