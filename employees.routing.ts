import { RouterModule, Routes } from '@angular/router';

import { EmployeesListComponent } from "app/erp/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/erp/employees/employee-details/employee-details.component";
import { EmployeeCreateComponent } from "app/erp/employees/employee-create/employee-create.component";
import { EmployeeSectionComponent } from "app/erp/employees/employee-section/employee-section.component";


const employeesRoutes: Routes= [    
    {
        path:'',        // 'employeees' commented out in case of lazy loading
        component:EmployeeSectionComponent,
        children:[
            {
              path:'',
            component:EmployeesListComponent
            },
            {
             path:'create',
            component:EmployeeCreateComponent
            },
            {
             path:':id',
             component:EmployeeDetailsComponent
            }
        ]
    }    
];

//used when lazy loading is not implemented
//export const employeesRouting = RouterModule.forRoot(employeesRoutes);

//for lazy loading
export const employeesRouting = RouterModule.forChild(employeesRoutes);