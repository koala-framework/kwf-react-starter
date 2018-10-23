import { IConfig as ITestConfig } from "./test";

export interface IConfig extends ITestConfig {}

const config: IConfig = {
    exampleApi: "http://dev.example.com",
};

export default config;
