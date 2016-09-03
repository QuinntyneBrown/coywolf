import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./professional-service-list-page.component.html"),
    styles: [require("./professional-service-list-page.component.scss")],
    selector: "professional-service-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalServiceListPageComponent implements OnInit { 
    ngOnInit() {

    }
}
