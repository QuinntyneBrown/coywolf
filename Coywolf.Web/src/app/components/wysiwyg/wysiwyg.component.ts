import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const TINYMCE_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WysiwygComponent),
    multi: true
};

@Component({
    template: require("./wysiwyg.component.html"),
    styles: [require("./wysiwyg.component.scss")],
    selector: "wysiwyg",
    providers: [TINYMCE_INPUT_CONTROL_VALUE_ACCESSOR] 
})
export class WysiwygComponent {
    private _value: string = '';

    private onTouchedCallback: () => void = noop;

    private onChangeCallback: (_: any) => void = noop;

    get value(): string { return this._value; };

    set value(value: string) {
        if (value !== this._value) {
            this._value = value;
        }
    }

    writeValue(value: string) {
        if (value !== this._value) {
            this._value = value;
        }
    }

    registerOnChange(callback: {():void}) {
        this.onChangeCallback = callback;
    }

    registerOnTouched(callback: { (): void }) {
        this.onTouchedCallback = callback;
    }
}
