import { combineReducers } from "redux";

export interface IApplicationState {
    readonly exampleReducer: string;
}

export default combineReducers<IApplicationState>({
    exampleReducer: (state: string = "") => state,
});
