import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { ProfessionalServiceActions } from "../../actions";
import { AppStore } from "../../store";
import { Router } from "@angular/router";   

@Component({
    template: require("./professional-service-list-page.component.html"),
    styles: [require("./professional-service-list-page.component.scss")],
    selector: "professional-service-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalServiceListPageComponent implements OnInit {
    constructor(private _professionalServiceActions: ProfessionalServiceActions, private _store: AppStore, private _router:Router) { }

    ngOnInit() {
        this._professionalServiceActions.get(); 
    }
    
}
