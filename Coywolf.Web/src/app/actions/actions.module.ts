import { NgModule } from '@angular/core';

import { AuthenticationActions } from "./authentication.actions";
import { DigitalAssetActions } from './digital-asset.actions';
import { PhotoGalleryActions } from './photo-gallery.actions';
import { ProfessionalServiceActions } from './professional-service.actions';
import { HtmlContentActions } from "./html-content.actions";

const providers = [
    AuthenticationActions,
    DigitalAssetActions,
    PhotoGalleryActions,
    ProfessionalServiceActions,
    HtmlContentActions
];

@NgModule({
    providers: providers
})
export class ActionsModule { }
