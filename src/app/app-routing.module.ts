import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { DepartmentComponent } from './department/department.component';
import { AllocationComponent } from './allocation/allocation.component';
import { CategoryComponent } from './category/category.component';



const routes: Routes = [

  {'path':'',component:InventoryComponent},
  {'path':'employee',component:EmployeeComponent},
  {'path':'allocation',component:AllocationComponent},
  {'path':'category',component:CategoryComponent},
  {'path':'consumption',component:ConsumptionComponent},
  {'path':'department',component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
