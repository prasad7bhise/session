import { Component, OnInit } from '@angular/core'
import * as toastr from 'toastr'
import {Router} from '@angular/router'

@Component({
    selector: 'app-user-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class UserRegisterComponent implements OnInit {

    firstname = ''
    lastname = ''
    email = ''
    genders = ['male','femail','other']
    gender = ''
    mobile = ''
    password = ''
    city = ''
    address = ''
    image: any
    file: any

    constructor(private router: Router) { }

    ngOnInit() { 
    }
    
    onSelectImage(event) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader()
    
          reader.readAsDataURL(event.target.files[0]) // read file as data url
    
          reader.onload = (event: any) => { // called once readAsDataURL is completed
            this.image = event.target.result
          }
        }
      }

    onSelectFile(event) {
        this.file = event.target.files[0]
        console.log(this.file)
    }

    onSave() {
        if (this.firstname.length == 0) {
            toastr.error('Please enter valid firstname')
        } else if (this.lastname.length == 0) {
            toastr.error('Please enter valid lastname')
        } else if (this.email.length == 0) {
            toastr.error('Please enter valid email')
        } else if (this.mobile.length > 11) {
            toastr.error('Please enter valid mobile number')
        } else {
            sessionStorage['fname'] = [this.firstname]
            sessionStorage['lname'] = [this.lastname]
            sessionStorage['email'] = [this.email]
            sessionStorage['gender'] = [this.gender]
            sessionStorage['mobile'] = [this.mobile]
            sessionStorage['password'] = [this.password]
            sessionStorage['city'] = [this.city]
            sessionStorage['address'] = [this.address]
            sessionStorage['image'] = [this.image]
            sessionStorage['file'] = [this.file.name]
            toastr.success('Thanks for registration')
            this.router.navigate(['/user-output'])
        }
    }
    
}