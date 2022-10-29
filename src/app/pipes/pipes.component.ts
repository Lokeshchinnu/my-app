import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string='good morning';
  public city:string='VIZAG';
  public dob:string='10-05-2022';
  public today:Date= new Date();
  public user:any={ name:'Chaitan', phone:9879879879};

  public price:number=1000;
  public age:number=27;
  public marks:number=96;


  constructor() { }

  ngOnInit(): void {
  }

}
