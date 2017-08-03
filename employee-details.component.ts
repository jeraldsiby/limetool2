import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  // employeeId:string;        since the employeeId is changed
  employee;

  constructor(private route:ActivatedRoute,
              private empService: EmployeesService) //constructor injection
   { }

  ngOnInit() {
    let employeeId = this.route.snapshot.params['id']; //this id matches the one in app.routing.ts
    this.empService.getEmployeeDetails(employeeId)
            .subscribe(employee => this.employee = employee)
}

}
