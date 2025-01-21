import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['utils/index.ts', 'types/index.ts'],
    outDir: 'dist',
    format: ['esm', 'cjs'],
    dts: true,
    clean: true
});
