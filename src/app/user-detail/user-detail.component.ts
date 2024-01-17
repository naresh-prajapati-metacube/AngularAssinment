import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: number = 0;
  selectedUser: User = {
    "id": 0,
    First_Name: '',
    Last_Name: '',
    Email: '',
    IsActive: false
  };

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.getUser(this.userId);
  }

  getUser(id: number) {
    this.userService.getUser(id)
    .subscribe(selectedUser => this.selectedUser = selectedUser);
  }



}
