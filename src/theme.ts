export interface IColors {
    example: string;
}

export interface IBreakpoints {
    example: string;
}

export interface ITheme {
    colors: IColors;
    breakpoints: IBreakpoints;
}

export interface IWithTheme {
    theme?: ITheme;
}

export const theme: ITheme = {
    colors: {
        example: "#314659",
    },
    breakpoints: {
        example: "(min-width: 1024px)",
    },
};

export const getColor = (color: keyof IColors): ((props: IWithTheme) => string) => {
    return ({ theme: { colors } }) => colors[color];
};

export const getBreakpoint = (breakpoint: keyof IBreakpoints): ((props: IWithTheme) => string) => {
    return ({ theme: { breakpoints } }) => breakpoints[breakpoint];
};

export const isMobile = (): boolean => window.innerWidth < 1024;
