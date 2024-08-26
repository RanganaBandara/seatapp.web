/*import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'seatapp.web';
  http=inject(HttpClient);


  LoginForm=new FormGroup({
Email:new FormControl<string|null>(''),
Password:new FormControl<string|null>('')

  })
  onLoginSubmited(){
    const addloginrequest={
      Email:this.LoginForm.value.Email,
      Password:this.LoginForm.value.Password
    }
    this.http.post('http://localhost:5121/User/Login',addloginrequest).subscribe({
      next:(value)=>{
        console.log(value);
      }
    })
  }


}
*/
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seatapp.web';
  http = inject(HttpClient);
  router = inject(Router);

  LoginForm = new FormGroup({
    Email: new FormControl<string | null>(''),
    Password: new FormControl<string | null>('')
  });

  onLoginSubmited() {
    const addloginrequest = {
      Email: this.LoginForm.value.Email,
      Password: this.LoginForm.value.Password
    };
    this.http.post('http://localhost:5121/User/Login', addloginrequest).subscribe({
      next: (value) => {
        console.log(value);
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
