import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./photo-gallery-edit-page.component.html"),
    styles: [require("./photo-gallery-edit-page.component.scss")],
    selector: "edit-photo-gallery-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryEditPageComponent implements OnInit { 
    ngOnInit() {

    }
}
