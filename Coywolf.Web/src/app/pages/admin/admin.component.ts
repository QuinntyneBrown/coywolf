/// <reference path="../../components/admin/side-nav/side-nav.component.ts" />
import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { SideNavComponent } from "../../components/admin/side-nav";

@Component({
    template: require("./admin.component.html"),
    styles: [require("./admin.component.scss")],
    selector: "admin",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit { 
    ngOnInit() {

    }
}
