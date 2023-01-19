import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent {

  form:any;
  data:any;
  submitted:any;
  constructor(private DepartmentService:ServiceService, private formBuilder:FormBuilder, private toastr:ToastrService,
    private router:Router){}

    createFormD(){
      this.form = this.formBuilder.group({
        dCategory: ['', Validators.required],
        dName: ['', Validators.required],
        dEmail: ['', Validators.required],
        dTeams: ['', Validators.required],
        hName: ['', Validators.required],
        hEmail: ['', Validators.required],
        hNo: ['', Validators.required],
        uDate: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.createFormD();
    
  }
  get f(){
    return this.form.controls;
  }
  insertDataD(){
    this.submitted=true;
    
    if(this.form.invalid){
     return;
    }

    this.DepartmentService.insertDataD(this.form.value).subscribe(res =>{
     this.data = res;
     this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
       timeOut: 1000,
       progressBar: true,
     });
     this.router.navigateByUrl('home-department');
    });
 }

}
