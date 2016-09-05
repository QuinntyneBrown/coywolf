import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { ProfessionalService } from "../../../../models";
import { ActivatedRoute, Router } from "@angular/router";
import { ProfessionalServiceActions } from "../../../../actions";
import { AppStore } from "../../../../store";
import { pluck } from "../../../../utilities";
import { Observable } from "rxjs";

@Component({
    template: require("./edit-professional-service-page.component.html"),
    styles: [require("./edit-professional-service-page.component.scss")],
    selector: "edit-professional-service-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfessionalServicePageComponent implements OnInit { 

    constructor(
        private _store: AppStore,
        private _activatedRoute: ActivatedRoute,
        private _professionalServiceActions: ProfessionalServiceActions,
        private _router: Router
    ) { }

    ngOnInit() {
        if (this._entityId) {
            this._professionalServiceActions.getById({
                id: this._entityId
            });
        }

        this._store.lastTriggeredActionId$
            .subscribe(id => {
                if (this.addOrUpdateId && id == this.addOrUpdateId) {
                    this._router.navigate(["/services"]);
                }
            });
    }

    public onSubmit(options: { value: ProfessionalService }) {
        this.addOrUpdateId = this._professionalServiceActions.add(options.value);
    }

    public get entity$(): Observable<ProfessionalService> {
        return this._store.professionalServiceById$(this._entityId);
    };

    public get _entityId() { return this._activatedRoute.snapshot.params["id"]; }

    public addOrUpdateId: string;

}
