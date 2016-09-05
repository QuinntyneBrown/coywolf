import {
    Component,
    forwardRef,
    OnChanges,
    SimpleChanges,
    AfterViewInit,
    NgZone
} from '@angular/core';

import {
    NG_VALUE_ACCESSOR,
    ControlValueAccessor
} from '@angular/forms';

const noop = () => { };

export const TINYMCE_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WysiwygComponent),
    multi: true
};

declare var tinymce;

@Component({
    template: require("./wysiwyg.component.html"),
    styles: [require("./wysiwyg.component.scss")],
    selector: "wysiwyg",
    providers: [TINYMCE_INPUT_CONTROL_VALUE_ACCESSOR] 
})
export class WysiwygComponent implements ControlValueAccessor, AfterViewInit  {

    constructor(private _ngZone: NgZone) { }

    private _value: string = '';

    private onTouchedCallback: () => void = noop;

    private onChangeCallback: (_: any) => void = noop;

    public ngAfterViewInit() {
        var e:any
        tinymce.init({
            selector: 'textarea',
            setup: editor => {
                e = editor;
                editor.on('keyup change', (ed, l) => {
                    this._ngZone.run(() => {
                        this.value = tinymce.activeEditor.getContent();
                    });                    
                });  

                setTimeout(() => { editor.setContent(this.value); }, 0);
            },
            height: 500,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
        });        
    }

    get value(): string { return this._value; };

    set value(value: string) {
        if (value !== this._value) {
            this._value = value;   
            this.onChangeCallback(this._value);         
        }
    }

    writeValue(value: string) {
        if (value !== this._value) {
            this._value = value;
        }
    }

    registerOnChange(callback: { (): void }) {        
        this.onChangeCallback = callback;
    }

    registerOnTouched(callback: { (): void }) {
        this.onTouchedCallback = callback;
    }
}
