import { Component, Input, OnInit } from "@angular/core";
import { HtmlContentActions } from "../../actions";
import { Router, ActivatedRoute } from "@angular/router";
import { AppStore } from "../../store";

@Component({
    template: require("./html-content-edit-page.component.html"),
    styles: [require("./html-content-edit-page.component.scss")],
    selector: "html-content-edit-page"
})
export class HtmlContentEditPageComponent { 
    constructor(private _htmlContentActions: HtmlContentActions, 
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _store: AppStore
    ) { }

    ngOnInit() {
        this._htmlContentActions.getById({ id: this._activatedRoute.snapshot.params["id"] });
    }

    public get entity$() {
        return this._store.htmlContentById$(this._activatedRoute.snapshot.params["id"]);
    }

    public onSubmit($event: any) {
        this._htmlContentActions.add({
            id: $event.value.id,
            name: $event.value.name
        });

        setTimeout(() => { this._router.navigate(["/admin/htmlContents"]); }, 0);
        
    }
}
