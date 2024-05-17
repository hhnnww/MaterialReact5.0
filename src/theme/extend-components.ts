import { type CssVarsThemeOptions } from '@mui/material';

export const components: CssVarsThemeOptions['components'] = {
	MuiFormControl: {
		defaultProps: {
			fullWidth: true,
		},
	},

	MuiButton: {
		styleOverrides: {
			root: () => ({
				fontWeight: 'bold',
			}),
		},
	},

	MuiTextField: {
		defaultProps: {
			fullWidth: true,
		},
	},

	MuiCssBaseline: {
		styleOverrides: () => ({}),
	},
};
