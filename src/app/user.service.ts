import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string; password: string }[] = [];

  addUser(user: { username: string; password: string }): boolean {
    if (this.users.some(u => u.username === user.username)) {
      return false;
    }
    this.users.push(user);
    return true;
  }

  getUsers() {
    return this.users;
  }

  deleteUser(username: string) {
    this.users = this.users.filter(user => user.username !== username);
  }
}
