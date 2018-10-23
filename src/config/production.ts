export interface IConfig {
    [key: string]: string | number;
    exampleApi: string;
}

const config: IConfig = {
    exampleApi: "https://www.example.com",
};

export default config;
