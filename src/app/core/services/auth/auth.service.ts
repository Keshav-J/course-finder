import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) { }

  autoLogin(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.user.next(user);
  }

  logout(): void {
    this.user.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

  signup(username: string, email: string, password: string): boolean {
    this.handleAuthentication(username, email);
    return true;
  }

  signin(username: string, password: string, email: string = 'admin@gmail.com'): boolean {
    if(username === 'admin' && password === 'admin') {
      this.handleAuthentication(username, email);
      return true;
    } else {
      return false;
    }
  }

  handleAuthentication(username: string, email: string = 'admin@gmail.com') {
    const user = new User(username, email);
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
