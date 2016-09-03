import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { HttpModule } from '@angular/http';

import "./rxjs-extensions";

import { AppComponent } from './app.component';

import { ActionsModule } from "./actions";
import { ComponentsModule } from "./components";
import { ServicesModule } from "./services";
import { StoreModule } from "./store";

import {
    RoutingModule,
    routedComponents,
    AuthenticationGuard,
    ViewModelResolver
} from "./routing";

const declarables = [
    AppComponent,
    ...routedComponents
];

@NgModule({
    imports: [
        ActionsModule,
        ComponentsModule,
        RoutingModule,
        ServicesModule,
        StoreModule,

        BrowserModule,
        HttpModule,
        CommonModule,
        RouterModule        
    ],
    providers: [
        AuthenticationGuard,
        ViewModelResolver
    ],
    declarations: [declarables],
    exports: [declarables],
    bootstrap: [AppComponent]
})
export class AppModule { }

