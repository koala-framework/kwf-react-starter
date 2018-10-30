import { IConfig } from "./index";
import production from "./production";

const config: IConfig = {
    ...production,
    exampleApi: "http://test.example.com",
};

export default config;
