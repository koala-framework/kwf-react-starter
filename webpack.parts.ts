import * as webpack from "webpack";

export const loadTypescript = (options?: object): webpack.Configuration => ({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules|vendor/,
                loader: "ts-loader",
                options,
            },
        ],
    },
});

export const loadCss = (styleOptions?: object, cssOptions?: object): webpack.Configuration => ({
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [{ loader: "style-loader", options: styleOptions }, { loader: "css-loader", options: cssOptions }],
            },
        ],
    },
});

export const loadFiles = (options?: object): webpack.Configuration => ({
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    outputPath: "images/",
                    name: "[name].[ext]",
                    ...options,
                },
            },
        ],
    },
});
