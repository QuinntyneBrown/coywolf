import { Routes, RouterModule } from '@angular/router';

import {

    // public 

    AboutPageComponent,
    HomePageComponent,
    NotFoundPageComponent,

    // Admin

    EditProfessionalServicePageComponent,
    ProfessionalServiceListPageComponent
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
    }
];

export const RoutingModule = RouterModule.forRoot([...routes]);

export const routedComponents = [
    AboutPageComponent,
    HomePageComponent,

    EditProfessionalServicePageComponent,
    ProfessionalServiceListPageComponent
];

