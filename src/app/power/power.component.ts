import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  public number:number=NaN;
  public result:number=0;

  square(){
    this.result=this.number*this.number
  }
  cube(){
    this.result=this.number*this.number*this.number
  }
  constructor() { }

  ngOnInit(): void {
  }

}
