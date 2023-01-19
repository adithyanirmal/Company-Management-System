import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  componenetName = "user"

  sum(a:any,b:any){
    return a+b
  }

}
