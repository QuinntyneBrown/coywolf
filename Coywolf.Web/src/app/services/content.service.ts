import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { extractData } from "../utilities";

import { apiCofiguration } from "../configuration";

@Injectable()
export class ContentService {
    constructor(private _http: Http) { }
    
    public get() {
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/content/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get baseUrl() { return apiCofiguration.baseUrl; }

}
