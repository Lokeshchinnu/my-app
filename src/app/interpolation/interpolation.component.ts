import { AUTO_STYLE } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public age:number= 27;
  public name:string= 'Lokesh';
  public isIndian:boolean=true;

  public ages:number[]=[10,20,30,40,50];
  public names:string[]=['Chaitan','Surya'];

  public products: any= [
    {name:'pen', price:20 },
    {name:'pencil', price:10},
    {name:'box', price:30},
    {name:'pad', price:50}
  ]

  public Educations: any=[
    {qualification:'B.E', school:'A.U', year: 2016},
    {qualification:'Inter', school:'Sri Chaitanya', year:2012},
    {qualification: 'School', school:'BHPV Sec School',year:2010}
  ]

  public Vehicles: any  =[{"Vehicle":"Bugatti Beetle","manufacturer":"Kia","model":"V90","type":"Crew Cab Pickup","fuel":"Electric","color":"grey","image":"http://loremflickr.com/640/480/transport","id":"1"},{"Vehicle":"Smart Malibu","manufacturer":"Aston Martin","model":"Malibu","type":"Convertible","fuel":"Diesel","color":"olive","image":"http://loremflickr.com/640/480/animals","id":"2"},{"Vehicle":"Jaguar Silverado","manufacturer":"Hyundai","model":"Spyder","type":"Convertible","fuel":"Gasoline","color":"sky blue","image":"http://loremflickr.com/640/480/business","id":"3"},{"Vehicle":"Honda XTS","manufacturer":"Audi","model":"A8","type":"Wagon","fuel":"Gasoline","color":"gold","image":"http://loremflickr.com/640/480/abstract","id":"4"},{"Vehicle":"Kia 2","manufacturer":"Cadillac","model":"Alpine","type":"Sedan","fuel":"Gasoline","color":"magenta","image":"http://loremflickr.com/640/480/transport","id":"5"},{"Vehicle":"Lamborghini El Camino","manufacturer":"Jeep","model":"Spyder","type":"Hatchback","fuel":"Gasoline","color":"turquoise","image":"http://loremflickr.com/640/480/business","id":"6"},{"Vehicle":"Tesla Durango","manufacturer":"BMW","model":"2","type":"Wagon","fuel":"Diesel","color":"salmon","image":"http://loremflickr.com/640/480/cats","id":"7"},{"Vehicle":"Honda CX-9","manufacturer":"Polestar","model":"Golf","type":"Crew Cab Pickup","fuel":"Electric","color":"tan","image":"http://loremflickr.com/640/480/people","id":"8"},{"Vehicle":"Honda Focus","manufacturer":"Cadillac","model":"Civic","type":"Wagon","fuel":"Diesel","color":"orange","image":"http://loremflickr.com/640/480/nightlife","id":"9"},{"Vehicle":"Chrysler Civic","manufacturer":"Porsche","model":"XC90","type":"Coupe","fuel":"Hybrid","color":"tan","image":"http://loremflickr.com/640/480/nature","id":"10"},{"Vehicle":"Honda V90","manufacturer":"Ford","model":"Model T","type":"Cargo Van","fuel":"Gasoline","color":"plum","image":"http://loremflickr.com/640/480/business","id":"11"},{"Vehicle":"Hyundai Fiesta","manufacturer":"Fiat","model":"Colorado","type":"Passenger Van","fuel":"Diesel","color":"magenta","image":"http://loremflickr.com/640/480/nature","id":"12"},{"Vehicle":"Maserati Model T","manufacturer":"Land Rover","model":"Land Cruiser","type":"SUV","fuel":"Gasoline","color":"white","image":"http://loremflickr.com/640/480/abstract","id":"13"},{"Vehicle":"Hyundai A4","manufacturer":"Maserati","model":"A4","type":"Extended Cab Pickup","fuel":"Electric","color":"tan","image":"http://loremflickr.com/640/480/abstract","id":"14"},{"Vehicle":"Rolls Royce XTS","manufacturer":"BMW","model":"Alpine","type":"Passenger Van","fuel":"Hybrid","color":"maroon","image":"http://loremflickr.com/640/480/sports","id":"15"},{"Vehicle":"Honda Focus","manufacturer":"Audi","model":"Volt","type":"Minivan","fuel":"Electric","color":"purple","image":"http://loremflickr.com/640/480/fashion","id":"16"},{"Vehicle":"Dodge Challenger","manufacturer":"Jaguar","model":"Silverado","type":"Convertible","fuel":"Electric","color":"salmon","image":"http://loremflickr.com/640/480/nature","id":"17"},{"Vehicle":"Volkswagen Cruze","manufacturer":"Jaguar","model":"Altima","type":"Cargo Van","fuel":"Electric","color":"fuchsia","image":"http://loremflickr.com/640/480/abstract","id":"18"},{"Vehicle":"Aston Martin Impala","manufacturer":"Ford","model":"Challenger","type":"Crew Cab Pickup","fuel":"Hybrid","color":"purple","image":"http://loremflickr.com/640/480/sports","id":"19"},{"Vehicle":"Aston Martin Expedition","manufacturer":"Mercedes Benz","model":"F-150","type":"Convertible","fuel":"Electric","color":"mint green","image":"http://loremflickr.com/640/480/city","id":"20"},{"Vehicle":"Jeep Sentra","manufacturer":"Lamborghini","model":"2","type":"Sedan","fuel":"Diesel","color":"pink","image":"http://loremflickr.com/640/480/fashion","id":"21"},{"Vehicle":"BMW Cruze","manufacturer":"Mazda","model":"Focus","type":"Crew Cab Pickup","fuel":"Gasoline","color":"lavender","image":"http://loremflickr.com/640/480/cats","id":"22"},{"Vehicle":"Aston Martin Spyder","manufacturer":"Mazda","model":"Roadster","type":"Cargo Van","fuel":"Hybrid","color":"magenta","image":"http://loremflickr.com/640/480/fashion","id":"23"},{"Vehicle":"Smart Explorer","manufacturer":"Kia","model":"Land Cruiser","type":"Passenger Van","fuel":"Gasoline","color":"white","image":"http://loremflickr.com/640/480/animals","id":"24"},{"Vehicle":"Porsche Altima","manufacturer":"Bentley","model":"2","type":"Minivan","fuel":"Gasoline","color":"ivory","image":"http://loremflickr.com/640/480/people","id":"25"},{"Vehicle":"Bugatti Aventador","manufacturer":"Ferrari","model":"2","type":"Convertible","fuel":"Electric","color":"black","image":"http://loremflickr.com/640/480/cats","id":"26"},{"Vehicle":"Volkswagen Wrangler","manufacturer":"Jeep","model":"Roadster","type":"Extended Cab Pickup","fuel":"Gasoline","color":"ivory","image":"http://loremflickr.com/640/480/people","id":"27"},{"Vehicle":"Hyundai Countach","manufacturer":"Rolls Royce","model":"Sentra","type":"SUV","fuel":"Electric","color":"cyan","image":"http://loremflickr.com/640/480/cats","id":"28"},{"Vehicle":"Porsche Corvette","manufacturer":"Kia","model":"Roadster","type":"Coupe","fuel":"Diesel","color":"lime","image":"http://loremflickr.com/640/480/nightlife","id":"29"},{"Vehicle":"Rolls Royce Cruze","manufacturer":"Fiat","model":"Impala","type":"Cargo Van","fuel":"Gasoline","color":"silver","image":"http://loremflickr.com/640/480/business","id":"30"},{"Vehicle":"Land Rover Impala","manufacturer":"Lamborghini","model":"Sentra","type":"SUV","fuel":"Electric","color":"red","image":"http://loremflickr.com/640/480/technics","id":"31"},{"Vehicle":"Jeep V90","manufacturer":"Polestar","model":"Aventador","type":"Crew Cab Pickup","fuel":"Electric","color":"green","image":"http://loremflickr.com/640/480/fashion","id":"32"},{"Vehicle":"Tesla Model S","manufacturer":"Nissan","model":"Model T","type":"Coupe","fuel":"Hybrid","color":"violet","image":"http://loremflickr.com/640/480/food","id":"33"},{"Vehicle":"Lamborghini Mercielago","manufacturer":"Honda","model":"A8","type":"Wagon","fuel":"Gasoline","color":"green","image":"http://loremflickr.com/640/480/food","id":"34"},{"Vehicle":"Chrysler F-150","manufacturer":"Jaguar","model":"Countach","type":"Wagon","fuel":"Hybrid","color":"yellow","image":"http://loremflickr.com/640/480/nature","id":"35"},{"Vehicle":"Rolls Royce XTS","manufacturer":"Toyota","model":"Accord","type":"Convertible","fuel":"Electric","color":"maroon","image":"http://loremflickr.com/640/480/city","id":"36"},{"Vehicle":"Rolls Royce Silverado","manufacturer":"Ferrari","model":"Fortwo","type":"Minivan","fuel":"Diesel","color":"pink","image":"http://loremflickr.com/640/480/cats","id":"37"},{"Vehicle":"Volkswagen Fortwo","manufacturer":"Rolls Royce","model":"A8","type":"Convertible","fuel":"Gasoline","color":"black","image":"http://loremflickr.com/640/480/people","id":"38"},{"Vehicle":"Cadillac Mustang","manufacturer":"Polestar","model":"Impala","type":"SUV","fuel":"Hybrid","color":"pink","image":"http://loremflickr.com/640/480/abstract","id":"39"},{"Vehicle":"Audi Volt","manufacturer":"Jaguar","model":"A4","type":"SUV","fuel":"Electric","color":"blue","image":"http://loremflickr.com/640/480/people","id":"40"},{"Vehicle":"Audi XTS","manufacturer":"Mini","model":"Model S","type":"Minivan","fuel":"Hybrid","color":"mint green","image":"http://loremflickr.com/640/480/city","id":"41"},{"Vehicle":"Bentley Jetta","manufacturer":"Hyundai","model":"1","type":"Crew Cab Pickup","fuel":"Electric","color":"green","image":"http://loremflickr.com/640/480/abstract","id":"42"},{"Vehicle":"Toyota Roadster","manufacturer":"Toyota","model":"ATS","type":"Crew Cab Pickup","fuel":"Hybrid","color":"cyan","image":"http://loremflickr.com/640/480/people","id":"43"},{"Vehicle":"Porsche Fiesta","manufacturer":"Bentley","model":"El Camino","type":"Passenger Van","fuel":"Electric","color":"cyan","image":"http://loremflickr.com/640/480/sports","id":"44"},{"Vehicle":"Smart Roadster","manufacturer":"Mini","model":"Volt","type":"Coupe","fuel":"Diesel","color":"indigo","image":"http://loremflickr.com/640/480/fashion","id":"45"},{"Vehicle":"Hyundai Model S","manufacturer":"Hyundai","model":"Beetle","type":"Hatchback","fuel":"Diesel","color":"blue","image":"http://loremflickr.com/640/480/business","id":"46"},{"Vehicle":"Fiat Grand Caravan","manufacturer":"Porsche","model":"Camaro","type":"Hatchback","fuel":"Hybrid","color":"lavender","image":"http://loremflickr.com/640/480/cats","id":"47"},{"Vehicle":"Bentley Wrangler","manufacturer":"Porsche","model":"Explorer","type":"Sedan","fuel":"Diesel","color":"orchid","image":"http://loremflickr.com/640/480/people","id":"48"},{"Vehicle":"BMW A4","manufacturer":"Aston Martin","model":"Taurus","type":"Hatchback","fuel":"Gasoline","color":"black","image":"http://loremflickr.com/640/480/technics","id":"49"},{"Vehicle":"Tesla Challenger","manufacturer":"Mercedes Benz","model":"Grand Cherokee","type":"Extended Cab Pickup","fuel":"Gasoline","color":"plum","image":"http://loremflickr.com/640/480/business","id":"50"},{"Vehicle":"Honda Golf","manufacturer":"Fiat","model":"Altima","type":"Hatchback","fuel":"Hybrid","color":"mint green","image":"http://loremflickr.com/640/480/sports","id":"51"},{"Vehicle":"Jeep PT Cruiser","manufacturer":"Ferrari","model":"Golf","type":"Cargo Van","fuel":"Electric","color":"blue","image":"http://loremflickr.com/640/480/technics","id":"52"},{"Vehicle":"Toyota Volt","manufacturer":"Porsche","model":"Altima","type":"Passenger Van","fuel":"Hybrid","color":"teal","image":"http://loremflickr.com/640/480/technics","id":"53"},{"Vehicle":"Mercedes Benz LeBaron","manufacturer":"Toyota","model":"Charger","type":"Wagon","fuel":"Gasoline","color":"orange","image":"http://loremflickr.com/640/480/people","id":"54"},{"Vehicle":"Dodge V90","manufacturer":"Chevrolet","model":"Mercielago","type":"Sedan","fuel":"Hybrid","color":"lavender","image":"http://loremflickr.com/640/480/nightlife","id":"55"},{"Vehicle":"Bentley Model 3","manufacturer":"Ford","model":"Colorado","type":"Cargo Van","fuel":"Gasoline","color":"silver","image":"http://loremflickr.com/640/480/transport","id":"56"},{"Vehicle":"Jaguar XTS","manufacturer":"Honda","model":"Malibu","type":"Extended Cab Pickup","fuel":"Hybrid","color":"grey","image":"http://loremflickr.com/640/480/animals","id":"57"},{"Vehicle":"Rolls Royce Taurus","manufacturer":"Mazda","model":"Mustang","type":"Hatchback","fuel":"Hybrid","color":"mint green","image":"http://loremflickr.com/640/480/city","id":"58"},{"Vehicle":"Chrysler Mustang","manufacturer":"Dodge","model":"PT Cruiser","type":"Convertible","fuel":"Gasoline","color":"pink","image":"http://loremflickr.com/640/480/cats","id":"59"},{"Vehicle":"Honda Roadster","manufacturer":"Volvo","model":"Corvette","type":"Passenger Van","fuel":"Hybrid","color":"ivory","image":"http://loremflickr.com/640/480/fashion","id":"60"},{"Vehicle":"Tesla Malibu","manufacturer":"Mini","model":"A4","type":"Extended Cab Pickup","fuel":"Electric","color":"azure","image":"http://loremflickr.com/640/480/food","id":"61"},{"Vehicle":"Jeep ATS","manufacturer":"Mercedes Benz","model":"CX-9","type":"SUV","fuel":"Diesel","color":"ivory","image":"http://loremflickr.com/640/480/city","id":"62"},{"Vehicle":"Chrysler Element","manufacturer":"Volvo","model":"Prius","type":"Passenger Van","fuel":"Electric","color":"orchid","image":"http://loremflickr.com/640/480/sports","id":"63"},{"Vehicle":"Fiat Altima","manufacturer":"Nissan","model":"Civic","type":"Passenger Van","fuel":"Diesel","color":"grey","image":"http://loremflickr.com/640/480/cats","id":"64"},{"Vehicle":"Audi V90","manufacturer":"Nissan","model":"Cruze","type":"Crew Cab Pickup","fuel":"Hybrid","color":"mint green","image":"http://loremflickr.com/640/480/business","id":"65"},{"Vehicle":"Audi Golf","manufacturer":"Bugatti","model":"Sentra","type":"Extended Cab Pickup","fuel":"Diesel","color":"sky blue","image":"http://loremflickr.com/640/480/abstract","id":"66"},{"Vehicle":"Jeep Volt","manufacturer":"Hyundai","model":"Countach","type":"Hatchback","fuel":"Hybrid","color":"pink","image":"http://loremflickr.com/640/480/food","id":"67"},{"Vehicle":"Ford Accord","manufacturer":"Ferrari","model":"Altima","type":"SUV","fuel":"Diesel","color":"cyan","image":"http://loremflickr.com/640/480/city","id":"68"},{"Vehicle":"Volvo Mustang","manufacturer":"Cadillac","model":"Model S","type":"Hatchback","fuel":"Hybrid","color":"white","image":"http://loremflickr.com/640/480/business","id":"69"},{"Vehicle":"Audi Model S","manufacturer":"Maserati","model":"Alpine","type":"Crew Cab Pickup","fuel":"Electric","color":"white","image":"http://loremflickr.com/640/480/transport","id":"70"},{"Vehicle":"Smart Explorer","manufacturer":"Dodge","model":"Sentra","type":"Extended Cab Pickup","fuel":"Diesel","color":"olive","image":"http://loremflickr.com/640/480/nature","id":"71"},{"Vehicle":"Toyota 1","manufacturer":"Smart","model":"Durango","type":"Minivan","fuel":"Gasoline","color":"orange","image":"http://loremflickr.com/640/480/city","id":"72"},{"Vehicle":"Mazda Golf","manufacturer":"Maserati","model":"Model S","type":"Coupe","fuel":"Diesel","color":"lime","image":"http://loremflickr.com/640/480/city","id":"73"},{"Vehicle":"Hyundai Ranchero","manufacturer":"Lamborghini","model":"Silverado","type":"Hatchback","fuel":"Diesel","color":"lime","image":"http://loremflickr.com/640/480/nightlife","id":"74"},{"Vehicle":"Toyota Jetta","manufacturer":"Polestar","model":"Roadster","type":"Wagon","fuel":"Gasoline","color":"red","image":"http://loremflickr.com/640/480/nightlife","id":"75"},{"Vehicle":"Audi Roadster","manufacturer":"Land Rover","model":"Fiesta","type":"Minivan","fuel":"Electric","color":"silver","image":"http://loremflickr.com/640/480/fashion","id":"76"},{"Vehicle":"Honda Sentra","manufacturer":"Tesla","model":"LeBaron","type":"Wagon","fuel":"Electric","color":"grey","image":"http://loremflickr.com/640/480/animals","id":"77"},{"Vehicle":"Bugatti 1","manufacturer":"BMW","model":"Focus","type":"Passenger Van","fuel":"Electric","color":"tan","image":"http://loremflickr.com/640/480/people","id":"78"},{"Vehicle":"Ford Mercielago","manufacturer":"Kia","model":"Challenger","type":"Minivan","fuel":"Electric","color":"plum","image":"http://loremflickr.com/640/480/food","id":"79"},{"Vehicle":"Land Rover Beetle","manufacturer":"Kia","model":"Grand Caravan","type":"Cargo Van","fuel":"Hybrid","color":"salmon","image":"http://loremflickr.com/640/480/sports","id":"80"},{"Vehicle":"Volkswagen Beetle","manufacturer":"Jeep","model":"Civic","type":"Crew Cab Pickup","fuel":"Hybrid","color":"orchid","image":"http://loremflickr.com/640/480/business","id":"81"},{"Vehicle":"Mini Grand Caravan","manufacturer":"BMW","model":"Grand Cherokee","type":"Convertible","fuel":"Hybrid","color":"magenta","image":"http://loremflickr.com/640/480/animals","id":"82"},{"Vehicle":"Mini Countach","manufacturer":"Fiat","model":"Mercielago","type":"Sedan","fuel":"Gasoline","color":"yellow","image":"http://loremflickr.com/640/480/animals","id":"83"},{"Vehicle":"Nissan Fiesta","manufacturer":"Nissan","model":"Land Cruiser","type":"Cargo Van","fuel":"Electric","color":"lavender","image":"http://loremflickr.com/640/480/sports","id":"84"},{"Vehicle":"Mini CX-9","manufacturer":"Porsche","model":"Expedition","type":"Cargo Van","fuel":"Electric","color":"silver","image":"http://loremflickr.com/640/480/fashion","id":"85"},{"Vehicle":"Polestar Camaro","manufacturer":"Kia","model":"Camry","type":"Hatchback","fuel":"Electric","color":"sky blue","image":"http://loremflickr.com/640/480/sports","id":"86"},{"Vehicle":"Bugatti XTS","manufacturer":"BMW","model":"Explorer","type":"Extended Cab Pickup","fuel":"Gasoline","color":"turquoise","image":"http://loremflickr.com/640/480/people","id":"87"},{"Vehicle":"Land Rover Camry","manufacturer":"Honda","model":"ATS","type":"Extended Cab Pickup","fuel":"Gasoline","color":"mint green","image":"http://loremflickr.com/640/480/cats","id":"88"},{"Vehicle":"Cadillac Malibu","manufacturer":"Chrysler","model":"Silverado","type":"Sedan","fuel":"Electric","color":"azure","image":"http://loremflickr.com/640/480/fashion","id":"89"},{"Vehicle":"Maserati Element","manufacturer":"Maserati","model":"Land Cruiser","type":"Minivan","fuel":"Hybrid","color":"purple","image":"http://loremflickr.com/640/480/city","id":"90"},{"Vehicle":"Porsche Expedition","manufacturer":"Kia","model":"Mustang","type":"Crew Cab Pickup","fuel":"Diesel","color":"green","image":"http://loremflickr.com/640/480/business","id":"91"},{"Vehicle":"Mercedes Benz Corvette","manufacturer":"Ford","model":"Volt","type":"Passenger Van","fuel":"Diesel","color":"maroon","image":"http://loremflickr.com/640/480/people","id":"92"},{"Vehicle":"Ford CX-9","manufacturer":"Cadillac","model":"Wrangler","type":"Extended Cab Pickup","fuel":"Hybrid","color":"indigo","image":"http://loremflickr.com/640/480/business","id":"93"},{"Vehicle":"Honda A8","manufacturer":"Chrysler","model":"XTS","type":"Wagon","fuel":"Electric","color":"azure","image":"http://loremflickr.com/640/480/city","id":"94"},{"Vehicle":"Tesla El Camino","manufacturer":"Rolls Royce","model":"F-150","type":"Crew Cab Pickup","fuel":"Electric","color":"teal","image":"http://loremflickr.com/640/480/nature","id":"95"},{"Vehicle":"Kia PT Cruiser","manufacturer":"Chrysler","model":"Charger","type":"Convertible","fuel":"Diesel","color":"violet","image":"http://loremflickr.com/640/480/technics","id":"96"},{"Vehicle":"Kia Silverado","manufacturer":"Land Rover","model":"Wrangler","type":"Crew Cab Pickup","fuel":"Gasoline","color":"blue","image":"http://loremflickr.com/640/480/technics","id":"97"},{"Vehicle":"Honda Countach","manufacturer":"Mazda","model":"CTS","type":"Cargo Van","fuel":"Electric","color":"silver","image":"http://loremflickr.com/640/480/city","id":"98"},{"Vehicle":"Jaguar Alpine","manufacturer":"Ferrari","model":"Volt","type":"Sedan","fuel":"Gasoline","color":"green","image":"http://loremflickr.com/640/480/nightlife","id":"99"},{"Vehicle":"Hyundai Corvette","manufacturer":"Kia","model":"Wrangler","type":"Hatchback","fuel":"Diesel","color":"red","image":"http://loremflickr.com/640/480/sports","id":"100"}]

  constructor() { }

  ngOnInit(): void {
  }

}
