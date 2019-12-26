import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import jsx from 'rollup-plugin-jsx';
import html from 'rollup-plugin-bundle-html';
import run from '@rollup/plugin-run';

export default {
    input: "src/index.js",
    external: ['react', 'react-dom'],
    output:[
        {
            file: "dist/bundle.esm.js",
            "format": "esm",
            "globals": {
                'react': 'React',
                'react-dom': 'ReactDOM'
            }
        }
    ],
    plugins: [
        jsx( {factory: 'React.createElement'} ),

        resolve({
            browser: true
        }),
        commonjs({
            include: "node_modules/**",
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        html({
            template: 'src/index.html',
            dest: "dist",
            filename: 'index.html'
        }),
        run()
    ]
}
