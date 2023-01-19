import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-create-financial',
  templateUrl: './create-financial.component.html',
  styleUrls: ['./create-financial.component.css']
})
export class CreateFinancialComponent {
  
  form:any;
  data:any;
  submitted:any;
  constructor(private FinancialService:ServiceService, private formBuilder:FormBuilder, private toastr:ToastrService,
    private router:Router){}

    createFormE(){
      this.form = this.formBuilder.group({
        fId: ['', Validators.required],
        month: ['', Validators.required],
        tincome: ['', Validators.required],
        toutcome: ['', Validators.required],
        proloss: ['', Validators.required],
        status: ['', Validators.required],
        review: ['', Validators.required],
      })
    }


  ngOnInit(): void {
    this.createFormE();
    
  }
  get f(){
    return this.form.controls;
  }
  insertDataF(){
    this.submitted=true;
    
    if(this.form.invalid){
     return;
    }

    this.FinancialService.insertDataFF(this.form.value).subscribe(res =>{
     this.data = res;
     this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
       timeOut: 1000,
       progressBar: true,
     });
     this.router.navigateByUrl('home-financial');
    });
 }

}
