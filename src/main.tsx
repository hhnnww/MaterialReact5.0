import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { OpenAPI } from "./client";
import router from "./router";
import { theme } from "./theme";

OpenAPI.BASE = "http://127.0.0.1:8000";

document.title = "超级素材处理程序 5.0";

// localStorage.setItem("mui-mode", "light");
// localStorage.setItem("mui-color-scheme-light", "light");
// localStorage.setItem("mui-color-scheme-dark", "light");

const root_element = document.getElementById("root");

if (root_element !== null) {
	ReactDOM.createRoot(root_element).render(
		<React.StrictMode>
			<CssVarsProvider
				theme={theme}
				defaultMode="light"
				defaultColorScheme={"light"}
			>
				<CssBaseline />
				<RouterProvider router={router} />
			</CssVarsProvider>
		</React.StrictMode>,
	);
}
