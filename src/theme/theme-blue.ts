import { ITheme, ThemeName } from "./types";

const theme: ITheme = {
    name: ThemeName.Blue,
    fonts: {
        roboto: "Roboto, sans-serif",
    },
    colors: {
        typo: "#3399ff",
        gray: "#999999",
    },
    breakpoints: {
        tn: {
            mediaquery: "@media all and (min-width: 320px)",
            value: 320,
        },
        sm: {
            mediaquery: "@media all and (min-width: 375px)",
            value: 375,
        },
        md: {
            mediaquery: "@media all and (min-width: 768px)",
            value: 768,
        },
        lg: {
            mediaquery: "@media all and (min-width: 1024px)",
            value: 1024,
        },
        xl: {
            mediaquery: "@media all and (min-width: 1440px)",
            value: 1440,
        },
    }
};
export default theme;
