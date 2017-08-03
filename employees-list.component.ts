import { Component, OnInit } from '@angular/core';
import { listOfEmployees } from "../../../shared/mock-data/mock-employees";
import { EmployeesService } from "app/shared/services/employees.service";
import { Http } from "@angular/http";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
gridData;
errorMessage;

//constructor(private http: Http) { }
//this is directly consuming the service

  constructor(private empService: EmployeesService) { }

  ngOnInit() {
    // this.gridData= listOfEmployees;
    //hardcoding the employees list

// this.http.get("http://localhost:3000/api/employees")
// .subscribe((response) => {
//   this.gridData = response.json();
// })
//this is directly consuming the service
    
this.empService.getEmployee()
.subscribe(employees => console.log(employees));
//this is consuming the service thru a service module
//.subscribe(response => console.log(response.json()));  done to get the object in console

this.empService.getEmployee()
.subscribe(employees => this.gridData = employees);
//done to get the data from service in grid
  }

}
