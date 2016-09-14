import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ContentService } from "../services";
import { AppState, AppStore } from "../store";
import { ADD_CONTENT_SUCCESS, GET_CONTENT_SUCCESS, REMOVE_CONTENT_SUCCESS } from "../constants";
import { Observable } from "rxjs";
import { guid } from "../utilities";

@Injectable()
export class ContentActions {
    constructor(private _contentService: ContentService, private _store: AppStore) { }
    
    public get() {                          
        return this._contentService.get()
            .subscribe(contents => {
                this._store.dispatch({
                    type: GET_CONTENT_SUCCESS,
                    payload: contents
                });
                return true;
            });
    }
    
}
