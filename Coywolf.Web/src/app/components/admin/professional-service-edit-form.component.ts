import { Component, ChangeDetectionStrategy, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef } from "@angular/core";

import {
    FormGroup,
    FormControl,
    Validators
} from "@angular/forms";

import { ProfessionalService } from "../../models";

@Component({
    template: require("./professional-service-edit-form.component.html"),
    styles: [require("./professional-service-edit-form.component.scss")],
    selector: "professional-service-edit-form",
})
export class ProfessionalServiceEditFormComponent implements AfterViewInit, OnInit  { 

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) { } 

    public description: string;

    public get name(): HTMLElement {
        return this._elementRef.nativeElement.querySelector("#name");
    }

    ngOnInit() {
        if (this.professionalService && this.professionalService.id)
            this.description = this.professionalService.description;
    }

    ngAfterViewInit() {
        this._renderer.invokeElementMethod(this.name, 'focus', []);

        if (this.professionalService && this.professionalService.id) {
            this.form.patchValue({ id: this.professionalService.id })
            this.form.patchValue({ name: this.professionalService.name });            
        }
    }
	    
    @Input() public professionalService: ProfessionalService;
    @Output() public onSubmit = new EventEmitter();
    public form = new FormGroup({
        id: new FormControl("", []),
        name: new FormControl("", [
            Validators.required
        ])
    });

    public tryToSubmit() {
        this.onSubmit.emit({
            value: Object.assign({}, this.form.value, { description: this.description })
        });
    }
}
