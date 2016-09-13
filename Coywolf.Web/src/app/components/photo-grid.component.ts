//https://github.com/xieranmaya/blog/issues/6

import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

export interface Photo {
    url: string;
}

@Component({
    template: require("./photo-grid.component.html"),
    styles: [require("./photo-grid.component.scss")],
    selector: "photo-grid"    
})
export class PhotoGridComponent  { 
    @Input() public photos: Array<Photo> = [];
}
