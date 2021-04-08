import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLogin = true;
  signinForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  signupForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signin(): void {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;

    if (this.authService.signin(email, password)) {
      // this.router.navigate(['/dashboard']);
      location.reload();
    } else {
      alert('Invalid email or password!');
    }
  }

  signup(): void {
    const name = this.signinForm.value.name;
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;

    if (this.authService.signup(name, email, password)) {
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
