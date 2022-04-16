import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public empService:EmployeeService,public datepipe:DatePipe,public toast:ToastrService) { }


  //This event page load hote hi chal ta he.
  ngOnInit(): void {
    this.empService.getEmployee().subscribe(data=>{

      //aa lino matalab empservice ni andar listEmployee namano ek object aapade banavelo hato.
     //date ne convert karva mate use thay chhe.


      this.empService.listEmployee=data;
    });
  }

  //first of fall one methods are creates and perameter 
  //one and teni type hogi employee.
  pupulateEmployee(selectedEmployee:Employee)
  {
   
    
    //je date aave chhe te formated ma display karavani chhe.
    //usake liae pipe sign ka use karvate he.

    console.log(selectedEmployee.obj);
    var date=this.datepipe.transform(selectedEmployee.obj,'yyyy-MM-dd');

    //This
    console.log("After Transform",selectedEmployee.obj);
    
    selectedEmployee.obj=date;
    //this line are use data service ni sari methods selected class ma aavi jay.
   
    
    this.empService.employeeData=selectedEmployee;

  }

  deletes(id:number)
  {
    
    //if ni andar conform box lese.
      if(confirm('You are really methods delete?'))
      {
          this.empService.deleteEmployee(id).subscribe(data=>{
            console.log("Success delete ");

            this.toast.error('Success','Recond Deleted');
           

          },
          
          err=>{ 
            console.log("Record not delete ");
          });
      }
  }

}
