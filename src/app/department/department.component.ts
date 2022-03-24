import { Component, OnInit } from '@angular/core';
import { Department } from '../department-class/department';
import { InventoryService } from '../http-client/inventory.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments!:Department[]
  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {

    this.inventoryService.getDepartments().subscribe((data)=>{

      this.inventoryService.getDepartments().subscribe(
      (data)=>{
        this.departments=data
        console.log(this.departments)
      }
    )
    });


  }

}
