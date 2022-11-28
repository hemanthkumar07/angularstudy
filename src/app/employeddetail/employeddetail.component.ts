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
  emp1:Employeedet=new Employeedet()

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
    // this.emp1.first_name=emp.value.first_name
    // this.emp1.last_name=emp.value.last_name
    // this.emp1.email_id=emp.value.email_id

    this.auth.postEmployee(this.emp1).subscribe((data)=>{
      console.log(data)
    })
    
    emp.reset()
    this.getemp()
  }
  getemp(){
    this.auth.getEmployee().subscribe(data =>{
      console.log(data)
      this.empdata=data
    })

  }
  ondelete(id:any){
   
    this.auth.deleteEmployee(id).subscribe(data =>{
      console.log(data)
      this.getemp()
    })
  }
  onedit(block:any){

    this.emp1={
      id:block.id,
      first_name:block.first_name,
      last_name:block.last_name,
      email_id:block.email_id
    }
    
  }

  onupdate(b:any){
    
    // this.emp1.first_name=b.value.first_name
    // this.emp1.last_name=b.value.last_name
    // this.emp1.email_id=b.value.email_id
    this.auth.editEmployee(this.emp1,this.emp1.id).subscribe((data) =>{
      console.log(data)
      b.reset()
      this.getemp()
      
    })
  }

  

    
  
}
export class Employeedet{
  id:number=0;
  first_name!:string;
  last_name!:string;
  email_id!:string;

}
