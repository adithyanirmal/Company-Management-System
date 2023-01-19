import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home-department',
  templateUrl: './home-department.component.html',
  styleUrls: ['./home-department.component.css']
})
export class HomeDepartmentComponent {

  
  data:any;
  departments:any;
  constructor(private DepartmentService:ServiceService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.getDepartmentData();
  }

  getDepartmentData(){
    this.DepartmentService.getDataD().subscribe(res =>{
      console.log(res);
      this.departments=res;
      this.departments = this.departments.existingPosts;
    })
  }

  deleteData(id:any){
    this.DepartmentService.deleteDataD(id).subscribe(res =>{
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code),JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar: true
      })
      this.getDepartmentData();
    })
  }

}
