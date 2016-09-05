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

    public form = new FormGroup({
        name: new FormControl()
    });

    public submit() {
        this.onSubmit.emit({
            value: Object.assign({}, this.form.value, {
                description: this.description
            })
        });
    }
    public description: string;
}
