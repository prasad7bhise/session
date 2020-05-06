import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import * as toastr from 'toastr'

@Component({
    selector: 'app-user-output',
    templateUrl: 'output.component.html',
    styleUrls: ['output.component.css']
})
export class UserOutputComponent implements OnInit {
    fname
    lname
    email
    gender
    mobile
    city
    address
    image: any
    file: any
    constructor(private router: Router) { }

    ngOnInit() { 

        this.fname = sessionStorage['fname']
        this.lname = sessionStorage['lname']
        this.email = sessionStorage['email']
        this.gender = sessionStorage['gender']
        this.mobile = sessionStorage['mobile']
        this.city = sessionStorage['city']
        this.address = sessionStorage['address']
        this.image = sessionStorage['image']
        this.file = sessionStorage['file']
    }

    onLogout() {
        sessionStorage.removeItem('fname')
        sessionStorage.removeItem('lname')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('gender')
        sessionStorage.removeItem('mobile')
        sessionStorage.removeItem('password')
        sessionStorage.removeItem('city')
        sessionStorage.removeItem('address')
        sessionStorage.removeItem('image')
        sessionStorage.removeItem('file')
        toastr.success('Successfully logout')
        this.router.navigate(['user-login'])
    }

}