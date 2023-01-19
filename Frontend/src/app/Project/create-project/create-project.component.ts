import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {

  form:any;
  data:any;
  submitted:any;
  constructor(private ProjectService:ServiceService, private formBuilder:FormBuilder, private toastr:ToastrService,
    private router:Router){}

    createFormPP(){
      this.form = this.formBuilder.group({
        cName: ['', Validators.required],
        email: ['', Validators.required],
        contactNo: ['', Validators.required],
        pLevel: ['', Validators.required],
        projectId: ['', Validators.required],
        sDate: ['', Validators.required],
        eDate: ['', Validators.required],
        dept: ['', Validators.required],
        description: ['', Validators.required],
        remarks: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.createFormPP();
    
  }
  get f(){
    return this.form.controls;
  }
  insertDataPP(){
    this.submitted=true;
    
    if(this.form.invalid){
     return;
    }

    this.ProjectService.insertDataPP(this.form.value).subscribe(res =>{
     this.data = res;
     this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
       timeOut: 1000,
       progressBar: true,
     });
     this.router.navigateByUrl('home-project');
    });
 }

}
