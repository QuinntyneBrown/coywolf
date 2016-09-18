import { DigitalAsset, PhotoGallery, ProfessionalService, HtmlContent, Content } from "../models";

export interface AppState {
    photoGalleries: Array<PhotoGallery>;
    professionalServices: Array<ProfessionalService>;
    digitalAssets: Array<DigitalAsset>;
    contents: Array<Content>;
    htmlContents: Array<HtmlContent>;
    currentUser: any;
    isLoggedIn: boolean;
    token: string;
}