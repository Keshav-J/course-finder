import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApi {

  constructor(private http: HttpClient) { }

  signupUser(name: string, email: string, password: string): Observable<User> {
    return new Observable(subscriber => {
      subscriber.next({
        id: 1,
        name,
        email
      });
    });
  }

  signinUser(email: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:3000/dev/api/login', { email, password });
  }
}
