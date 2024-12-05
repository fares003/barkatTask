import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  signin() {
    if (this.username === 'admin' && this.password === 'password123') {
      this.successMessage = 'You have successfully signed in!';
      this.errorMessage = '';
      this.router.navigate(['/users']); // After sign-in, redirect to the user list page
    } else {
      this.errorMessage = 'Invalid username or password!';
      this.successMessage = '';
    }
  }
}
