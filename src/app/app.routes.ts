import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SeatResComponent } from './seat-res/seat-res.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PaymentComponent } from './payment/payment.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },          
  { path: 'register', component: RegisterComponent },   
  { path: 'seat-res', component:SeatResComponent },  
  { path: 'home', component:HomeComponent},
  { path: 'forget-password', component:ForgetPasswordComponent},
  { path: 'payment', component:PaymentComponent}

];
