import { Component, OnInit } from '@angular/core'
import * as toastr from 'toastr'
import {Router} from '@angular/router'

@Component({
    selector: 'app-user-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class UserLoginComponent implements OnInit {

    email = ''
    password = ''

    constructor(private router: Router) { }

    ngOnInit() { 

    }
    onLogin(){
        if (this.email.length == 0) {
            toastr.error('Please insert valid email')
        } else if (this.password.length == 0) {
            toastr.error('Please insert valid password')
        } else {
            this.email == sessionStorage['email']
            this.password == sessionStorage['password']
            toastr.success('Welcome')
            this.router.navigate(['/user-output'])
        }
    }

}