import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Array to hold users
  users: { firstname: string; lastname: string; username: string; password: string }[] = [];

  // Method to handle adding a user
  onUserAdded(user: { firstname: string; lastname: string; username: string; password: string }) {
    // Check if username already exists
    if (this.users.some(existingUser => existingUser.username === user.username)) {
      alert('Username already exists.');
      return;
    }
    // Add new user to the list
    this.users.push(user);
  }

  // Method to handle deleting a user by username
  onUserDeleted(username: string) {
    this.users = this.users.filter(user => user.username !== username);
  }
}
