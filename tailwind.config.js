/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  // safelist: [
  //   {
  //     pattern: /./, // the "." means "everything"
  //   },
  // ],
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
