import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./edit-photo-gallery-page.component.html"),
    styles: [require("./edit-photo-gallery-page.component.scss")],
    selector: "h-edit-photo-gallery-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPhotoGalleryPageComponent implements OnInit { 
    ngOnInit() {

    }
}
