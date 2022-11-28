import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
g:string=""
contact1!:contact

  constructor() { }

  ngOnInit(): void {

    this.contact1={
      email:"",
      password:"hsgdfjhs",
      check:true,
      number:1
    }
  }
  log1(login:NgForm){
    console.log(login)
    console.log(login.value.email)
    console.log(login.value.password)
    console.log(login.value.check)
    console.log(login.value.number)
    login.reset()
  }
  
}
export class contact{
  email !:string;
  password!:string;
  check!:boolean;
  number!:Number;


}
