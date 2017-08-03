import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { Employee } from "app/shared/model/employee";

@Injectable()
export class EmployeesService {
employeeUrl = 'http://localhost:3000/api/employees';
  constructor(private http: Http) { }

private handleError(err) {
     const errBody = err.json();
     let errMessage: string;
     if(errBody.error.status === 404)
     {
       errMessage= '404: Resource not found';
     }
     return Observable.throw(errMessage);
          //    return Observable.throw("could not fetch employee");
}

  getEmployee(){
return this.http.get('http://localhost:3000/api/employees')
        .map(response => response.json())
        .catch(err => {
          console.log(err);
          return Observable.throw('Internal Server Error'); 
          //catch done to throw the error when the http link is wrong
        });

  }

private formatEmployee(empData){
    let employee = new Employee();
    employee.id = empData.id;
    employee.first_name = empData.first_name;
    employee.last_name = empData.last_name;
    employee.city = empData.city;
    employee.emp_no = empData.emp_no;

    //generated properties
    employee.fullname = empData.first_name + ' ' + empData.last_name;

    return employee;
}

getEmployeeDetails(id){
  //  `${this.employeeUrl}/${id}/project`  
let empDetailsUrl = this.employeeUrl + '/' +id;
  return this.http.get(empDetailsUrl)
  .map(response => response.json())
  .map(this.formatEmployee)
  .catch(this.handleError);
}

createEmployee(employee){    
   return this.http.post(this.employeeUrl, employee)
   .map(response => response.json())
    .catch(this.handleError);
}
}
