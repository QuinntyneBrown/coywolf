import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ViewModelType } from "../models";
import { Observable } from "rxjs";
import { extractData } from "../utilities";

import { apiCofiguration } from "../configuration";

@Injectable()
export class ViewModelService {

    constructor(private _http: Http) { }

    public getByType(options: { type: ViewModelType}) {
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/viewmodel/getbytype?type=${options.type}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get() {
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/viewmodel/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get baseUrl() { return apiCofiguration.baseUrl; }

}