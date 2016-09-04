import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./upload-digital-asset-page.component.html"),
    styles: [require("./upload-digital-asset-page.component.scss")],
    selector: "h-upload-digital-asset-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadDigitalAssetPageComponent implements OnInit { 
    ngOnInit() {

    }
}
