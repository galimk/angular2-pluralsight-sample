import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {userRoutes} from './user.routes';
import {ProfileComponent} from './profile/ProfileComponent';
import {LoginComponent} from './login/LoginComponent';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [ProfileComponent, LoginComponent],
    providers: [],
    bootstrap: []
})
export class UserModule {

}