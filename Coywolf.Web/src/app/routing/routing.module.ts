﻿import { Routes, RouterModule } from '@angular/router';

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
    DigitalAssetListPageComponent
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
        path: 'about',
        component: AboutPageComponent
    }
];

export const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate:[AuthenticationGuard]
    }
];

export const RoutingModule = RouterModule.forRoot([...routes]);

export const routedComponents = [
    AboutPageComponent,
    HomePageComponent,

    AdminComponent,

    EditProfessionalServicePageComponent,
    ProfessionalServiceListPageComponent,

    UploadDigitalAssetPageComponent,
    DigitalAssetListPageComponent
];

