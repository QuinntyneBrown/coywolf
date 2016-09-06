import { Action } from "@ngrx/store";
import { GET_VIEW_MODEL_SUCCESS, GET_VIEW_MODEL_BY_TYPE_SUCCESS } from "../../../constants";
import { initialState } from "../../initial-state";
import { AppState } from "../../app-state";
import { ViewModelType } from "../../../models";
import { addOrUpdate, pluckOut } from "../../../utilities";

export const viewModelsReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {

        case GET_VIEW_MODEL_SUCCESS:
            var entities: Array<any> = state.viewModels;
            var newOrExistingViewModels: Array<any> = action.payload;
            for (let i = 0; i < newOrExistingViewModels.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingViewModels[i] });
            }                                    
            return Object.assign({}, state, { viewModels: entities });

        case GET_VIEW_MODEL_BY_TYPE_SUCCESS:
            var entities: Array<any> = state.viewModels;
            var newOrExistingViewModels: Array<any> = action.payload;
            for (let i = 0; i < newOrExistingViewModels.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingViewModels[i] });
            }
            return Object.assign({}, state, { viewModels: entities });

        default:
            return state;
    }
}

