import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // loginForm: any;
email:any;
pass:any;
// submitted:any;
constructor(private router:Router, private toastr:ToastrService, private fb: FormBuilder){

}

// loadForm(){
//   this.loginForm = this.fb.group({
//     email: ['', [Validators.required, Validators.email]],
//     pass: ['', Validators.required],
//   })
// }

ngOnInit(): void {
  // this.loadForm();
}

//   get f(){
//   return this.loginForm.controls;
// }

login(){
  // this.submitted=true;
  // if(this.loginForm.invalid){
  // }
  if(this.email=='admin@gmail.com' && this.pass=='admin123'){
    this.toastr.success('Login Successfully!');
    this.router.navigateByUrl('home');
  }else{
    this.toastr.error('Email or Password Incorrect!!');
  }
}

}
