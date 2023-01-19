import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  form:any;
  data:any;
  submitted:any;
  constructor(private EmployeeService:ServiceService, private formBuilder:FormBuilder, private toastr:ToastrService,
    private router:Router){}

    createFormE(){
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        nic: ['', Validators.required],
        gender: ['', Validators.required],
        contactNo: ['', Validators.required],
        email: ['', Validators.required],
        empId: ['', Validators.required],
        joinDate: ['', Validators.required],
        dueDate: ['', Validators.required],
        dept: ['', Validators.required],
        designation: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.createFormE();
    
  }
  get f(){
    return this.form.controls;
  }
  insertDataE(){
    this.submitted=true;
    
    if(this.form.invalid){
     return;
    }

    this.EmployeeService.insertDataEE(this.form.value).subscribe(res =>{
     this.data = res;
     this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
       timeOut: 1000,
       progressBar: true,
     });
     this.router.navigateByUrl('home-employee');
    });
 }

}
