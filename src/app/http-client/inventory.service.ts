import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Employee} from '../employee-class/employee'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  employees!:Employee[];
  constructor(private http:HttpClient) { 

    this.employees=[]

  }



getEmployees():Observable<any[]>{

  return this.http.get<any[]>('http://127.0.0.1:8000/api/equipment/')
}



}



// public FetchInventory(){

//   interface ApiUserResponse{
//     employee_fname:string;
//     employee_lname:string;
//   }

//   let promise=new Promise((resolve,reject)=>{
//     console.log('service ran')
//     this.http.get<ApiUserResponse>('https://invento-inventory.herokuapp.com/api/employees/')
//     .toPromise()
//     .then(

//       response=>{

//         if (response){
//           // console.log(response)
//           // this.employees=response.data
//           resolve(true)
          
//         }
//       }
//     )
//     .catch(error => {
//       console.log(error);
//     })
//   })
//   return promise
// }