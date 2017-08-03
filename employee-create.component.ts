import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/model/employee";
import { EmployeesService } from "app/shared/services/employees.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
employee:Employee;
successMessage: string;
createForm: FormGroup;
empNoError: string;

  constructor(private empService: EmployeesService,
              private router: Router,
              private fb: FormBuilder) { 

  }

  ngOnInit() {  
    this.employee = new Employee();
    this.buildForm();
  }

  buildForm(){
    this.createForm = this.fb.group({
      emp_no: ['',
                  [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(6)
                  ]
              ],
      first_name: [''],
      last_name : [''],
      city:['']
    });

    console.log(this.createForm);

    this.createForm.valueChanges.subscribe(data => {
    //console.log(data);
    this.empNoError = '';
    let empNoControl = this.createForm.get('emp_no');
    if(empNoControl.dirty && empNoControl.invalid)
    {
      console.log(empNoControl.errors);
      if(empNoControl.errors['required'])
      this.empNoError = "Name is required";
    }
    });
  }

  createEmployee(){
    this.empService.createEmployee(this.employee)
            .subscribe((employee) => {
              console.log(employee);
              this.successMessage = 'Employee created successfully';
              setTimeout(() => this.successMessage = '',2000);
              //this.employee = new Employee();    not required since we are redirecting to a new page
              this.router.navigate(['/employees',employee.id]) 
              //done to redirect to the page when employee updated
            });
  }

}
