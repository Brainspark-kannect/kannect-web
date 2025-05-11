import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SigninModule } from '../signin/signin.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, FormsModule, SigninModule],
    exports: [LoginComponent],
})
export class LoginModule {}
