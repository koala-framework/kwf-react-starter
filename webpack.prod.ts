import * as UglifyJSPlugin from "uglifyjs-webpack-plugin";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import common from "./webpack.common";
import * as parts from "./webpack.parts";

const config: webpack.Configuration = {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        new UglifyJSPlugin(),
    ],
};

export default merge(common, config, parts.loadTypescript());
