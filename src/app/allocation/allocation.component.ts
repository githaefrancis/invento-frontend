import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../http-client/inventory.service';
import { Employee } from '../employee-class/employee';
import { Equipment } from '../equipment-class/equipment';
import { Allocation } from '../allocation-class/allocation';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  allocations!:any[]
  employees!:any[]
  equipments!:any[]
  allocationForm=new FormGroup(

    {
      'equipment':new FormControl('Choose Equipment',Validators.required),
      'employee':new FormControl('Choose Employee',Validators.required)
    }
  )


  addAllocation(){

    if(this.allocationForm.valid){
      let confirmSubmit=confirm("Allocate an equipment ?")

      if(confirmSubmit){
        this.inventoryService.addAllocation(this.newAllocation).subscribe((data)=>{
          console.log(data)
          console.log('Allocated an equipment');
          alert('Equipment allocated successfully');
          this.displayStyle="none";
          this.allocationForm.reset()
          this.fetchAllocations()
          
        })
      }
    }

  }

  newAllocation=new Allocation(1,1)

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.fetchAllocations()
  }

  public fetchAllocations(){

    this.inventoryService.getAllocations().subscribe(
      (data)=>{
        this.allocations=data

      }
    )
    this.inventoryService.getEmployees().subscribe(
      (data)=>{
        this.employees=data
      }
    )
    this.inventoryService.getEquipment().subscribe(
      (data)=>{
        this.equipments=data
      }
    )

  }

  displayStyle="None";

openPopup(){
  this.displayStyle="block";
}

closePopup(){
  this.displayStyle="none";
}

}
