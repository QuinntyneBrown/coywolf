import { Action } from "@ngrx/store";
import { PROFESSIONAL_SERVICE_ADD_SUCCESS, PROFESSIONAL_SERVICE_GET_SUCCESS, PROFESSIONAL_SERVICE_REMOVE_SUCCESS } from "../../constants";
import { initialState } from "../initial-state";
import { AppState } from "../app-state";
import { ProfessionalService } from "../../models";
import { addOrUpdate, pluckOut } from "../../utilities";

export const professionalServicesReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case PROFESSIONAL_SERVICE_ADD_SUCCESS:
            var entities: Array<ProfessionalService> = state.professionalServices;
            var entity: ProfessionalService = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { professionalServices: entities });

        case PROFESSIONAL_SERVICE_GET_SUCCESS:
            var entities: Array<ProfessionalService> = state.professionalServices;
            var newOrExistingProfessionalServices: Array<ProfessionalService> = action.payload;
            for (let i = 0; i < newOrExistingProfessionalServices.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingProfessionalServices[i] });
            }                                    
            return Object.assign({}, state, { professionalServices: entities });

        case PROFESSIONAL_SERVICE_REMOVE_SUCCESS:
            var entities: Array<ProfessionalService> = state.professionalServices;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { professionalServices: entities });

        default:
            return state;
    }
}

