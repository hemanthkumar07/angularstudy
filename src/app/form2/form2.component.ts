import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email, Password } from '@mui/icons-material';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  sign2!:sign1

  constructor() { }

  ngOnInit(): void {
    this.sign2={
    name:"",
    email:"",
    password:"",
    confirmpassword:""}
  }
  sign(signup:NgForm){
    if(signup.value.password==signup.value.confirmpassword){
      signup.reset()
    }

  }
  

}
export class sign1{
  name !:string;
  email!:string;
  password!:string;
  confirmpassword!:string;
}