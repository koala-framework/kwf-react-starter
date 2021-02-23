import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import * as fs from "fs";
import * as path from "path";
import * as webpack from "webpack";

const config = (): webpack.Configuration => {
    const production = process.env.NODE_ENV === "production";
    const publicPath = "/build/";

    const plugins: webpack.WebpackPluginInstance[] = [
        new webpack.DefinePlugin({
            CONFIG_DEV_LOCAL_EXISTS: fs.existsSync(path.resolve(__dirname, "src/config/dev.local.ts")),
        }),
    ];
    if (production) {
        plugins.push(
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify("production"),
            }),
        );
    } else {
        plugins.push(
            new ForkTsCheckerWebpackPlugin({
                eslint: {
                    files: "./src/**/*.{ts,tsx,js,jsx,json,css,scss,md}",
                },
            }),
        );
    }

    return {
        mode: production ? "production" : "development",
        entry: {
            "kwf-react-starter": ["./src/polyfills.ts", "./src/pre-loader.ts", "./src/loader.ts"],
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: "file-loader",
                    options: {
                        outputPath: "files/",
                        name: "[name].[ext]",
                    },
                },
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: require.resolve("babel-loader"),
                    options: {
                        customize: require.resolve("babel-preset-react-app/webpack-overrides"),
                        babelrc: false,
                        configFile: false,
                        presets: [require.resolve("babel-preset-react-app")],
                        plugins: [
                            [
                                require.resolve("babel-plugin-styled-components"),
                                {
                                    displayName: !production,
                                    fileName: !production,
                                },
                            ],
                        ],
                        cacheDirectory: true,
                    },
                },
                {
                    test: /\.(js|mjs)$/,
                    exclude: /@babel(?:\/|\\{1,2})runtime/,
                    loader: require.resolve("babel-loader"),
                    options: {
                        babelrc: false,
                        configFile: false,
                        compact: false,
                        presets: [[require.resolve("babel-preset-react-app/dependencies"), { helpers: true }]],
                        cacheDirectory: true,
                        sourceMaps: false,
                    },
                },
                {
                    test: /\.css?$/,
                    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
                },
            ],
        },
        plugins,
        optimization: {
            sideEffects: true,
            usedExports: true,
        },
        resolve: {
            modules: ["node_modules"],
            descriptionFiles: ["package.json"],
            mainFields: ["browser", "module", "main"],
            extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
            alias: {
                app: path.resolve(__dirname, "src/"),
            },
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].js",
            chunkFilename: "[id].chunk.js?v=[chunkhash]",
        },
        cache: {
            type: "filesystem",
            buildDependencies: {
                config: [__filename], // you may omit this when your CLI automatically adds it
            },
        },
        target: "web", // Fixes HMR: https://github.com/webpack/webpack-dev-server/issues/2758
        devServer: {
            host: "0.0.0.0",
            port: 8080,
            contentBase: path.join(__dirname, "public"),
            publicPath,
            historyApiFallback: true,
            compress: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        },
    };
};

export default config;
