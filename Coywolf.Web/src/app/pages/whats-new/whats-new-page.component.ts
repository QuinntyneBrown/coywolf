import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./whats-new-page.component.html"),
    styles: [require("./whats-new-page.component.scss")],
    selector: "h-whats-new-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsNewPageComponent implements OnInit { 
    ngOnInit() {

    }
}
