import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { DigitalAssetService } from "./digital-asset.service";
import { PhotoGalleryService } from "./photo-gallery.service";
import { ProfessionalServiceService } from "./professional-service.service";

const providers = [
    DigitalAssetService,
    PhotoGalleryService,
    ProfessionalServiceService
];

@NgModule({
    imports: [CommonModule, HttpModule],
    providers: providers
})
export class ServicesModule { }
