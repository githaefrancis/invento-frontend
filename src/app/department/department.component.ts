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
  constructor() { }

  ngOnInit(): void {
  }

}
