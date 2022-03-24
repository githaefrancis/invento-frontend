import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { AllocationComponent } from './allocation/allocation.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { DepartmentComponent } from './department/department.component';
import { CategoryComponent } from './category/category.component'
@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    NavbarComponent,
    EmployeeComponent,
    AllocationComponent,
    ConsumptionComponent,
    DepartmentComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
