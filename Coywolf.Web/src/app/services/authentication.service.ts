import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

import { apiCofiguration } from "../configuration";


@Injectable()
export class AuthenticationService {
    constructor(private _http: Http) { }

    public tryToLogin(options: { username:string, password: string }) {
        return this._http
            .post(`${apiCofiguration.baseUrl}/api/token`, options)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public getCurrentUser() {
        return this._http
            .get(`${apiCofiguration.baseUrl}/user/current`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get baseUrl() { return apiCofiguration.baseUrl; }
}