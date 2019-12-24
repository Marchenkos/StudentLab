import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import less from "rollup-plugin-less";
import image from "rollup-plugin-image";

export default {
    input: "src/index.js",
    output: {
        file: "dist/bundle.js",
        format: "cjs"
    },
    external: [
        "react",
        "react-proptypes"
    ],
    plugins: [
        resolve(),
        babel({
            exclude: "node_modules/**"
        }),
        less(),
        image()
    ]
};
