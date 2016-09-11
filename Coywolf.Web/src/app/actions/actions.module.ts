import { NgModule } from '@angular/core';

import { AuthenticationActions } from "./authentication.actions";
import { DigitalAssetActions } from './digital-asset.actions';
import { PhotoGalleryActions } from './photo-gallery.actions';
import { ProfessionalServiceActions } from './professional-service.actions';

const providers = [
    AuthenticationActions,
    DigitalAssetActions,
    PhotoGalleryActions,
    ProfessionalServiceActions
];

@NgModule({
    providers: providers
})
export class ActionsModule { }
