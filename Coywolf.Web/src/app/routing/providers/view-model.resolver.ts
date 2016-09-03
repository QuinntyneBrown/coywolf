import { Injectable } from "@angular/core";
import { AppStore } from "../../store";

@Injectable()
export class ViewModelResolver {
    constructor(private _store: AppStore) {

    }
}