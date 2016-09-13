import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NavComponent } from './nav';
import { LoginComponent } from "./login.component";
import { SideNavComponent } from './admin';
import { WysiwygComponent } from "./wysiwyg";
import { ProfessionalServiceEditorComponent } from "./professional-service";
import { PhotoGridComponent } from "./photo-grid.component";

const declarables = [
    LoginComponent,
    NavComponent,
    SideNavComponent,
    WysiwygComponent,

    PhotoGridComponent,

    ProfessionalServiceEditorComponent
];

export const providers = [];

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class ComponentsModule { }
