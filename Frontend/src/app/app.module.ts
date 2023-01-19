import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Login/login/login.component';
import { CreateDepartmentComponent } from './Department/create-department/create-department.component';
import { HomeDepartmentComponent } from './Department/home-department/home-department.component';
import { EditDepartmentComponent } from './Department/edit-department/edit-department.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { HomeEmployeeComponent } from './Employee/home-employee/home-employee.component';
import { CreateProjectComponent } from './Project/create-project/create-project.component';
import { EditProjectComponent } from './Project/edit-project/edit-project.component';
import { HomeProjectComponent } from './Project/home-project/home-project.component';
import { CreateFinancialComponent } from './Financial/create-financial/create-financial.component';
import { EditFinancialComponent } from './Financial/edit-financial/edit-financial.component';
import { HomeFinancialComponent } from './Financial/home-financial/home-financial.component';

const appRoutes:Routes = [
  {
    path: 'home', component:HomeComponent
  },
  {
    path: '', component:LoginComponent
  },


  {
    path: 'edit-department/:id', component:EditDepartmentComponent
  },
  {
    path: 'create-department', component:CreateDepartmentComponent
  },
  {
    path: 'home-department', component:HomeDepartmentComponent
  },


  {
    path: 'home-employee', component:HomeEmployeeComponent
  },
  {
    path: 'create-employee', component:CreateEmployeeComponent
  },
  {
    path: 'edit-employee/:id', component:EditEmployeeComponent
  },


  {
    path: 'home-project', component:HomeProjectComponent
  },
  {
    path: 'create-project', component:CreateProjectComponent
  },
  {
    path: 'edit-project/:id', component:EditProjectComponent
  },

  
  {
    path: 'home-financial', component:HomeFinancialComponent
  },
  {
    path: 'create-financial', component:CreateFinancialComponent
  },
  {
    path: 'edit-financial/:id', component:EditFinancialComponent
  },







]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    CreateDepartmentComponent,
    HomeDepartmentComponent,
    EditDepartmentComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    HomeEmployeeComponent,
    CreateProjectComponent,
    EditProjectComponent,
    HomeProjectComponent,
    CreateFinancialComponent,
    EditFinancialComponent,
    HomeFinancialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
