import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ProfessionalService } from "../models";
import { Observable } from "rxjs";
import { extractData } from "../utilities";
import { OAuthHelper } from "../helpers";

import { apiCofiguration } from "../configuration";

@Injectable()
export class ProfessionalServiceService {
    constructor(private _http: Http, private _oauthHelper: OAuthHelper) { }

    public add(entity: ProfessionalService) {
        alert("works?");
        return this._http
            .post(`${apiCofiguration.baseUrl}/api/professionalservice/add`, entity, { headers: this._oauthHelper.getOAuthHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get() {
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/professionalservice/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public getById(options: { id: number }) {
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/professionalservice/getById?id=${options.id}`, { headers: this._oauthHelper.getOAuthHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public remove(options: { id: number }) {
        return this._http
            .delete(`${apiCofiguration.baseUrl}/api/professionalservice/remove?id=${options.id}`, { headers: this._oauthHelper.getOAuthHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }
    public get baseUrl() { return apiCofiguration.baseUrl; }
}