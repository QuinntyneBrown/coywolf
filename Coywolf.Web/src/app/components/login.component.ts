import { Component, Output, Input, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    template: require("./login.component.html"),
    styles: [require("./login.component.scss")],
    selector: "login"
})
export class LoginComponent { 
    @Output() public tryToLogin: EventEmitter<any> = new EventEmitter();

    public form = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });
}
