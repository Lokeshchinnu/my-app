import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  public name:string="";
  public age: number=NaN;
  public company:string="";
  public package:number=NaN;
  public increment:number=NaN;

  public employees:any=[
    {name:'Lokesh',age:27, company:'Accenture',package:12,increment:40},
    {name:'Chaitan',age:16, company:'Infosys',package:9.5,increment:35},
    {name:'Grish',age:17, company:'Wipro',package:12, increment:40},
    {name:'Prasad',age:30, company:'TCS',package:9, increment:45}

  ]

  register(){
    let employee={
      name:this.name,
      age:this.age,
      company:this.company,
      package:this.package
    }

    if (this.name !="" && this.age>NaN && this.company!="" && this.package>NaN ){
      this.employees.push(employee);
    }
    this.name=''
    this.age=NaN
    this.company=''
    this.package=NaN

    alert('register succesfully'); 


  }
  delete(i:number){
    this.employees.splice(i,1)
  }
    


  constructor() { }

  ngOnInit(): void {
  }

}
