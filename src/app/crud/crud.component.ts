import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { EmployeeModel } from './crud.model';
import { ApiService } from '../shared/api.service';

@Component({
  
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
 
})
export class crudComponent implements OnInit {
  formValue!: FormGroup;
  employeemodelobj: EmployeeModel = new EmployeeModel();

  employeeData!: any;

  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
    });
    this.getAllEmployee();
  }
 

  postEmployeeDetails() {
    this.employeemodelobj.firstname = this.formValue.value.firstname;
    this.employeemodelobj.lastname = this.formValue.value.lastname;
    this.employeemodelobj.email = this.formValue.value.email;

    this.api.postEmployee(this.employeemodelobj).subscribe(
      (res) => {
        console.log(res);
        alert('Employee added Successfully');
        this.formValue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllEmployee();
      },
      (err) => {
        alert('something worng happen');
      }
    );
  }

  getAllEmployee() {
    this.api.getEmployee().subscribe((res) => {
      this.employeeData = res;
    });
  }

  deleteEmployee(row: any) {
    this.api.deleteEmployee(row.id).subscribe((res) => {
      alert('Employee Deleted Sucessfully');
      this.getAllEmployee();
    });
  }
  onEdit(row: any) {
    this.employeemodelobj.id = row.id;
    this.formValue.controls['firstname'].setValue(row.firstname);
    this.formValue.controls['lastname'].setValue(row.Lastname);
    this.formValue.controls['email'].setValue(row.email);
    this.showAdd = false;
    this.showUpdate = true;
  }
  updateEmployeeDetails() {
    this.employeemodelobj.firstname = this.formValue.value.firstname;
    this.employeemodelobj.lastname = this.formValue.value.lastname;
    this.employeemodelobj.email = this.formValue.value.email;
    this.api.updateEmployee(this.employeemodelobj, this.employeemodelobj.id)
      .subscribe((res) => {
        alert('Updated');
        let ref = document.getElementById('Cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      });
  }

  clickAddEmployee() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
}
