import { defineConfig } from 'rollup';
import typescript from 'typescript';
import typescriptPlugin from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { getBabelInputPlugin } from '@rollup/plugin-babel';
import babelConfig from './babel.config.js';
import terser from '@rollup/plugin-terser';

export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/question.js',
            format: 'es',
        },
        {
            file: 'dist/question.cjs',
            format: 'cjs',
        },
        {
            name: 'question',
            file: 'dist/question.umd.js',
            format: 'umd',
        }
    ],
    plugins: [
        typescriptPlugin({
            exclude: 'node_modules/**',
            typescript,
        }),
        nodeResolve({
            browser: true
        }),
        commonjs({
            strictRequires: true,
            transformMixedEsModules: true
        }),
        getBabelInputPlugin(babelConfig),
        // terser()
    ]
});
