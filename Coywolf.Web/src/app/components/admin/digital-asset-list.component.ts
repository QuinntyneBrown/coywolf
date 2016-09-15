import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./digital-asset-list.component.html"),
    styles: [require("./digital-asset-list.component.scss")],
    selector: "digital-asset-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalAssetListComponent implements OnInit { 
    ngOnInit() {

    }
}
