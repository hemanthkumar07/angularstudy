import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  obj1!:local1

  constructor() { }

  ngOnInit(): void {
    this.obj1={
      email:"",
      password:""

    }
  }
  log1(signin:NgForm){
    console.log(signin)
    console.log(signin.value.email)
    console.log(signin.value.password)
  }

}
export class local1{
  email !:string;
  password !:string;
}