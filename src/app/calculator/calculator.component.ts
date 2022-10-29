import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public number1:number=NaN;
  public number2:number=NaN;
  public result:number=0;

  add(){
    this.result= this.number1+this.number2;
  }
  sub(){
    this.result=this.number1-this.number2
  }
  mul(){
    this.result=this.number1*this.number2
  }
  div(){
    this.result=this.number1/this.number2
  }
  constructor() { }

  ngOnInit(): void {
  }

}
