import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "app/erp/home/home.component";
import { AboutComponent } from "app/erp/about/about.component";
import { EmployeesListComponent } from "app/erp/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/erp/employees/employee-details/employee-details.component";
import { NotFoundComponent } from "app/erp/not-found/not-found.component";
import { EmployeeCreateComponent } from "app/erp/employees/employee-create/employee-create.component";
import { EmployeeSectionComponent } from "app/erp/employees/employee-section/employee-section.component";


const appRoutes: Routes= [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
     {  //to implement lazy loading
        path:'employees',
        loadChildren:'app/erp/employees/employees.module#EmployeesModule'
    },
    // {
    //     path:'employees',
    //     component:EmployeeSectionComponent,
    //     children:[
    //         {
    //           path:'',
    //         component:EmployeesListComponent
    //         },
    //         {
    //          path:'create',
    //         component:EmployeeCreateComponent
    //         },
    //         {
    //          path:':id',
    //          component:EmployeeDetailsComponent
    //         }
    //     ]
    // },      
    {   //default home component for http://localhost:4200/employees/sdfgh
        path:'**',
        component:NotFoundComponent
    }    
];

export const appRouting = RouterModule.forRoot(appRoutes);
