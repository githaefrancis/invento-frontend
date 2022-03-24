import { Component, OnInit } from '@angular/core';
import { Category } from '../category-class/category';
import { InventoryService } from '../http-client/inventory.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories!:Category[]
  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {

    this.inventoryService.getCategories().subscribe((data)=>{

      this.inventoryService.getCategories().subscribe(
      (data)=>{
        this.categories=data
        console.log(this.categories)
      }
    )
    });

  }

}
