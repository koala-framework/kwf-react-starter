import Master from "app/components/Master";
import theme from "app/theme/theme-blue";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

export interface IConfig {
    exampleSetting: string;
}

export const render = (domElement: HTMLElement, config: IConfig) => {
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Master />
        </ThemeProvider>,
        domElement,
    );
};
