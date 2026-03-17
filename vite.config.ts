import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HotpotWidget',
      formats: ['es', 'umd'],
      fileName: (format) => `widget.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: 'widget.[ext]',
      },
    },
    sourcemap: true,
    minify: 'esbuild',
  },
  server: {
    port: 3000,
    open: '/examples/index.html',
  },
});
