import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id:1,
        First_Name: 'Sumit',
        Last_Name: 'Kumar',
        Email: 'sumit@gmail.com',
        IsActive: true
      },
      {
        id:2,
        First_Name: 'Arun',
        Last_Name: 'Singh',
        Email: 'arun@gmail.com',
        IsActive: true
      },
      {
        id:3,
        First_Name: 'Kiran',
        Last_Name: 'Porwal',
        Email: 'kiran@gmail.com',
        IsActive: false
      },
      {
        id:4,
        First_Name: 'Prateek',
        Last_Name: 'Kumar',
        Email: 'prateek@gmail.com',
        IsActive: true
      },
      {
        id:5,
        First_Name: 'Kaushal',
        Last_Name: 'Sharma',
        Email: 'kaushal@gmail.com',
        IsActive: true
      }
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}