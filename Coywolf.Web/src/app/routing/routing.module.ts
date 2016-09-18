import { Routes, RouterModule } from '@angular/router';

import {
    AuthenticationGuard
} from "./providers";


import {
    // public 
    AboutPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    GalleryPageComponent,
    WhatsNewPageComponent,
    ServicesPageComponent,
    ContactPageComponent,

    // Admin
    AdminComponent,

    ProfessionalServiceEditPageComponent,
    ProfessionalServiceListPageComponent,

    DigitalAssetUploadPageComponent,
    DigitalAssetListPageComponent,

    PhotoGalleryEditPageComponent,
    PhotoGalleryListPageComponent,

    HtmlContentEditPageComponent,
    HtmlContentListPageComponent,

    LoginPageComponent
    
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'gallery',
        component: GalleryPageComponent
    },
    {
        path: 'whats-new',
        component: WhatsNewPageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'services',
        component: ServicesPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];

export const adminRoutes: Routes = [
    {
        path: 'admin',
        pathMatch:'prefix',
        component: AdminComponent,
        canActivate: [AuthenticationGuard],
        children: [
            {
                path: '',
                component: ProfessionalServiceListPageComponent
            },
            {
                path: 'professionalServices',
                component: ProfessionalServiceListPageComponent
            },
            {
                path: 'professionalService/:id',
                component: ProfessionalServiceEditPageComponent
            },
            {
                path: 'professionalService',
                component: ProfessionalServiceEditPageComponent
            },            
            {
                path: 'htmlContents',
                component: HtmlContentListPageComponent
            },
            {
                path: 'htmlContent/:id',
                component: HtmlContentEditPageComponent
            },
            {
                path: 'htmlContent',
                component: HtmlContentEditPageComponent
            },

            {
                path: 'professionalService/:serviceid/digitalasset/upload',
                component: DigitalAssetUploadPageComponent
            },
            {
                path: 'digitalassets',
                component: DigitalAssetListPageComponent
            },
            {
                path: 'photogalleries',
                component: PhotoGalleryListPageComponent
            },
            {
                path: 'photogallery/create',
                component: PhotoGalleryEditPageComponent
            },
            {
                path: 'photogallery/edit/:id',
                component: PhotoGalleryEditPageComponent
            },
            {
                path: 'photogallery/:photogalleryid/digitalasset/upload',
                component: DigitalAssetUploadPageComponent
            }
        ]
    },
];

export const RoutingModule = RouterModule.forRoot([
    ...routes,
    ...adminRoutes
]);

export const routedComponents = [
    AboutPageComponent,
    HomePageComponent,
    GalleryPageComponent,
    WhatsNewPageComponent,
    ServicesPageComponent,
    ContactPageComponent,

    LoginPageComponent,

    AdminComponent,

    ProfessionalServiceEditPageComponent,
    ProfessionalServiceListPageComponent,

    DigitalAssetUploadPageComponent,
    DigitalAssetListPageComponent,

    PhotoGalleryListPageComponent,
    PhotoGalleryEditPageComponent,

    HtmlContentEditPageComponent,
    HtmlContentListPageComponent
];

