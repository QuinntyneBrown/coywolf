import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { OAuthHelper } from "../helpers";
import { formEncode, extractData } from "../utilities";
import { LocalStorageService } from "./local-storage.service";

import { apiCofiguration } from "../configuration";

@Injectable()
export class AuthenticationService {
    constructor(private _http: Http, private _oauthHelper: OAuthHelper) { }

    public tryToLogin(options: { username: string, password: string }) {
        Object.assign(options, { grant_type: "password" });
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");        
        return this._http
            .post(`${apiCofiguration.baseUrl}/api/user/token`, formEncode(options), { headers: headers })
            .map(response => {
                var accessToken = response.json()["access_token"];
                LocalStorageService.put({
                    name: "accessToken", value: accessToken
                });
                return accessToken;
            })
            .catch(err => {            
                return Observable.of(false);
            });
    }

    public getCurrentUser() {
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/user/current`, { headers: this._oauthHelper.getOAuthHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get baseUrl() { return apiCofiguration.baseUrl; }
}