import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent {

  
  data:any;
  employees:any;
  constructor(private EmployeeService:ServiceService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData(){
    this.EmployeeService.getDataEE().subscribe(res =>{
      console.log(res);
      this.employees=res;
      this.employees = this.employees.existingPosts;
    })
  }

  deleteData(id:any){
    this.EmployeeService.deleteDataEE(id).subscribe(res =>{
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code),JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar: true
      })
      this.getEmployeeData();
    })
  }


}
