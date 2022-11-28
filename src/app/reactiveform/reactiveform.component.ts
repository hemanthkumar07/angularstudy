import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb:FormBuilder) { 

  }

  ngOnInit(): void {
    this.loginForm1=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    })

    
  }

  // loginForm1= new FormGroup({
  //   email:new FormControl('FDSJBFK',[Validators.required,Validators.email]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)])
  // })

  loginForm1!:FormGroup

  local2(){
    console.log(this.loginForm1.value)
  }
  get f(){
    return this.loginForm1.controls
  }

  get email1(){
    return this.loginForm1.get('email')?.value
  }
}
