export enum Color {
    main = "MAIN",
    sec = "SEC",
    highlightedText = "HIGHLIGHTED_TEXT",
    contentBg = "CONTENT_BG",
    typo = "TYPO",
    dark = "DARK",
    light = "LIGHT",
    lightGrey = "LIGHT_GREY",
    errorBg = "ERROR_BG",
    errorBorder = "ERROR_BORDER",
    errorText = "ERROR_TEXT",
    successBg = "SUCCESS_BG",
    successBorder = "SUCCESS_BORDER",
    successText = "SUCCESS_TEXT",
}

export enum Breakpoint {
    md = "MEDIUM",
    lg = "LARGE",
}

export interface ITheme {
    colors: {
        [Color.main]: string;
        [Color.sec]: string;
        [Color.highlightedText]: string;
        [Color.contentBg]: string;
        [Color.typo]: string;
        [Color.dark]: string;
        [Color.light]: string;
        [Color.lightGrey]: string;
        [Color.errorBg]: string;
        [Color.errorBorder]: string;
        [Color.errorText]: string;
        [Color.successBg]: string;
        [Color.successBorder]: string;
        [Color.successText]: string;
    };
    breakpoints: {
        [Breakpoint.md]: string;
        [Breakpoint.lg]: string;
    };
}

export interface IWithTheme {
    theme?: ITheme;
}

export const theme: ITheme = {
    colors: {
        [Color.main]: "#314659",
        [Color.sec]: "#1E3040",
        [Color.highlightedText]: "#c90000",
        [Color.contentBg]: "#f4f4f4",
        [Color.typo]: "#414742",
        [Color.dark]: "#000",
        [Color.light]: "#fff",
        [Color.lightGrey]: "#707070",
        [Color.errorBg]: "#d11313",
        [Color.errorBorder]: "#bb1d1d",
        [Color.errorText]: "#fff",
        [Color.successBg]: "#7db800",
        [Color.successBorder]: "#1e7638",
        [Color.successText]: "#fff",
    },
    breakpoints: {
        [Breakpoint.md]: "(min-width: 768px)",
        [Breakpoint.lg]: "(min-width: 1024px)",
    },
};

export const getColor = (color: Color): ((props: IWithTheme) => string) => {
    return ({ theme: { colors } }) => colors[color];
};

export const getBreakpoint = (breakpoint: Breakpoint): ((props: IWithTheme) => string) => {
    return ({ theme: { breakpoints } }) => breakpoints[breakpoint];
};

export const isMobile = (): boolean => window.innerWidth < 1024;
