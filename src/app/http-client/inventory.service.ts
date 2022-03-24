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
    interface CategoryResponse{

      id:string;
      category_name:string;
      category_description:string;
  
    }

  }



getEquipment():Observable<any[]>{

  return this.http.get<any[]>('http://127.0.0.1:8000/api/equipment/')
}

addEmployee(employee:any):Observable<any>{
  return this.http.post<any>('http://127.0.0.1:8000/api/employees/',employee)
}


getEmployees():Observable<any[]>{

  return this.http.get<any[]>('http://127.0.0.1:8000/api/employees/')
}

getCategories():Observable<any[]>{
  return this.http.get<any[]>('http://127.0.0.1:8000/api/category/')

}
getDepartments():Observable<any[]>{
  return this.http.get<any[]>('http://127.0.0.1:8000/api/departments/')


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