import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: { firstname: string; lastname: string; username: string; password: string }[] = [];

  @Output() userDeleted = new EventEmitter<string>();

  deleteUser(username: string) {
    this.userDeleted.emit(username);
  }
}
