import { Component, ChangeDetectionStrategy, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef } from "@angular/core";

import {
    FormGroup,
    FormControl,
    Validators
} from "@angular/forms";

import { HtmlContent } from "../../models";

@Component({
    template: require("./html-content-edit-form.component.html"),
    styles: [require("./html-content-edit-form.component.scss")],
    selector: "html-content-edit-form",
})
export class HtmlContentEditFormComponent implements AfterViewInit, OnInit  { 

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) { } 

    public get name(): HTMLElement {
        return this._elementRef.nativeElement.querySelector("#name");
    }

    ngOnInit() {
        if (this.htmlContent && this.htmlContent.id)
            this.htmlBody = this.htmlContent.htmlBody;
    }

    ngAfterViewInit() {
        this._renderer.invokeElementMethod(this.name, 'focus', []);

        if (this.htmlContent && this.htmlContent.id) {
            this.form.patchValue({ id: this.htmlContent.id })
            this.form.patchValue({ name: this.htmlContent.name });
        }
    }

    @Input()
    public htmlContent: HtmlContent;

    @Output()
    public onSubmit = new EventEmitter();

    @Output()
    public onCancel = new EventEmitter();

    public form = new FormGroup({
		id: new FormControl("", []),
        name: new FormControl("", [
            Validators.required
        ])
    });

    public htmlBody: string;

    public tryToSubmit() {
        this.onSubmit.emit({
            value: Object.assign({}, this.form.value, { htmlBody: this.htmlBody })
        });
    }
}
