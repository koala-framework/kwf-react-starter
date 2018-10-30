import { IInitialConfig } from "app/app";
import Actions from "app/store/rootActions";
import { IApplicationState } from "app/store/rootReducer";
import { Action } from "redux";
import thunk, { ThunkAction, ThunkDispatch, ThunkMiddleware } from "redux-thunk";

export default (config: IInitialConfig) => {
    const middlewares = [];

    // Thunk
    middlewares.push(thunk as ThunkMiddleware<IApplicationState, Actions, string>);

    return middlewares;
};

export interface IThunkDispatch extends ThunkDispatch<IApplicationState, null, Actions> {}
export interface IThunkAction extends ThunkAction<Action, IApplicationState, null, Actions> {}
