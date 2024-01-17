import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  userList: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(userList => this.userList = userList);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
    .subscribe(selectedUser => this.getUsers());
  }
}