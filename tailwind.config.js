/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import tailwindAnimate from 'tailwindcss-animate'
import flowbite from 'flowbite/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2F80ED',
        'primary-dark': '#4F4F4F',
        'primary-neutral': '#828282',
        'primary-light': '#E0E0E0',
        'indicator-orange': '#F8B76B',
        'indicator-red': '#EB5757',
        'indicator-yellow': '#F2C94C',
        'indicator-blue': '#8785FF',
        'sticker-blue': '#E9F3FF',
        'sticker-orange': '#FDCFA4',
        'sticker-barely': '#F9E9C3',
        'sticker-waterwing': '#AFEBDB',
        'sticker-celery': '#CBF1C2',
        'sticker-bright': '#FDE3A7',
        'sticker-lavender': '#CFCEF9',
        'sticker-sugarpill': '#F9E0FD',
      }
    }
  },
  plugins: [daisyui, tailwindAnimate, flowbite],
}

