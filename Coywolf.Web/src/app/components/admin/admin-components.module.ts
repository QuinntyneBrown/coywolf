﻿import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const declarables = [

];

const providers = [];

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class AdminComponentsModule { }
