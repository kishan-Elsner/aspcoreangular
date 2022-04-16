import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  //service ne get karva use thay chhe.
  //public toast:ToastrService this line add in constructor.
  constructor(public Emlopyee:EmployeeService,public toast:ToastrService) { }

  submit(from:NgForm) {

    //this line no matalab employee module ni andar is married value
    //true hoy 0 athava 1 hoy to.
    this.Emlopyee.employeeData.isMarried=from.value.isMarried==true?1:0;
    this.Emlopyee.employeeData.isActive=from.value.isActive==true?1:0;


    if(this.Emlopyee.employeeData.id == 0)
    {
        this.insertemployee(from);
    }
    else{
        this.updateEmployee(from);
    }
    console.log('event success');
  }

  insertemployee(myform:NgForm)
  {
      this.Emlopyee.saveEmployee().subscribe(d=>
      {
        this.resertform(myform);
        this.referecedata();
        this.toast.success('Success','Recond Saved!');
      });
  }

  updateEmployee(myform:NgForm)
  {
        this.Emlopyee.updateEmployee().subscribe(d=>{
        this.resertform(myform);
        this.referecedata();
        this.toast.warning('Success','Recond Updated!');
    });
  }
  //this method use clear element all.
  resertform(myform:NgForm)
  {
    myform.form.reset();
  }
  ngOnInit(): void {
    this.Emlopyee.getDesignations().subscribe(data=>
      {
          this.Emlopyee.listDesignation=data;
      });
  }
  referecedata()
  {
    this.Emlopyee.getEmployee().subscribe(res=>{
      this.Emlopyee.listEmployee=res;
      console.log(alert('save success'));
    });
  }

}
