export interface IConfig {
    [key: string]: string | number;
    domain: string;
}

const config: IConfig = {
    domain: "https://www.example.com",
};

export default config;
