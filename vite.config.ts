import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./src/"),
		},
	},
	build: {
		outDir: "F:\\codeProject\\MaterialEditPython50\\static",
		emptyOutDir: true,
	},
	base: "./",
});
