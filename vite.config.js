import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
	base: "/template-2023",
	server: {
    open: true,
    host: true,
  },
	plugins: [injectHTML()],
	resolve: {
    alias: { '@': resolve(__dirname, './src') }
  },
});