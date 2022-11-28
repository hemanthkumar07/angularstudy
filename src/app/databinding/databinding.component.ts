import { Component, OnInit } from '@angular/core';
import { TimerSharp } from '@mui/icons-material';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  // template:`<div><h3>hi hemanth</h3></div>`,
  styleUrls: ['./databinding.component.css']

})
export class DatabindingComponent implements OnInit {
  title1="hi how r u"
  bool=true
  img1='assets/ealogo.png'
  true1=true
  ab=""
  abc="hello world"
  isloggedin=true
  superhero="batman"
  color1="green"
  title2="HI HOW ARE YOU"
  a=4354354342
  dec=428.3475647853
  date=new Date()
  defg:any
  arr1=[
    {name:'hemanth', age:25,place:"fvyf"},
    {name:'shan', age:27,place:"fvsadyf"},
    {name:'rahul', age:24,place:"fadsvyf"},
    {name:'anas', age:26,place:"gfdfvyf"}

  ]

  people:any[]=[
    {name:"hemanth",
      country:"india"},
      {
        name:"rahul",
        country:"usa"
      },
      {
        name:"shan",
        country:"canada"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  cli1(){
    this.bool=!this.bool
  }
  cli2(){
    this.true1=false

  }
  input1(a:any){
    console.log(a.target.value)
    this.ab=a.target.value
    console.log(this.ab)
  }

}
