import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Master from "./components/Master";
import "./globals";
import configureStore from "./store";
import { IApplicationState } from "./store/rootReducer";
import { theme } from "./theme";

export interface IInitialConfig {
    domain: string;
}

export const render = (domElement: HTMLElement, config: IInitialConfig) => {
    const data: IApplicationState = {
        domain: config.domain,
    };

    const store = configureStore(data, config);

    ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Master />
            </ThemeProvider>
        </Provider>,
        domElement,
    );
};
