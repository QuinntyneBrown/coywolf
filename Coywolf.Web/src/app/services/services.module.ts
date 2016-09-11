import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { AuthenticationService } from "./authentication.service";
import { DigitalAssetService } from "./digital-asset.service";
import { PhotoGalleryService } from "./photo-gallery.service";
import { ProfessionalServiceService } from "./professional-service.service";
import { ViewModelService } from "./view-model.service";

const providers = [
    AuthenticationService,
    DigitalAssetService,
    PhotoGalleryService,
    ProfessionalServiceService,
    ViewModelService
];

@NgModule({
    imports: [CommonModule, HttpModule],
    providers: providers
})
export class ServicesModule { }
