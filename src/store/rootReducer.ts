import { combineReducers } from "redux";

export interface IApplicationState {
    readonly domain: string;
}

export default combineReducers<IApplicationState>({
    domain: (state: string = '') => state,
});
