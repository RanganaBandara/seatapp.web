import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'seatapp.web';
  http = inject(HttpClient);
  //router = inject(Router);

  constructor(private fb: FormBuilder, private router: Router) {}

  LoginForm = new FormGroup({
    Email: new FormControl<string | null>(''),
    Password: new FormControl<string | null>('')
  });

  onLoginSubmited() {
    const addloginrequest = {
      Email: this.LoginForm.value.Email,
      Password: this.LoginForm.value.Password
    };
   // this.http.post('http://localhost:5121/User/Login', addloginrequest).subscribe({
     // next: (value) => {
      //  console.log(value);
      }
   // });
  //}

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
