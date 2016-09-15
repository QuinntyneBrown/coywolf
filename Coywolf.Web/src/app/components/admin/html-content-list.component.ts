import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./html-content-list.component.html"),
    styles: [require("./html-content-list.component.scss")],
    selector: "html-content-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlContentListComponent implements OnInit { 
    ngOnInit() {

    }
}
