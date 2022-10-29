import { Component, OnInit } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent implements OnInit {

  public boredoms:any=[];
  constructor(private _boredomService:BoredomService) {
    this.boredoms.getboredom().subscribe(
      (data:any)=>{
        this.boredoms=data;

      },
      (Error:any)=>{
        alert('Server Error')

      }
    )

   }

  ngOnInit(): void {
  }

}
