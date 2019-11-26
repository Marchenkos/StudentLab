const path = require("path");
const glob = require("glob");

module.exports = {
    entry: glob.sync("./src/*.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/dist",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: "/node_modules/",
            use: ["babel-loader", "eslint-loader"],
        }],
    },
};
