import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Employee} from '../employee-class/employee'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  
  baseUrl:string=environment.baseUrl
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

  return this.http.get<any[]>(`${this.baseUrl}/api/equipment/`)
}

getAvailableEquipment():Observable<any[]>{

  return this.http.get<any[]>(`${this.baseUrl}/api/equipment/available`)
}

returnEquipment(id:any,payload:any):Observable<any>{
  return this.http.put<any>(`${this.baseUrl}/api/allocation/${id}/`,payload)
}

addEmployee(employee:any):Observable<any>{
  return this.http.post<any>(`${this.baseUrl}/api/employees/`,employee)
}


getEmployees():Observable<any[]>{

  return this.http.get<any[]>(`${this.baseUrl}/api/employees/`)
}

getCategories():Observable<any[]>{
  return this.http.get<any[]>(`${this.baseUrl}/api/category/`)

}
getDepartments():Observable<any[]>{
  return this.http.get<any[]>(`${this.baseUrl}/api/departments/`)


}

getAllocations():Observable<any[]>{
  return this.http.get<any[]>(`${this.baseUrl}/api/allocation/`)
}

addAllocation(allocation:any):Observable<any>{
  return this.http.post<any>(`${this.baseUrl}/api/allocation/`,allocation)
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