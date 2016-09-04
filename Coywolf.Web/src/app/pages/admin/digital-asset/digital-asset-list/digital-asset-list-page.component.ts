import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./digital-asset-list-page.component.html"),
    styles: [require("./digital-asset-list-page.component.scss")],
    selector: "digital-asset-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalAssetListPageComponent implements OnInit { 
    ngOnInit() {

    }
}
