import { Component, OnInit } from '@angular/core';
import { __asyncDelegator } from 'tslib';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name:string='';
  public price:number=NaN;
  public quantity:number=NaN;

  public items:any=[
    {name:'notebook', price:30,quantity:3},
    {name:'watch',price:1000, quantity:1},
    {name:'earpod', price:1500, quantity:1}
  ]

  addtocart(){
    let item={
      name:this.name,
      price:this.price,
      quantity:this.quantity
    }

    if (this.name!='', this.price>0,this.quantity>0){
    this.items.push(item)
    }

    this.name='',
    this.price=NaN,
    this.quantity=NaN

    alert("Succesfully Added to Cart")
    

    }
    
  delete(i:number){
    this.items.splice(i,1)
  }




  constructor() { }

  ngOnInit(): void {
  }

}
