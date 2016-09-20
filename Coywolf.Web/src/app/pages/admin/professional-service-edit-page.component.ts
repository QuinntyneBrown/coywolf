import { Component, Input, OnInit } from "@angular/core";
import { ProfessionalServiceActions } from "../../actions";
import { Router, ActivatedRoute } from "@angular/router";
import { AppStore } from "../../store";

@Component({
    template: require("./professional-service-edit-page.component.html"),
    styles: [require("./professional-service-edit-page.component.scss")],
    selector: "professional-service-edit-page"
})
export class ProfessionalServiceEditPageComponent { 
    constructor(private _professionalServiceActions: ProfessionalServiceActions, 
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _store: AppStore
    ) { }

    ngOnInit() {
        this._professionalServiceActions.getById({ id: this._activatedRoute.snapshot.params["id"] });
    }

    public get entity$() {
        return this._store.professionalServiceById$(this._activatedRoute.snapshot.params["id"]);
    }

    public onCancel() {
        setTimeout(() => { this._router.navigate(["/admin/professionalServices"]); }, 0);
    }

    public onSubmit($event: any) {
        this._professionalServiceActions.add({
            id: $event.value.id,
            name: $event.value.name,
            description: $event.value.description
        });

        setTimeout(() => { this._router.navigate(["/admin/professionalServices"]); }, 0);
        
    }
}
