import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, UnAuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UnAuthGuard
  ]
})
export class CoreModule { }
