import { NgModule } from '@angular/core';

import { DigitalAssetActions } from './digital-asset.actions';
import { PhotoGalleryActions } from './photo-gallery.actions';
import { ProfessionalServiceActions } from './professional-service.actions';

const providers = [
    DigitalAssetActions,
    PhotoGalleryActions,
    ProfessionalServiceActions
];

@NgModule({
    providers: providers
})
export class ActionsModule { }
