import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: [{
        file: 'dist/index.esm.js',
        format: 'es'
    }, {
        file: 'dist/index.cjs.js',
        format: 'cjs'
    }, {
        file: 'dist/index.iife.js',
        format: 'iife',
        name: 'Daykit'
    }],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: 'tsconfig.json',
            cacheRoot: 'node_modules/.cache/rpt2',
            tsconfigOverride: {
                compilerOptions: {
                    sourceMap: true,
                    declaration: true,
                    declarationMap: true
                }
            },
        })
    ]
};
