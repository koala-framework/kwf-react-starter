import { ITheme } from "app/theme";
import * as styledComponents from "styled-components";

const { default: styled, css, injectGlobal, keyframes, ThemeProvider } = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
