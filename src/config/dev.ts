import { IConfig as ITestConfig } from "./test";

export interface IConfig extends ITestConfig {}

const config: IConfig = {
    domain: "http://dev.example.com",
};

export default config;
