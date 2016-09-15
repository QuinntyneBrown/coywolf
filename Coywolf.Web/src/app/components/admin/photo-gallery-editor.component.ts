import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./photo-gallery-editor.component.html"),
    styles: [require("./photo-gallery-editor.component.scss")],
    selector: "photo-gallery-editor",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryEditorComponent implements OnInit { 
    ngOnInit() {

    }
}
