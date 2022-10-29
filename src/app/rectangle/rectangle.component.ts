import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  public length:number=NaN;
  public breadth:number=NaN;
  public result:number=0;

  area(){
   this.result = this.length*this.breadth;
  }
  perimeter(){
    this.result=(2*this.length)+(2*this.breadth)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
