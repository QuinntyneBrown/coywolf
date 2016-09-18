import { NgModule } from '@angular/core';
import * as ngrxStore from '@ngrx/store';
import { compose } from "@ngrx/core/compose";
import { localStorageSync } from "ngrx-store-localstorage";
import {
    digitalAssetsReducer,
    photoGallerysReducer,
    professionalServicesReducer,
    currentUserReducer,
    tokenReducer
} from "./reducers";

import { htmlContentsReducer } from "./html-content.reducer";

import { AppStore } from "./app-store";
import { initialState } from "./initial-state";

const providers = [
    AppStore
];

@NgModule({
    imports: [
        ngrxStore.StoreModule.provideStore(
            {
                digitalAssets: digitalAssetsReducer,
                photoGalleries: photoGallerysReducer,
                professionalServices: professionalServicesReducer,
                htmlContents: htmlContentsReducer,
                currentUser: currentUserReducer,
                token: tokenReducer
            },
            [initialState]
        )],
    providers: providers
})
export class StoreModule { }
