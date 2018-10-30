import * as path from "path";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import common from "./webpack.common";
import * as parts from "./webpack.parts";

const styledComponentsTransformer = createStyledComponentsTransformer();

const config: webpack.Configuration = {
    mode: "development",
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        contentBase: path.join(__dirname, "dist"),
    },
};

export default merge(
    common,
    config,
    parts.loadTypescript({
        getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
    }),
);
