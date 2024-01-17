import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogService } from '../user-log.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addform: FormGroup;
  formSubmited: boolean = false;
  Error_Field="";
  Error_Message="";
  Hint="";

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private userLogService: UserLogService) { }

  ngOnInit(): void {
    this.addform = this.formBuilder.group({
      First_Name: ['', [Validators.required]],
      Last_Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      IsActive: ['', []]
    });
  }

  addUser() {
    this.formSubmited = true;
    
    if (this.addform.invalid) {
      if(this.addform.controls['First_Name'].status=='INVALID') {
        this.Error_Field="First Name";
        this.Error_Message="First Name field is required";
        this.Hint="Please enter your First Name here";
      } else if(this.addform.controls['Last_Name'].status=='INVALID') {
        this.Error_Field="Last Name";
        this.Error_Message="Last Name field is required";
        this.Hint="Please enter your Last Name here";
      } else if(this.addform.controls['Email'].status=='INVALID') {
        this.Error_Field="Email";
        this.Error_Message="Email field is required";
        this.Hint="Please enter your Email here";
      }
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
      this.userLogService.logMyDetail(user);
      this.router.navigate(['/user-list']);
    });
  }
}