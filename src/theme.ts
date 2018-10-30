export interface IColors {
    main: string;
    sec: string;
    highlightedText: string;
    contentBg: string;
    typo: string;
    dark: string;
    light: string;
    lightGrey: string;
    errorBg: string;
    errorBorder: string;
    errorText: string;
    successBg: string;
    successBorder: string;
    successText: string;
}

export interface IBreakpoints {
    md: string;
    lg: string;
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
        main: "#314659",
        sec: "#1E3040",
        highlightedText: "#c90000",
        contentBg: "#f4f4f4",
        typo: "#414742",
        dark: "#000",
        light: "#fff",
        lightGrey: "#707070",
        errorBg: "#d11313",
        errorBorder: "#bb1d1d",
        errorText: "#fff",
        successBg: "#7db800",
        successBorder: "#1e7638",
        successText: "#fff",
    },
    breakpoints: {
        md: "(min-width: 768px)",
        lg: "(min-width: 1024px)",
    },
};

export const getColor = (color: keyof IColors): ((props: IWithTheme) => string) => {
    return ({ theme: { colors } }) => colors[color];
};

export const getBreakpoint = (breakpoint: keyof IBreakpoints): ((props: IWithTheme) => string) => {
    return ({ theme: { breakpoints } }) => breakpoints[breakpoint];
};

export const isMobile = (): boolean => window.innerWidth < 1024;
