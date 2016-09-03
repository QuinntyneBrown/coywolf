import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./services-page.component.html"),
    styles: [require("./services-page.component.scss")],
    selector: "h-services-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesPageComponent implements OnInit { 
    ngOnInit() {

    }
}
