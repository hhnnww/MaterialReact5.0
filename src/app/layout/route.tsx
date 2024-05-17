import { Container } from '~/component/box';
import { Header } from './header';
import { Outlet } from 'react-router-dom';

export function Component() {
	return (
		<>
			<Header />

			<Container>
				<Outlet />
			</Container>
		</>
	);
}
