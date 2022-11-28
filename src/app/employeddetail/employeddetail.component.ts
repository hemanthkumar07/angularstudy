import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getMobileStepperUtilityClass } from '@mui/material';
import { getThemeProps } from '@mui/system';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employeddetail',
  templateUrl: './employeddetail.component.html',
  styleUrls: ['./employeddetail.component.css']
})
export class EmployeddetailComponent implements OnInit {
  emp1!:Employeedet

  empdata:any

  constructor(private auth:AuthService)
{ }

  ngOnInit(): void {
    this.emp1={
      id:0,
      first_name:"",
      last_name:"",
      email_id:""
    }

   this.getemp()
    
  }
  oncreate(emp:NgForm){
    console.log(emp.value)
    emp.reset()
  }
  getemp(){
    this.auth.getEmployee().subscribe(data =>{
      console.log(data)
      this.empdata=data
    })

  }

}
export class Employeedet{
  id:number=0;
  first_name!:string;
  last_name!:string;
  email_id!:string;

}
