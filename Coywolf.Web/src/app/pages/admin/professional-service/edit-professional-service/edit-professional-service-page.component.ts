import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./edit-professional-service-page.component.html"),
    styles: [require("./edit-professional-service-page.component.scss")],
    selector: "edit-professional-service-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfessionalServicePageComponent implements OnInit { 
    ngOnInit() {

    }
}
