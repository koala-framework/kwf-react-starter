export enum ThemeName {
    Blue = "Blue",
}

export interface ITheme {
    name: ThemeName;
    fonts: {
        roboto: string;
    };
    colors: {
        typo: string;
        gray: string;
    };
    breakpoints: {
        tn: {
            mediaquery: string;
            value: number;
        };
        sm: {
            mediaquery: string;
            value: number;
        };
        md: {
            mediaquery: string;
            value: number;
        };
        lg: {
            mediaquery: string;
            value: number;
        };
        xl: {
            mediaquery: string;
            value: number;
        };
    };
}
