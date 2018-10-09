import { IConfig as IProductionConfig } from "./production";

export interface IConfig extends IProductionConfig {}

const config: IConfig = {
    domain: "http://test.example.com",
};

export default config;
