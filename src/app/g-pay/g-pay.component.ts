import { Component, OnInit } from '@angular/core';
import { SbiService } from '../sbi.service';

@Component({
  selector: 'app-g-pay',
  templateUrl: './g-pay.component.html',
  styleUrls: ['./g-pay.component.css']
})
export class GPayComponent implements OnInit {

  public amount:number=NaN;

  
  constructor(private _bankservice:SbiService) { }

  withdraw(){
    this._bankservice.withdraw(this.amount);

  }

  deposit(){
    this._bankservice.deposit(this.amount);

  }

  balance(){
    alert(this._bankservice.getBalance() );
    
  }

  ngOnInit(): void {
  }

}
