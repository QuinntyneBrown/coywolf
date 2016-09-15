import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./photo-gallery-list.component.html"),
    styles: [require("./photo-gallery-list.component.scss")],
    selector: "photo-gallery-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryListComponent implements OnInit { 
    ngOnInit() {

    }
}
