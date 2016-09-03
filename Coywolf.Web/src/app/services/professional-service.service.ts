import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { apiCofiguration } from "../configuration";

@Injectable()
export class ProfessionalServiceService {
    constructor(private _http: Http) {

    }

    public get baseUrl() { return apiCofiguration.baseUrl; }
}