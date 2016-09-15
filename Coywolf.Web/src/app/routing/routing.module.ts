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

    // Admin
    AdminComponent,

    ProfessionalServiceEditPageComponent,
    ProfessionalServiceListPageComponent,

    DigitalAssetUploadPageComponent,
    DigitalAssetListPageComponent,

    PhotoGalleryEditPageComponent,
    PhotoGalleryListPageComponent,

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
        component: AboutPageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'services',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: AboutPageComponent
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
                component: ProfessionalServiceEditPageComponent
            },
            {
                path: 'services',
                component: ProfessionalServiceListPageComponent
            },
            {
                path: 'service/create',
                component: ProfessionalServiceEditPageComponent
            },
            {
                path: 'service/edit/:id',
                component: ProfessionalServiceEditPageComponent
            },
            {
                path: 'digitalassets',
                component: DigitalAssetListPageComponent
            },
            {
                path: 'digitalasset/upload',
                component: DigitalAssetUploadPageComponent
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

    LoginPageComponent,

    AdminComponent,

    ProfessionalServiceEditPageComponent,
    ProfessionalServiceListPageComponent,

    DigitalAssetUploadPageComponent,
    DigitalAssetListPageComponent,

    PhotoGalleryListPageComponent,
    PhotoGalleryEditPageComponent
];

