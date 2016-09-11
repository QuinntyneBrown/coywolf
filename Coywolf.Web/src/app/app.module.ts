import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import "./rxjs-extensions";

import { AppComponent } from './app.component';

import { ActionsModule } from "./actions";
import { ComponentsModule } from "./components";
import { ServicesModule } from "./services";
import { HelpersModule } from "./helpers";
import { StoreModule } from "./store";

import {
    RoutingModule,
    routedComponents,
    AuthenticationGuard,
    LoginRedirectService
} from "./routing";

const declarables = [
    AppComponent,
    ...routedComponents
];

@NgModule({
    imports: [
        ActionsModule,
        ComponentsModule,
        HelpersModule,
        RoutingModule,
        ServicesModule,
        StoreModule,

        BrowserModule,
        HttpModule,
        CommonModule,
        FormsModule,
        RouterModule        
    ],
    providers: [
        AuthenticationGuard,
        LoginRedirectService
    ],
    declarations: [declarables],
    exports: [declarables],
    bootstrap: [AppComponent]
})
export class AppModule { }

