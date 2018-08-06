import { Action } from "redux";
import thunk, { ThunkAction, ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import { IInitialConfig } from "../app";
import Actions from "./rootActions";
import { IApplicationState } from "./rootReducer";

export default (config: IInitialConfig) => {
    const middlewares = [];

    // Thunk
    middlewares.push(thunk as ThunkMiddleware<IApplicationState, Actions, string>);

    return middlewares;
};

export interface IThunkDispatch extends ThunkDispatch<IApplicationState, null, Actions> {}
export interface IThunkAction extends ThunkAction<Action, IApplicationState, null, Actions> {}
