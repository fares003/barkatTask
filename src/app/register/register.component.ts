import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  @Output() userAdded = new EventEmitter<{ firstname: string; lastname: string; username: string; password: string }>();

  errorMessage: string = '';
  successMessage: string = '';

  register() {
    if (!this.firstname || !this.lastname || !this.username || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required!';
      this.successMessage = '';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      this.successMessage = '';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long!';
      this.successMessage = '';
      return;
    }

    this.errorMessage = '';
    this.successMessage = 'User registered successfully!';

    this.userAdded.emit({
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      password: this.password,
    });

    this.resetForm();
  }

  private resetForm() {
    this.firstname = '';
    this.lastname = '';
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
