const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

module.exports = (env, argv) => {
    const prodBuild = argv.mode === "production";
    const publicPath = (prodBuild ? "/" : "http://0.0.0.0:8080/") + "assets/build/";

    const plugins = [
        new webpack.DefinePlugin({
            CONFIG_DEV_LOCAL_EXISTS: fs.existsSync(path.resolve(__dirname, "./src/config/dev.local.js")),
        }),
    ];
    if (prodBuild) {
        plugins.push(new UglifyJSPlugin());
        plugins.push(
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production"),
                },
            }),
        );
    }

    const babelOptions = {
        presets: [
            [
                "env",
                {
                    useBuiltIns: true,
                    targets: {
                        browsers: [">0.4% in alt-EU"],
                    },
                },
            ],
            "react",
        ],
    };

    return {
        entry: {
            app: ["./src/loader.ts"],
        },
        plugins: plugins,
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: "file-loader",
                    options: {
                        publicPath: publicPath + "images/",
                        outputPath: "images/",
                        name: "[name].[ext]",
                    },
                },
                {
                    test: /\.(jsx?)$/,
                    exclude: /node_modules|vendor/,
                    loader: "babel-loader",
                    options: babelOptions,
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules|vendor/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelOptions,
                        },
                        {
                            loader: "ts-loader",
                        },
                    ],
                },
                {
                    test: /\.css?$/,
                    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
                },
            ],
        },
        resolve: {
            modules: ["node_modules"],
            descriptionFiles: ["package.json"],
            mainFields: ["browser", "module", "main"],
            extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
        },
        output: {
            path: path.resolve(__dirname, "../build/assets"),
            filename: "[name].js",
            chunkFilename: "[id].chunk.js?v=[chunkhash]",
            publicPath: publicPath,
            pathinfo: !prodBuild,
        },
        devServer: {
            host: "0.0.0.0",
            port: 8080,
            contentBase: "./dist",
        },
    };
};
