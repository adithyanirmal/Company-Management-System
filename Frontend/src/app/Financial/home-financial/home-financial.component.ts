import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home-financial',
  templateUrl: './home-financial.component.html',
  styleUrls: ['./home-financial.component.css']
})
export class HomeFinancialComponent {

  data:any;
  financials:any;
  constructor(private financialService:ServiceService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.getFinancialData();
  }

  getFinancialData(){
    this.financialService.getDataFF().subscribe(res =>{
      console.log(res);
      this.financials=res;
      this.financials = this.financials.existingPosts;
    })
  }

  deleteData(id:any){
    this.financialService.deleteDataFF(id).subscribe(res =>{
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code),JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar: true
      })
      this.getFinancialData();
    })
  }



}
