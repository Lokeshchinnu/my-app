import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GPayComponent } from './g-pay/g-pay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostsComponent } from './posts/posts.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehilcesComponent } from './vehicles/vehilces.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent , canActivate:[AuthGuard], children:[
    {path:'calculator', component:CalculatorComponent},
    {path:'interpolation', component:InterpolationComponent},
    {path:'event-binding', component:EventBindingComponent},
    {path:'two-way-binding', component:TwoWayBindingComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'square', component:SquareComponent},
    {path:'power', component:PowerComponent},
    {path:'event-registration', component:EventRegistrationComponent},
    {path:'employee-registration', component:EmployeeRegistrationComponent},
    {path:'cart', component:CartComponent},
    {path:'pipes', component:PipesComponent},
    {path:'car', component:CarsComponent},
    {path:'star',component:StarComponent},
    {path:'g-pay',component:GPayComponent},
    {path:'bank', component:BankComponent},
    {path: 'vehicle', component:VehilcesComponent},
    {path:'post', component:PostsComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'mail', component:MailComponent},
    {path:'boredom',component:BoredomComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent, canDeactivate:[NotifyGuard]},
    {path:'bank-details/:id',component:BankDetailsComponent},
    {path:'create-account', component:CreateAccountComponent, canDeactivate:[NotifyGuard] }
  ]},
  {path:'', component: LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
