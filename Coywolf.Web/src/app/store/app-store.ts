import { Injectable } from "@angular/core";
import { Store, Action } from "@ngrx/store";
import { AppState } from "./app-state";
import { guid, pluck } from "../utilities";
import { select, SelectSignature } from '@ngrx/core/operator/select';
import { Observable, BehaviorSubject } from "rxjs";
import { PhotoGallery, ProfessionalService, DigitalAsset } from "../models";


@Injectable()
export class AppStore {
    constructor(private _store: Store<AppState>) { }

    public dispatch(action: Action, newGuid?: string): string {
        newGuid = this._registerLastAction(action.type, newGuid);
        this._store.dispatch(action);
        return newGuid;
    }

    private _registerLastAction(actionType: string, newGuid?: string): string {
        newGuid = newGuid || guid();
        this.lastTriggeredAction = actionType;
        this.lastTriggeredActionId = newGuid;
        this.lastTriggeredAction$.next(this.lastTriggeredAction);        
        this.lastTriggeredActionId$.next(this.lastTriggeredActionId);
        return newGuid;
    }

    select: SelectSignature<AppState> = select.bind(this._store);

    public lastTriggeredAction$: BehaviorSubject<string> = new BehaviorSubject<string>(this.lastTriggeredAction);

    public lastTriggeredActionId$: BehaviorSubject<string> = new BehaviorSubject<string>(this.lastTriggeredActionId);

    public lastTriggeredAction: string = null;

    public lastTriggeredActionId: string = null;

    public getState(): AppState {
        let state: AppState;
        this._store.take(1).subscribe(s => state = s);
        return state;
    }

    public get token$(): Observable<string> {
        return this._store.select("token")
            .map((data: { token: string }) => {
                return data.token;
            });
    }

    public digitalAssets$(): Observable<Array<PhotoGallery>> {
        return this._store.select("digitalAssets")
            .map((data: { digitalAssets: Array<PhotoGallery> }) => {
                return data.digitalAssets;
            });
    }

    public digitalAssetById$(id: string): Observable<DigitalAsset> {
        return this._store.select("digitalAssets")
            .map((data: { digitalAssets: Array<DigitalAsset> }) => {
                return pluck({ value: id, items: data.digitalAssets }) as DigitalAsset;
            })
    }
    

    public professionalServices$(): Observable<Array<ProfessionalService>> {
        return this._store.select("professionalServices")
            .map((data: { professionalServices: Array<ProfessionalService> }) => {
                return data.professionalServices;
            });
    }

    public professionalServiceById$(id: string): Observable<ProfessionalService> {
        return this._store.select("professionalServices")
            .map((data: { professionalServices: Array<ProfessionalService> }) => {
                return pluck({ value: id, items: data.professionalServices }) as ProfessionalService;
            })
    }

    public photoGalleries$(): Observable<Array<PhotoGallery>> {
        return this._store.select("photoGalleries")
            .map((data: { photoGalleries: Array<PhotoGallery> }) => {
                return data.photoGalleries;
            });
    }

    public photoGalleryById$(id: string): Observable<PhotoGallery> {
        return this._store.select("photoGalleries")
            .map((data: { photoGalleries: Array<PhotoGallery> }) => {
                return pluck({ value: id, items: data.photoGalleries }) as PhotoGallery;
            })
    }
}

