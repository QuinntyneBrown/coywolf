import { Action } from "@ngrx/store";
import { PHOTO_GALLERY_ADD_SUCCESS, PHOTO_GALLERY_GET_SUCCESS, PHOTO_GALLERY_REMOVE_SUCCESS } from "../../constants";
import { initialState } from "../initial-state";
import { AppState } from "../app-state";
import { PhotoGallery } from "../../models";
import { addOrUpdate, pluckOut } from "../../utilities";

export const photoGallerysReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case PHOTO_GALLERY_ADD_SUCCESS:
            var entities: Array<PhotoGallery> = state.photoGallerys;
            var entity: PhotoGallery = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { photoGallerys: entities });

        case PHOTO_GALLERY_GET_SUCCESS:
            var entities: Array<PhotoGallery> = state.photoGallerys;
            var newOrExistingPhotoGallerys: Array<PhotoGallery> = action.payload;
            for (let i = 0; i < newOrExistingPhotoGallerys.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingPhotoGallerys[i] });
            }                                    
            return Object.assign({}, state, { photoGallerys: entities });

        case PHOTO_GALLERY_REMOVE_SUCCESS:
            var entities: Array<PhotoGallery> = state.photoGallerys;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { photoGallerys: entities });

        default:
            return state;
    }
}

