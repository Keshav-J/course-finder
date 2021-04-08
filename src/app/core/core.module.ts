import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, UnAuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from './api/user/user.api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UnAuthGuard,
    UserApi
  ]
})
export class CoreModule { }
