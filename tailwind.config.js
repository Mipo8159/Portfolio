module.exports = {
	purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			kaushan: ['Kaushan Script'],
			rubik: ['Rubik'],
			roboto: ['Roboto Condensed'],
		},

		boxShadow: {
			'custom-light': '0 0 10px rgba(49, 49, 49, .75)',
			'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
		},
		extend: {
			colors: {
				green: {
					DEFAULT: '#54e08cf8',
				},
				dark: {
					DEFAULT: '#010101',
					100: '#0a0b0e',
					200: '#16181D',
					300: '#16181D',
					500: '#0f1115',
					700: '#202125',
				},
			},
		},
	},
	variants: {
		extend: {
			boxShadow: ['dark'],
		},
	},
	plugins: [],
};
