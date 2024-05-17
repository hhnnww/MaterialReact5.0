import type { CssVarsThemeOptions } from '@mui/material/styles';

export const extendColorSchemes: CssVarsThemeOptions['colorSchemes'] = {
	dark: {
		palette: {
			primary: {
				main: 'rgb(41, 112, 255)',
				dark: 'rgb(0, 78, 235)',
			},
		},
	},

	light: {
		palette: {
			primary: {
				main: 'rgb(41, 112, 255)',
				dark: 'rgb(0, 78, 235)',
			},
		},
	},
};
