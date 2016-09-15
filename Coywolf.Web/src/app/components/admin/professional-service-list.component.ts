import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./professional-service-list.component.html"),
    styles: [require("./professional-service-list.component.scss")],
    selector: "professional-service-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalServiceListComponent implements OnInit { 
    ngOnInit() {

    }
}
