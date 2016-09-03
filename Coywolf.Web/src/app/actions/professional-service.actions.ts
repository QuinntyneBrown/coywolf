import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ProfessionalServiceService } from "../services";
import { AppState, AppStore } from "../store";
import { ADD_PROFESSIONAL_SERVICE_SUCCESS, GET_PROFESSIONAL_SERVICE_SUCCESS, REMOVE_PROFESSIONAL_SERVICE_SUCCESS } from "../constants";
import { ProfessionalService } from "../models";
import { Observable } from "rxjs";
import { guid } from "../utilities";

@Injectable()
export class ProfessionalServiceActions {
    constructor(private _professionalServiceService: ProfessionalServiceService, private _store: AppStore) { }

    public add(professionalService: ProfessionalService) {
        const newGuid = guid();
        this._professionalServiceService.add(professionalService)
            .subscribe(book => {
                this._store.dispatch({
                    type: ADD_PROFESSIONAL_SERVICE_SUCCESS,
                    payload: professionalService
                },newGuid);                
            });
        return newGuid;
    }

    public get() {                          
        return this._professionalServiceService.get()
            .subscribe(professionalServices => {
                this._store.dispatch({
                    type: GET_PROFESSIONAL_SERVICE_SUCCESS,
                    payload: professionalServices
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._professionalServiceService.remove({ id: options.id })
            .subscribe(professionalService => {
                this._store.dispatch({
                    type: REMOVE_PROFESSIONAL_SERVICE_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }

    public getById(options: { id: number }) {
        return this._professionalServiceService.getById({ id: options.id })
            .subscribe(professionalService => {
                this._store.dispatch({
                    type: GET_PROFESSIONAL_SERVICE_SUCCESS,
                    payload: [professionalService]
                });
                return true;
            });
    }
}
