import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-class/employee';
import { InventoryService } from '../http-client/inventory.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Department } from '../department-class/department';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees!:any[]
  departments!:Department[]


  employeeForm=new FormGroup(

    {
      'firstName':new FormControl('',Validators.required),
      'lastName':new FormControl('',Validators.required),
      'department':new FormControl('Pick department',Validators.required)
    }
  )
  newEmployee=new Employee(1,'','',1)
  constructor(private inventoryService:InventoryService) { }


  addEmployee(){

    if(this.employeeForm.valid){
      let confirmSubmit=confirm("Add a new employee ?")

      if(confirmSubmit){
        this.inventoryService.addEmployee(this.newEmployee).subscribe((data)=>{
          console.log(data)
          console.log('added new employee');
          alert('employee added successfully');
          this.displayStyle="none";
          this.employeeForm.reset()
          this.fetchEmployees()
          
        })
      }
    }
  }

  ngOnInit(): void {

    this.fetchEmployees()

    //   this.inventoryService.getDepartments().subscribe(
    //   (data)=>{
    //     this.departments=data
    //     console.log(this.departments)
    //   }
    // );
    

    
    // this.inventoryService.getEmployees().subscribe(
    //   (data)=>{
    //     this.employees=data
    //     console.log(this.employees)
    //   }
    // );

  }

public fetchEmployees(){

  this.inventoryService.getDepartments().subscribe(
    (data)=>{
      this.departments=data
      console.log(this.departments)
    }
  );
  

  
  this.inventoryService.getEmployees().subscribe(
    (data)=>{
      this.employees=data
      console.log(this.employees)
    }
  );

}

displayStyle="None";

openPopup(){
  this.displayStyle="block";
}

closePopup(){
  this.displayStyle="none";
}
  

}
