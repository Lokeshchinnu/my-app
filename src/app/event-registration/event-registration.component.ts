import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {

  public name:string='';
  public names:string[]=['Chaitan','Chinnu']


  register(){
    if(this.name !=""){
      this.names.push(this.name);
    }
    this.name='';
  }
  delete(){
    this.names.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}