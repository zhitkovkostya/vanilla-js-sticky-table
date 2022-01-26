import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import banner from 'rollup-plugin-banner';
import { uglify } from 'rollup-plugin-uglify';

const bannerText = 'Vanilla Javascript Sticky Table v<%= pkg.version %>\n<%= pkg.homepage %>';

export default {
    input: 'src/index.js',
    output: [{
        file: 'dist/bundle.min.js',
        name: 'StickyTable',
        format: 'umd'
    }, {
        file: 'demo/bundle.min.js',
        name: 'StickyTable',
        format: 'umd'
    }],
    plugins: [
        eslint(),
        commonjs(),
        uglify(),
        banner(bannerText)
    ]
}