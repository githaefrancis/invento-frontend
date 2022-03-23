import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Employee} from '../employee-class/employee'
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { 



  }


public FetchInventory(){

  interface ApiUserResponse{
    employee_fname:string;
    employee_lname:string;
  }

  let promise=new Promise((resolve,reject)=>{
    console.log('service ran')
    this.http.get<ApiUserResponse>('https://invento-inventory.herokuapp.com/api/employees/')
    .toPromise()
    .then(

      response=>{

        if (response){
          console.log(response)
          resolve(true)
        }
      }
    )
    .catch(error => {
      console.log(error);
    })
  })
  return promise
}
}
