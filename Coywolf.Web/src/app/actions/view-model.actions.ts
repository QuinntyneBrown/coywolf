import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ViewModelService } from "../services";
import { AppState, AppStore } from "../store";
import { GET_VIEW_MODEL_BY_TYPE_SUCCESS, GET_VIEW_MODEL_SUCCESS } from "../constants";
import { Observable } from "rxjs";
import { guid } from "../utilities";
import { ViewModelType } from "../models";

@Injectable()
export class ViewModelActions {
    constructor(private _viewModelService: ViewModelService, private _store: AppStore) { }

    public get() {                          
        return this._viewModelService.get()
            .subscribe(viewModels => {
                this._store.dispatch({
                    type: GET_VIEW_MODEL_SUCCESS,
                    payload: viewModels
                });
                return true;
            });
    }

    public getByType(options: { type: ViewModelType }) {
        return this._viewModelService.getByType({ type: options.type })
            .subscribe(viewModel => {
                this._store.dispatch({
                    type: GET_VIEW_MODEL_BY_TYPE_SUCCESS,
                    payload: [viewModel]
                });
                return true;
            });
    }
}
