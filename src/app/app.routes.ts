import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SeatResComponent } from './seat-res/seat-res.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },          
  { path: 'register', component: RegisterComponent },   
  { path: 'seat-res', component:SeatResComponent },    
];
