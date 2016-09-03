import { Action } from "@ngrx/store";
import { ADD_PHOTO_GALLERY_SUCCESS, GET_PHOTO_GALLERY_SUCCESS, REMOVE_PHOTO_GALLERY_SUCCESS } from "../../../constants";
import { initialState } from "../../initial-state";
import { AppState } from "../../app-state";
import { PhotoGallery } from "../../../models";
import { addOrUpdate, pluckOut } from "../../../utilities";

export const photoGallerysReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ADD_PHOTO_GALLERY_SUCCESS:
            var entities: Array<PhotoGallery> = state.photoGalleries;
            var entity: PhotoGallery = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { photoGallerys: entities });

        case GET_PHOTO_GALLERY_SUCCESS:
            var entities: Array<PhotoGallery> = state.photoGalleries;
            var newOrExistingPhotoGalleries: Array<PhotoGallery> = action.payload;
            for (let i = 0; i < newOrExistingPhotoGalleries.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingPhotoGalleries[i] });
            }                                    
            return Object.assign({}, state, { photoGallerys: entities });

        case REMOVE_PHOTO_GALLERY_SUCCESS:
            var entities: Array<PhotoGallery> = state.photoGalleries;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { photoGallerys: entities });

        default:
            return state;
    }
}

