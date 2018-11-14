import * as fs from "fs";
import * as path from "path";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";
import * as UglifyJSPlugin from "uglifyjs-webpack-plugin";
import * as webpack from "webpack";

const styledComponentsTransformer = createStyledComponentsTransformer();

interface IEnvironment {
    production: boolean;
}

const config = ({ production }: IEnvironment): webpack.Configuration => {
    const publicPath = "/assets/build/kwf-react-starter/";

    const plugins = [
        new webpack.DefinePlugin({
            CONFIG_DEV_LOCAL_EXISTS: fs.existsSync(path.resolve(__dirname, "src/config/dev.local.ts")),
        }),
    ];
    let tsLoaderOptions = {};
    if (production) {
        tsLoaderOptions = {
            ...tsLoaderOptions,
            getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        };
        plugins.push(
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify("production"),
            }),
            new UglifyJSPlugin(),
        );
    }

    return {
        mode: production ? "production" : "development",
        entry: {
            "kwf-react-starter": ["./index.ts"],
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: "file-loader",
                    options: {
                        publicPath: publicPath + "files/",
                        outputPath: "files/",
                        name: "[name].[ext]",
                    },
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules|vendor/,
                    loader: "ts-loader",
                    options: tsLoaderOptions,
                },
                {
                    test: /\.css?$/,
                    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
                },
            ],
        },
        plugins,
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
            path: path.resolve(__dirname, "assets/build/kwf-react-starter"),
            filename: "[name].js",
            chunkFilename: "[id].chunk.js?v=[chunkhash]",
            publicPath,
        },
        devServer: {
            host: "0.0.0.0",
            port: 8080,
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
        },
    };
};

export default config;
