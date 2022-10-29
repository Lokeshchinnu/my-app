import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any=[];
  public term:string='';
  constructor(private _bankService:BankService, private _router:Router) { 
    this._bankService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (Err:any)=>{
        alert('Internal server error');
      }
    )
  }

  filter(){
    this._bankService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (Error:any)=>{
        alert('Internal Server Error')
      }
    )

  }

  pagination(page:number){
    this._bankService.getPagedAccounts(page).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (Error:any)=>{
        alert('Internal Server Error')
      }

    )

  }

  view(id:string){
    this._router.navigateByUrl('/dashboard/bank-details/'+id);

  }

  ngOnInit(): void {
  }

}
