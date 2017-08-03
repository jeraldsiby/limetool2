import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './erp/home/home.component';
import { AboutComponent } from './erp/about/about.component';
import { NavbarComponent } from './erp/navbar/navbar.component';
import { appRouting } from "app/app.routing";
import { NotFoundComponent } from './erp/not-found/not-found.component';
import { EmployeesModule } from "app/erp/employees/employees.module";
import { EmployeesService } from "app/shared/services/employees.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    appRouting,
    //EmployeesModule            :commented out in case of lazy loading. to remove dependency 
                                 //over here and add it in the route path as loadchildren
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
