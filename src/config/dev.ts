import { IConfig } from "./index";
import test from "./test";

declare const CONFIG_DEV_LOCAL_EXISTS: boolean;

let config: IConfig = {
    ...test,
    exampleApi: "http://dev.example.com",
};

if (process.env.NODE_ENV !== "production") {
    const devLocal: IConfig = CONFIG_DEV_LOCAL_EXISTS ? require("./dev.local").default : {};
    config = { ...config, ...devLocal };
}

export default config;
