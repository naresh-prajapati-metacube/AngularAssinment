import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  userList: User[] = [];
  selectedUser: User = {
    "id": 0,
    First_Name: '',
    Last_Name: '',
    Email: '',
    IsActive: false
  };

  addform: FormGroup;
  formSubmited: boolean = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUsers();

    this.addform = this.formBuilder.group({
      First_Name: ['', [Validators.required]],
      Last_Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      IsActive: ['', [Validators.required]]
    });
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(userList => this.userList = userList);
  }

  showMe(id: number) {
    this.userService.getUser(id)
    .subscribe(selectedUser => this.selectedUser = selectedUser);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
    .subscribe(selectedUser => this.getUsers());
  }

  addUser() {
    this.formSubmited = true;
    if (this.addform.invalid) {
      return;
    }

    let recentUser = {
      "First_Name": this.addform.controls['First_Name'].value,
      "Last_Name": this.addform.controls['Last_Name'].value,
      "Email": this.addform.controls['Email'].value,
      "IsActive": this.addform.controls['IsActive'].value,
    };
    this.userService.addUser(recentUser)
    .subscribe(user => {
      this.userList.push(user);
    });
  }
}