import {
    Component,
    ChangeDetectionStrategy,
    Input,
    OnInit,
    Output,
    EventEmitter
} from "@angular/core";

import {
    FormGroup,
    FormControl,
    Validators,
    AbstractControl
} from "@angular/forms";


@Component({
    template: require("./professional-service-editor.component.html"),
    styles: [require("./professional-service-editor.component.scss")],
    selector: "professional-service-editor",
})
export class ProfessionalServiceEditorComponent {
    @Output() onSubmit: EventEmitter<any> = new EventEmitter();
    @Input() entity: any;
    public id = this.entity.id;
    public name = new FormControl(this.entity.name);
    public description: string = this.entity.description;
    public submit() {
        this.onSubmit.emit({
            value: {
                name: this.name,
                description: this.description
            }
        });
    }
    
}
