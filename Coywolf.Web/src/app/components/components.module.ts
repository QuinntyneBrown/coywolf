import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NavComponent } from './nav';
import { SideNavComponent } from './admin';
import { WysiwygComponent } from "./wysiwyg";

const declarables = [
    NavComponent,
    SideNavComponent,
    WysiwygComponent
];

export const providers = [];

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class ComponentsModule { }
