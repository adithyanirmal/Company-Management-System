import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent {

  id: any;
  data: any;
  department: any;
  submitted: any;

  constructor(private departmentService: ServiceService, private route: ActivatedRoute,
    private toastr: ToastrService, private fb:FormBuilder, private router:Router
  ) { 
    this.department = fb.group(
      {
        dCategory: '',
        dName: '',
        dEmail: '',
        dTeams: '', 
        hName:'', 
        hEmail: '', 
        hNo: '', 
        uDate: '', 
      }
    )
  }

  get f(){
    return this.department.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getdataD();
  }

  getdataD() {
    this.departmentService.geDataByIdD(this.id).subscribe(res => {
      this.data = res;
      this.department = this.data.post;
      console.log(this.department)
    })
  }

  updateData() {
    // this.submitted=true;
    
    // if(this.patientchecking.invalid){
    //  return;
    // }
    this.departmentService.UpdateDataD(this.id, this.department).subscribe(res =>{
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
        timeOut: 1000,
        progressBar: true,
      });
      this.router.navigateByUrl('home-department');
     });
  }

}
