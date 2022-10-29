import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  


  constructor() { }

  ngOnInit(): void {
  }

  public length:number=NaN;
  public result:number=0;

  area(){
    this.result= this.length*this.length;
  }

  perimeter(){
    this.result= 4*this.length;
  }

}
