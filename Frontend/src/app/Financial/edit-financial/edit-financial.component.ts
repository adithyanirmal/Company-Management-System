import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit-financial',
  templateUrl: './edit-financial.component.html',
  styleUrls: ['./edit-financial.component.css']
})
export class EditFinancialComponent {

   
  id: any;
  data: any;
  finance: any;
  submitted: any;

  constructor(private FinanceService: ServiceService, private route: ActivatedRoute,
    private toastr: ToastrService, private fb:FormBuilder, private router:Router
  ) { 
    this.finance = fb.group(
      {
      }
    )
  }

  get f(){
    return this.finance.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getdataF();
  }

  getdataF() {
    this.FinanceService.geDataByIdFF(this.id).subscribe(res => {
      this.data = res;
      this.finance = this.data.post;
      console.log(this.finance)
    })
  }

  updateData() {
    // this.submitted=true;
    
    // if(this.patientchecking.invalid){
    //  return;
    // }
    this.FinanceService.UpdateDataFF(this.id, this.finance).subscribe(res =>{
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
        timeOut: 1000,
        progressBar: true,
      });
      this.router.navigateByUrl('home-financial');
     });
  }


}
