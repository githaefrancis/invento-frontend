import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-class/employee';
import { InventoryService } from '../http-client/inventory.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees!:Employee[]


  employeeForm=new FormGroup(

    {
      'firstName':new FormControl('',Validators.required),
      'lastName':new FormControl('',Validators.required),
      'department':new FormControl('',Validators.required)
    }
  )

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    
    this.inventoryService.getEmployees().subscribe(
      (data)=>{
        this.employees=data
        console.log(this.employees)
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
