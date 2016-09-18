import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ProfessionalService } from "../../models";

@Component({
    template: require("./professional-service-list.component.html"),
    styles: [require("./professional-service-list.component.scss")],
    selector: "professional-service-list"
})
export class ProfessionalServiceListComponent {     
    @Input() public entities: Array<ProfessionalService> = [];
    @Output() onDelete: EventEmitter<{ value: ProfessionalService }> = new EventEmitter<{ value: ProfessionalService }>();
    @Output() onSelect: EventEmitter<{ value: ProfessionalService }> = new EventEmitter<{ value: ProfessionalService }>();
    @Output() onEdit: EventEmitter<{ value: ProfessionalService }> = new EventEmitter<{ value: ProfessionalService }>();
}
