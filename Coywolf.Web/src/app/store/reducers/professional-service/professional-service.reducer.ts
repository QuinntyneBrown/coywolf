import { Action } from "@ngrx/store";
import { ADD_PROFESSIONAL_SERVICE_SUCCESS, GET_PROFESSIONAL_SERVICE_SUCCESS, REMOVE_PROFESSIONAL_SERVICE_SUCCESS } from "../../../constants";
import { initialState } from "../../initial-state";
import { AppState } from "../../app-state";
import { ProfessionalService } from "../../../models";
import { addOrUpdate, pluckOut } from "../../../utilities";

export const professionalServicesReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ADD_PROFESSIONAL_SERVICE_SUCCESS:
            var entities: Array<ProfessionalService> = state.professionalServices;
            var entity: ProfessionalService = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { professionalServices: entities });

        case GET_PROFESSIONAL_SERVICE_SUCCESS:
            var entities: Array<ProfessionalService> = state.professionalServices;
            var newOrExistingProfessionalServices: Array<ProfessionalService> = action.payload;
            for (let i = 0; i < newOrExistingProfessionalServices.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingProfessionalServices[i] });
            }                                    
            return Object.assign({}, state, { professionalServices: entities });

        case REMOVE_PROFESSIONAL_SERVICE_SUCCESS:
            var entities: Array<ProfessionalService> = state.professionalServices;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { professionalServices: entities });

        default:
            return state;
    }
}

