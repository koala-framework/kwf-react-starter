import { ITheme } from "app/theme";
import * as styledComponents from "styled-components";

const { default: styled, css, createGlobalStyle, keyframes, ThemeProvider } = styledComponents as styledComponents.ThemedStyledComponentsModule<
    ITheme
>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
