import { DigitalAsset, PhotoGallery, ProfessionalService } from "../models";

export interface AppState {
    photoGalleries: Array<PhotoGallery>;
    professionalServices: Array<PhotoGallery>;
    digitalAssets: Array<DigitalAsset>;
    viewModels: Array<any>;
    currentUser: any;
    isLoggedIn: boolean;
    token: string;
}