import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.css']
})
export class HomeProjectComponent {

  data:any;
  projects:any;
  constructor(private ProjectService:ServiceService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.getProjectData();
  }

  getProjectData(){
    this.ProjectService.getDataPP().subscribe(res =>{
      console.log(res);
      this.projects=res;
      this.projects = this.projects.existingPosts;
    })
  }

  deleteData(id:any){
    this.ProjectService.deleteDataPP(id).subscribe(res =>{
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code),JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar: true
      })
      this.getProjectData();
    })
  }

}
