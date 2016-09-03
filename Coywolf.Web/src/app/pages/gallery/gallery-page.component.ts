import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./gallery-page.component.html"),
    styles: [require("./gallery-page.component.scss")],
    selector: "h-gallery-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryPageComponent implements OnInit { 
    ngOnInit() {

    }
}
