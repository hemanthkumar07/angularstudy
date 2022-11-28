import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges , DoCheck, OnDestroy, ContentChild, ElementRef,AfterContentInit} from '@angular/core';
import { inputAdornmentClasses } from '@mui/material';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit,OnChanges,DoCheck,OnDestroy,AfterContentInit{
  @Input()a:any
  @Output()b=new EventEmitter()
  @Input()ghi:any
  constructor() {
    console.log("constructor")
   }
  ngAfterContentInit(): void {
    this.ddd.nativeElement.setAttribute("style","color:red")
  }
  ngOnDestroy(): void {
    console.log("ngondestroy")
  }
  ngDoCheck(): void {
    console.log("ngdocheck")

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges",changes)
  }
  

  ngOnInit(): void {
    console.log("ngOnInit")
  }
  cli1(){
    this.b.emit("hi hemanth")
  }
  @ContentChild("id22")ddd!:ElementRef

}
