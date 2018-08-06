import { applyMiddleware, compose, createStore } from "redux";
import { IInitialConfig } from "../app";
import createMiddelwares from "./middlewares";
import rootReducer, { IApplicationState } from "./rootReducer";

export type IGetState = () => IApplicationState;

export default (initialState: IApplicationState, config: IInitialConfig) => {
    let composeEnhancers;
    composeEnhancers = process.env.NODE_ENV !== "production" ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

    const middlewares = createMiddelwares(config);
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
};
