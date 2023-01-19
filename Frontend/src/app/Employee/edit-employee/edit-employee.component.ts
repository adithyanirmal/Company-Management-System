import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  
  id: any;
  data: any;
  employee: any;
  submitted: any;

  constructor(private EmployeeService: ServiceService, private route: ActivatedRoute,
    private toastr: ToastrService, private fb:FormBuilder, private router:Router
  ) { 
    this.employee = fb.group(
      {
      }
    )
  }

  get f(){
    return this.employee.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getdataEE();
  }

  getdataEE() {
    this.EmployeeService.geDataByIdEE(this.id).subscribe(res => {
      this.data = res;
      this.employee = this.data.post;
      console.log(this.employee)
    })
  }

  updateData() {
    // this.submitted=true;
    
    // if(this.patientchecking.invalid){
    //  return;
    // }
    this.EmployeeService.UpdateDataEE(this.id, this.employee).subscribe(res =>{
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
        timeOut: 1000,
        progressBar: true,
      });
      this.router.navigateByUrl('home-employee');
     });
  }

}
