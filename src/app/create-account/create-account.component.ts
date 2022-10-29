import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm:FormGroup=new FormGroup(
    {
      createdAt: new FormControl(),
      account_name: new FormControl(),
      available_balance: new FormControl(),
      currency:new FormControl(),
      user_image:new FormControl(),
      account_number:new FormControl(),



    }
  )
  constructor(private _bankService:BankService) { }

  submit(){
    this._bankService.createAccount(this. accountForm.value).subscribe(
      (dat:any)=>{
        alert('Created Succesfully')
      },
      (Error:any)=>{
        alert('Internal Server Error')
      }

    )

  }

  ngOnInit(): void {
  }

}
