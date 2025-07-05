import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./header";

export function Component() {
	localStorage.setItem("mui-mode", "dark");
	localStorage.setItem("mui-color-scheme-dark", "dark");
	localStorage.setItem("mui-color-scheme-light", "light");
	return (
		<>
			<Header />
			<Box p={5}>
				<Outlet />
			</Box>
		</>
	);
}
