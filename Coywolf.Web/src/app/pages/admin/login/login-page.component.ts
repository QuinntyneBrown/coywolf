import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationActions } from "../../../actions";
import { AppStore } from "../../../store";
import { LoginRedirectService } from "../../../routing";

@Component({
    template: require("./login-page.component.html"),
    styles: [require("./login-page.component.scss")],
    selector: "login-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent { 
    constructor(
        private _authenticationActions: AuthenticationActions,
        private _loginRedirectService:  LoginRedirectService,
        private _store: AppStore,
        private _router: Router
    ) {
        _store.currentUser$.subscribe(currentUser => {
            if (currentUser != null)
                this._router.navigate([this._loginRedirectService.lastPath]);
        });
    }

    public tryToLogin($event: { username:string, password: string }) {
        this._authenticationActions.tryToLogin({
            username: $event.username,
            password: $event.password
        });
    }
}
