import Master from "app/components/Master";
import { ThemeProvider } from "app/styled-components";
import { theme } from "app/theme";
import * as React from "react";
import * as ReactDOM from "react-dom";

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
