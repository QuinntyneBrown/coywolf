import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./html-content-editor.component.html"),
    styles: [require("./html-content-editor.component.scss")],
    selector: "html-content-editor",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlContentEditorComponent implements OnInit { 
    ngOnInit() {

    }
}
