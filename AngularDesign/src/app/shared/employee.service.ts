import { Injectable } from '@angular/core';

//this namespace add
import { HttpClient } from '@angular/common/http';
import { Designation, Employee } from './employee.model';
import { Observable } from 'rxjs';
import {} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //this first myhttp:HttpClient pass in constructor
  constructor(private myhttp:HttpClient) { }
  
  //url ni request ne hit karva mat are use  this link.
  employeeUrl:string='https://localhost:44381/api/Employees';
  designationUrl:string='https://localhost:44381/api/Designeation';


  //one model created
  //je employee ni andar list aavase te aama pass thase ane teni aek copy collection ni object ne save karavase. 
  listEmployee:Employee[]=[];
  listDesignation:Designation[]=[];

  //This Line are use data post in a browser.
  employeeData:Employee=new Employee();

  //This Line are use data save.
  saveEmployee()
  { 
    //myhttp ne kya urlupar mokalavu chhe te nahi kare chhe.
    //insert ke liye post use hota he.
      return this.myhttp.post(this.designationUrl,this.employeeData);
      // console.warn(this.employeeUrl);
  }

  //update ni andar put methods no use thay chhe.
  //put me do number perameter me leta he id
  //`` trild sign are use.
  //je pramane api ma chhe te j pramane put ni request ok kari levi.
  updateEmployee()
  { 
    return this.myhttp.put(`${this.designationUrl}/${this.employeeData.id}`,this.employeeData);
  }

  //jyare angular ma get ni method banavi chhe tyare get observe type ni banava ma aave chhe. yani usaki return type observe bhi rakh sakate he.
  //methods ni aagal : no use thay chhe.jyare data ne get karvano hoy tyare observabale rakhiae chhiae. 
  //<> aama observable nu shu return karse te nakki karase.
  getEmployee():Observable<Employee[]>
  {
    //return this method.
    //get ka methods teyar ho gaya.
    //this angular one pattern and follow any ware.
    return this.myhttp.get<Employee[]>(this.designationUrl);

  }

  //have tamare destination ne pan get karvano chhe.
  getDesignations():Observable<Designation[]>
  {
    //return this method.
    //get ka methods teyar ho gaya.
    //this angular one pattern and follow any ware.
    return this.myhttp.get<Designation[]>(this.employeeUrl);

  }

  deleteEmployee(id:number)
  {
      return this.myhttp.delete(`${this.designationUrl}/${id}`);
  }
  

}
