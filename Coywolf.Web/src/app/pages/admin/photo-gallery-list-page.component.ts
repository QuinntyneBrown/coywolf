import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./photo-gallery-list-page.component.html"),
    styles: [require("./photo-gallery-list-page.component.scss")],
    selector: "h-photo-gallery-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryListPageComponent implements OnInit { 
    ngOnInit() {

    }
}
