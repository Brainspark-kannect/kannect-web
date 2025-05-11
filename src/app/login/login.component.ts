import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    subscription: Subscription[] = [];
    username: string = '';
    password: string = '';

    constructor(
        private router: Router,
        private loginService: LoginService
    ) {}

    doLogin() {
        console.log(this.username, this.password);

        this.subscription?.push(
            this.loginService?.doLogin('shreyas', 'hashedpassword1')?.subscribe({
                next: (res: any) => {},
                error: (err: any) => {
                    console.error('Error logging in:', err?.message);
                },
            })
        );
        this.router?.navigateByUrl('/pages');
    }
}
