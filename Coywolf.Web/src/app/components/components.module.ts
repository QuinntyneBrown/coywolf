import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NavComponent } from './nav.component';
import { LoginComponent } from "./login.component";
import { SideNavComponent } from './admin';
import { HtmlTextareaComponent } from "./html-textarea.component";
import {
    ProfessionalServiceEditFormComponent,
    ProfessionalServiceListComponent,
    HtmlContentEditFormComponent,
    HtmlContentListComponent

} from "./admin";
import { PhotoGridComponent } from "./photo-grid.component";
import { PageHeaderComponent } from "./page-header.component";
import { OneColumnLayoutComponent } from "./one-column-layout.component";
import { DigitalAssetUploadComponent } from "./digital-asset-upload.component";

const declarables = [
    LoginComponent,
    NavComponent,
    SideNavComponent,
    HtmlTextareaComponent,
    PageHeaderComponent,
    OneColumnLayoutComponent,
    DigitalAssetUploadComponent,
    PhotoGridComponent,
    
    ProfessionalServiceEditFormComponent,
    ProfessionalServiceListComponent,

    HtmlContentEditFormComponent,
    HtmlContentListComponent
];

export const providers = [];

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class ComponentsModule { }
