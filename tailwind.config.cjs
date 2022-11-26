/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
      fontFamily: {
         'sans': ['KoHo', ...defaultTheme.fontFamily.sans],
         // 'monospace': ['Inter var', 'monospace'],
      },
      fontSize: {
         xs: "clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)",
         sm: "clamp(0.88rem, 0.83rem + 0.24vw, 1rem)",
         base: "clamp(1.09rem, 1rem + 0.47vw, 1.33rem)",
         lg: "clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem)",
         xl: "clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem)",
         "2xl": "clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem)",
         "3xl": "clamp(2.67rem, 2.07rem + 3vw, 4.21rem)",
         "4xl": "clamp(3.34rem, 2.45rem + 4.43vw, 5.61rem)",
      },
      container: {
         center: true,
         // padding: {
         // 	'2xl': '1rem',
         // }
      },
      extend: {
         keyframes: {
				scale: {
				  '0%': { transform: 'scale(1)' },
				  '100%': { transform: 'scale(1.1)' },
				}
			},
			animation: {
				'scale': 'scale 0.6s ease infinite alternate',
			},
         backgroundImage: {
            "gradient-card": "linear-gradient(45deg, #4f39fa, #da62c4 30%, hsl(17, 24%, 90%) 60%);",
            '360': "linear-gradient(180deg,rgba(46,229,216,.2),rgba(6,46,81,.7)),url(../src/images/fondo-360.jpg)",
         },
         backgroundPosition: {
            "100": "100%"
         },
         colors: {
            "cyan-ak": "#2ee5d8",
            azul: "#062e51",
            amarillo: "#FFF000"
         },
         boxShadow: {
            '3xl': 'rgb(16 254 254 / 32%) 0px 47px 165px, rgb(16 254 254 / 24%) 0px 30.463px 96.6319px, rgb(16 254 254 / 20%) 0px 18.1037px 52.5556px, rgb(16 254 254 / 16%) 0px 9.4px 26.8125px, rgb(16 254 254 / 13%) 0px 3.82963px 13.4444px, rgb(16 254 254 / 8%) 0px 0.87037px 6.49306px',
         }
      },
   },
   plugins: [],
}
