import { AppState } from "./app-state";
import { LocalStorageService } from "../services";

export const initialState: AppState = {
    professionalServices: [],
    photoGalleries: [],
    contents: [],
    htmlContents:[],
    digitalAssets: [],
    currentUser: null,
    isLoggedIn: false,
    token: LocalStorageService.get({ name: "accessToken" })
};