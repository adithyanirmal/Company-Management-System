import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient:HttpClient) { }

  getDataD(){
    return this.httpclient.get('http://localhost:5000/departments')
  }

  insertDataD(data:any){
    return this.httpclient.post('http://localhost:5000/departments/save', data)
  }


  geDataByIdD(id:any){
    return this.httpclient.get('http://localhost:5000/departments/'+id)
  }


  deleteDataD(id:any){
    return this.httpclient.delete('http://localhost:5000/departments/delete/'+id)
  }

  UpdateDataD(id:any, data:any){
    return this.httpclient.put('http://localhost:5000/departments/update/'+id, data)
  }

  //.........................//
  getDataEE(){
    return this.httpclient.get('http://localhost:5000/employee')
  }

  insertDataEE(data:any){
    return this.httpclient.post('http://localhost:5000/employee/save', data)
  }


  geDataByIdEE(id:any){
    return this.httpclient.get('http://localhost:5000/employee/'+id)
  }


  deleteDataEE(id:any){
    return this.httpclient.delete('http://localhost:5000/employee/delete/'+id)
  }

  UpdateDataEE(id:any, data:any){
    return this.httpclient.put('http://localhost:5000/employee/update/'+id, data)
  }
  

  //.........................//
  getDataPP(){
    return this.httpclient.get('http://localhost:5000/projects')
  }

  insertDataPP(data:any){
    return this.httpclient.post('http://localhost:5000/projects/save', data)
  }


  geDataByIdPP(id:any){
    return this.httpclient.get('http://localhost:5000/projects/'+id)
  }


  deleteDataPP(id:any){
    return this.httpclient.delete('http://localhost:5000/projects/delete/'+id)
  }

  UpdateDataPP(id:any, data:any){
    return this.httpclient.put('http://localhost:5000/projects/update/'+id, data)
  }

  //.......................//
  getDataFF(){
    return this.httpclient.get('http://localhost:5000/financial')
  }

  insertDataFF(data:any){
    return this.httpclient.post('http://localhost:5000/financial/save', data)
  }


  geDataByIdFF(id:any){
    return this.httpclient.get('http://localhost:5000/financial/'+id)
  }


  deleteDataFF(id:any){
    return this.httpclient.delete('http://localhost:5000/financial/delete/'+id)
  }

  UpdateDataFF(id:any, data:any){
    return this.httpclient.put('http://localhost:5000/financial/update/'+id, data)
  }
}
