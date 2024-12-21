import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), ViteAliases()],
	build: {
		// outDir: "F:\\codeProject\\MaterialEditPython50\\static",
		emptyOutDir: true,
	},
	base: "./",
});
