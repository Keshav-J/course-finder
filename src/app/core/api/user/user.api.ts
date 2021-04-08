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
    if (email !== 'admin@gmail.com' || password !== 'admin') {
      return this.http.get<any>('https://mean-space-invaders.herokuapp.com/getscore', {});
    }

    return new Observable(subscriber => {
      subscriber.next({
        id: 1,
        name: 'admin',
        email
      });
    });
  }
}
