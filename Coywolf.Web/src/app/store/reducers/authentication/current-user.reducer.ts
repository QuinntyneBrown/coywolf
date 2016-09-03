import { Action } from "@ngrx/store";
import { GET_CURRENT_USER_SUCCESS, USER_LOGGED_OUT } from "../../../constants";
import { initialState } from "../../initial-state";
import { AppState } from "../../app-state";

export const currentUserReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case GET_CURRENT_USER_SUCCESS:
            return Object.assign({}, state, { currentUser: action.payload });

        case USER_LOGGED_OUT:
            return Object.assign({}, state, { currentUser: null });

        default:
            return state;
    }
}