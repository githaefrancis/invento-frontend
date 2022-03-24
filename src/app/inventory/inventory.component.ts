import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../http-client/inventory.service';
import { Employee } from '../employee-class/employee';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  equipment:any
  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {

    // this.inventoryService.FetchInventory()

    this.inventoryService.getEquipment().subscribe(
      (data)=>{
        this.equipment=data
        console.log(this.equipment)
      }
    )
    
  }

}
