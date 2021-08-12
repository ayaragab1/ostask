import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import employees from "../../assets/employees.json";
import { Employee } from '../_models/employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
addEmp:Employee=new Employee() ;
data:any=employees;
arr:any;
  constructor(public router : Router ,) { }
 
  add(){
    this.arr= this.addEmp;
    employees.push(this.arr);
     this.router.navigateByUrl("/all");
  }
  ngOnInit(): void {
    }

}
