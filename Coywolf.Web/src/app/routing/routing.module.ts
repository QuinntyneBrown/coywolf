import { Routes, RouterModule } from '@angular/router';

import {
    AuthenticationGuard
} from "./providers";


import {
    // public 
    AboutPageComponent,
    HomePageComponent,
    NotFoundPageComponent,

    // Admin
    AdminComponent,

    EditProfessionalServicePageComponent,
    ProfessionalServiceListPageComponent,

    UploadDigitalAssetPageComponent,
    DigitalAssetListPageComponent,

    EditPhotoGalleryPageComponent,
    PhotoGalleryListPageComponent
    
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'gallery',
        component: AboutPageComponent
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
                path: 'service/create',
                component: EditProfessionalServicePageComponent
            },
            {
                path: 'service/edit/:id',
                component: EditProfessionalServicePageComponent
            },
            {
                path: 'digitalassets',
                component: DigitalAssetListPageComponent
            },
            {
                path: 'digitalasset/upload',
                component: UploadDigitalAssetPageComponent
            },
            {
                path: 'photogalleries',
                component: PhotoGalleryListPageComponent
            },
            {
                path: 'photogallery/create',
                component: EditPhotoGalleryPageComponent
            },
            {
                path: 'photogallery/edit/:id',
                component: EditPhotoGalleryPageComponent
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

    AdminComponent,

    EditProfessionalServicePageComponent,
    ProfessionalServiceListPageComponent,

    UploadDigitalAssetPageComponent,
    DigitalAssetListPageComponent,

    PhotoGalleryListPageComponent,
    EditPhotoGalleryPageComponent
];

