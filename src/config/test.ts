import { IConfig as IProductionConfig } from "./production";

export interface IConfig extends IProductionConfig {}

const config: IConfig = {
    exampleApi: "http://test.example.com",
};

export default config;
