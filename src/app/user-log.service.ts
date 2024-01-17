import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserLogService {

  constructor() { }

  logMyDetail(user: User) {
    console.log(user);
  }
}