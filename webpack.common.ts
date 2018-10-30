import * as fs from "fs";
import * as path from "path";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import * as parts from "./webpack.parts";

const config: webpack.Configuration = merge(
    {
        entry: {
            app: ["./src/loader.ts"],
        },
        plugins: [
            new webpack.DefinePlugin({
                CONFIG_DEV_LOCAL_EXISTS: fs.existsSync(path.resolve(__dirname, "src/config/dev.local.ts")),
            }),
        ],
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
            path: path.resolve(__dirname, "../build/assets"),
            filename: "[name].js",
            chunkFilename: "[id].chunk.js?v=[chunkhash]",
            publicPath: "/assets/build/",
        },
    },
    parts.loadFiles(),
    parts.loadCss(),
);

export default config;
