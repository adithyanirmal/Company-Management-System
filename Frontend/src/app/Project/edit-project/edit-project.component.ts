import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {

  id: any;
  data: any;
  project: any;
  submitted: any;

  constructor(private ProjectService: ServiceService, private route: ActivatedRoute,
    private toastr: ToastrService, private fb:FormBuilder, private router:Router
  ) { 
    this.project = fb.group(
      {

      }
    )
  }

  get f(){
    return this.project.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getdataPP();
  }

  getdataPP() {
    this.ProjectService.geDataByIdPP(this.id).subscribe(res => {
      this.data = res;
      this.project = this.data.post;
      console.log(this.project)
    })
  }

  updateData() {
    // this.submitted=true;
    
    // if(this.patientchecking.invalid){
    //  return;
    // }
    this.ProjectService.UpdateDataPP(this.id, this.project).subscribe(res =>{
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
        timeOut: 1000,
        progressBar: true,
      });
      this.router.navigateByUrl('home-project');
     });
  }

}
