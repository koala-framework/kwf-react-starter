import Master from "app/components/Master";
import "app/globals";
import configureStore from "app/store";
import { IApplicationState } from "app/store/rootReducer";
import { theme } from "app/theme";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

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
