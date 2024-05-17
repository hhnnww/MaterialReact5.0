import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { extendColorSchemes } from './extend-colorschemes';
import { components } from './extend-components';
import { extendTypography } from './extend-typography';

export const theme = extendTheme({
	colorSchemes: extendColorSchemes,
	typography: extendTypography,
	components: components,
});
