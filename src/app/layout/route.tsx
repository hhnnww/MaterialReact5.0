import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './header';

export function Component() {
	return (
		<>
			<Header />
			<Box p={5}>
				<Outlet />
			</Box>
		</>
	);
}
