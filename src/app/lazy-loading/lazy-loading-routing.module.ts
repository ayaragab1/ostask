import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { AllEmployeeComponent } from '../all-employee/all-employee.component';

const routes: Routes = [
{path: "add",component:AddEmployeeComponent},

{path: "all", component:AllEmployeeComponent},

{path:"" , component:AllEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
