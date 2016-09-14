import { Component, ChangeDetectionStrategy, Input, OnInit, ViewEncapsulation } from "@angular/core";

import { AppStore } from "./store";

@Component({
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
    selector: "app",
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    constructor(private _store: AppStore) {

    }

    ngOnInit() {
    
    }
}
