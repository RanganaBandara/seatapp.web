import { Component,OnInit } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})

export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgetPasswordForm.valid) {
      // Implement your password reset logic here
      console.log('Email:', this.forgetPasswordForm.value.email);
    }
  }
}
