import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { PhotoGalleryService } from "../services";
import { AppState, AppStore } from "../store";
import { ADD_PHOTO_GALLERY_SUCCESS, GET_PHOTO_GALLERY_SUCCESS, REMOVE_PHOTO_GALLERY_SUCCESS } from "../constants";
import { PhotoGallery } from "../models";
import { Observable } from "rxjs";
import { guid } from "../utilities";

@Injectable()
export class PhotoGalleryActions {
    constructor(private _photoGalleryService: PhotoGalleryService, private _store: AppStore) { }

    public add(photoGallery: PhotoGallery) {
        const newGuid = guid();
        this._photoGalleryService.add(photoGallery)
            .subscribe(book => {
                this._store.dispatch({
                    type: ADD_PHOTO_GALLERY_SUCCESS,
                    payload: photoGallery
                },newGuid);                
            });
        return newGuid;
    }

    public get() {                          
        return this._photoGalleryService.get()
            .subscribe(photoGallerys => {
                this._store.dispatch({
                    type: GET_PHOTO_GALLERY_SUCCESS,
                    payload: photoGallerys
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._photoGalleryService.remove({ id: options.id })
            .subscribe(photoGallery => {
                this._store.dispatch({
                    type: REMOVE_PHOTO_GALLERY_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }

    public getById(options: { id: number }) {
        return this._photoGalleryService.getById({ id: options.id })
            .subscribe(photoGallery => {
                this._store.dispatch({
                    type: GET_PHOTO_GALLERY_SUCCESS,
                    payload: [photoGallery]
                });
                return true;
            });
    }
}
