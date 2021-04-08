import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserApi } from '../../api/user/user.api';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private router: Router, private userApi: UserApi) { }

  autoLogin(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    console.log(user);

    if (!user) {
      return;
    }

    console.log(user);
    this.handleAuthentication(user.name, user.email);
  }

  logout(): void {
    this.user.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

  signup(name: string, email: string, password: string): Subscription {
    const signupResponse = this.userApi.signupUser(name, email, password);
    console.log(signupResponse);

    // tslint:disable-next-line: deprecation
    return signupResponse.subscribe(
      (data: User) => {
        console.log('authService signup =>', data);
        this.handleAuthentication(data.email, data.name);
        return true;
      },
      (error: HttpErrorResponse) => {
        console.error(error.statusText);
        return false;
      }
    );
  }

  signin(email: string, password: string): Subscription {
    const signinResponse = this.userApi.signinUser(email, password);
    console.log(signinResponse);

    // tslint:disable-next-line: deprecation
    return signinResponse.subscribe(
      (data: User) => {
        console.log('authService signin =>', data);
        this.handleAuthentication(data.email, data.name);
        return true;
      },
      (error: HttpErrorResponse) => {
        console.error(error.statusText);
        return false;
      }
    );
  }

  handleAuthentication(email: string, name: string = 'admin'): void {
    const user = new User(1, 'admin', email);
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
