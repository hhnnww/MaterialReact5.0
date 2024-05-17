import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), ViteAliases()],
	build: {
		outDir: 'C:\\Users\\wuweihua\\codeProject\\MaterialEditPython5.0\\static',
		emptyOutDir: true,
	},
	base: './',
});

