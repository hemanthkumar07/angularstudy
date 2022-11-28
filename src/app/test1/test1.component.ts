import { Component, ElementRef, OnInit, ViewChild, OnChanges, SimpleChanges,OnDestroy,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit,OnDestroy,AfterViewInit {

  i="hello"
  bb:any
  abc:any
  def:any
  constructor() {
   }
  ngOnDestroy(): void {
    console.log("ngondestroyed")
  }


  ngOnInit(): void {
  }
  @ViewChild("id1")hhhh!:ElementRef
  ngAfterViewInit(){
    this.hhhh.nativeElement.setAttribute("style","color:green")
  }

}
