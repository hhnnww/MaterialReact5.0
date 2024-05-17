import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode } from 'react';

export function GridHeader(props: { title: string }) {
	return (
		<>
			<Grid xs={12} mt={3}>
				<Typography pl={0.5}>{props.title}</Typography>
			</Grid>
		</>
	);
}

export function Container(props: { children?: ReactNode }) {
	return (
		<>
			<Box px={5}>{props.children}</Box>
		</>
	);
}
