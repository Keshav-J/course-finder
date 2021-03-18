import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTERURL } from 'src/app/core/constants/urlconstants';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLogin: boolean = true;
  signinForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  signupForm = this.formBuilder.group({
    username: '',
    email: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signin(): void {
    const username = this.signinForm.value.username;
    const password = this.signinForm.value.password;

    if(this.authService.signin(username, password)) {
      // this.router.navigate(['/dashboard']);
      location.reload();
    } else {
      alert('Invalid username or password!');
    }
  }

  signup(): void {
    const username = this.signinForm.value.username;
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;

    if(this.authService.signup(username, email, password)) {
      // this.router.navigate(['/dashboard']);
      location.reload();
    } else {
      alert('Something went wrong...!');
    }
  }

  toggle(): void {
    this.isLogin = !this.isLogin;
  }

}
