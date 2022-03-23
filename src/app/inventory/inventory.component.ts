import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../http-client/inventory.service';
import { Employee } from '../employee-class/employee';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {

    this.inventoryService.FetchInventory()
  }

}
