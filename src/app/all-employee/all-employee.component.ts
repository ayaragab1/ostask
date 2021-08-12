import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import employees from '../../assets/employees.json';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css'],
})
export class AllEmployeeComponent implements OnInit {
  employeesData: any;
  Data: any;
  masterSelected: boolean = false;
  changBackground: boolean[] = [];
  changbcolor: boolean = false;
  checkedList: any;
  listFilter: string[] = [];
  noEmoployee: boolean = false;
  constructor(private route: Router) {}

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.employeesData.every(function (item: any) {
      return item.isSelected == true;
    });
  }
  checkUncheckAll() {
    for (var i = 0; i < this.employeesData.length; i++) {
      this.employeesData[i].isSelected = this.masterSelected;
    }
  }
  showbackcolor(id: any, $event: any, index: any) {
    if ($event.checked) {
      this.changBackground[index] = true;
    } else {
      this.changBackground[index] = false;
      this.changbcolor = false;
    }
  }
  showBackgroundColor(count: number) {
    if (this.masterSelected == false) {
      for (let i = 0; i < count; i++) {
        this.changBackground[i] = false;
      }
    } else {
      for (let i = 0; i < count; i++) {
        this.changBackground[i] = true;
      }
    }
  }
  searchEmp(eName: string, depName: string) {
    this.employeesData=this.Data.slice();
    var filtered=[];
      debugger;
    if (eName != null || depName != null) {
      for (let i = 0; i < this.employeesData.length; i++) {
        if (
          this.employeesData[i].name == eName &&
          this.employeesData[i].department == depName
        ) {
          filtered.push(this.employeesData[i]);
        }
        else
        {
           if (
             this.employeesData[i].name == eName||this.employeesData[i].department == depName
           ) {
            filtered.push(this.employeesData[i]);
           }
          //  else{
          //   this.noEmoployee=true;
          //   this.listFilter=this.employeesData;
          // }
       }

      }
    }
    else{
      this.noEmoployee=true;
      this.listFilter=this.employeesData;
    }
    this.listFilter=filtered;
    this.employeesData = this.listFilter;
  }

  getall() {
    this.noEmoployee = false;
  }
  ngOnInit(): void {
    this.employeesData = employees;
    this.Data=employees
    console.log(this.employeesData);
  }
}
