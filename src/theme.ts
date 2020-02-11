import { DefaultTheme } from "styled-components";

export interface IColors {
    example: string;
}

export interface IBreakpoints {
    example: string;
}

export interface IWithTheme {
    theme?: DefaultTheme;
}

export const theme: DefaultTheme = {
    colors: {
        example: "#314659",
    },
    breakpoints: {
        example: "(min-width: 1024px)",
    },
};

export const getColor = (color: keyof IColors): ((props: IWithTheme) => string) => {
    return ({ theme: t }) => t!.colors[color];
};

export const getBreakpoint = (breakpoint: keyof IBreakpoints): ((props: IWithTheme) => string) => {
    return ({ theme: t }) => t!.breakpoints[breakpoint];
};
