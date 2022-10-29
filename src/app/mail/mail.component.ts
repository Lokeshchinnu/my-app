import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mails:any=[];
  constructor(private _mailService:MailService) {
    this._mailService.getmail().subscribe(
      (data:any)=>{
        this.mails=data;

      },
      (Error:any)=>{
        alert('Internal Server Error');
      }
    )
   }

  ngOnInit(): void {
  }

}
