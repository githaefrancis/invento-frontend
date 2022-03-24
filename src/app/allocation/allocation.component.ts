import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../http-client/inventory.service';
import { Employee } from '../employee-class/employee';
import { Equipment } from '../equipment-class/equipment';
import { Allocation } from '../allocation-class/allocation';
@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {

  }

  

}
