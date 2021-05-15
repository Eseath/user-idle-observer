import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
    {
        input: 'entry.js',
        output: {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            plugins: [terser()],
        },
    },
    {
        input: 'entry.umd.js',
        output: {
            file: pkg.exports['.'].require,
            name: 'UserIdleObserver',
            format: 'umd',
            plugins: [terser()],
        },
    },
];
