
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';


const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
}

@Injectable()
export class UserService {

  apiUrl = 'http://localhost:3000';
  usersUrl = `${this.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(map(data => data));
  }
}