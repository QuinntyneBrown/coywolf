import { Action } from "@ngrx/store";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../../constants";
import { initialState } from "../initial-state";
import { AppState } from "../app-state";

export const tokenReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return Object.assign({}, state, { token: action.payload });

        case USER_LOGGED_OUT:
            return Object.assign({}, state, { token: null });

        default:
            return state;
    }
}