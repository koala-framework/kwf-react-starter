import { IConfig as IDevConfig } from "./dev";
import production, { IConfig as IProductionConfig } from "./production";
import test, { IConfig as ITestConfig } from "./test";

declare const CONFIG_DEV_LOCAL_EXISTS: boolean;

interface IConfig {
    [key: string]: IProductionConfig | ITestConfig | IDevConfig;
    production: IProductionConfig;
    test: ITestConfig;
    dev?: IDevConfig;
}

const config: IConfig = {
    production: { ...production },
    test: { ...production, ...test },
};

if (process.env.NODE_ENV !== "production") {
    interface IConfigLocal extends IDevConfig {}
    const devLocal: IConfigLocal = CONFIG_DEV_LOCAL_EXISTS ? require("./dev.local").default : {};

    const dev = require("./dev").default;
    config.dev = { ...production, ...test, ...dev, ...devLocal };
}

type Environments = "production" | "test" | "dev";
export const getConfig = <K extends keyof IDevConfig>(key: K): IDevConfig[K] => {
    const section: Environments = config[(window as any).__KWF_REACT_STARTER_ENV__] ? (window as any).__KWF_REACT_STARTER_ENV__ : "production";
    return config[section][key];
};
