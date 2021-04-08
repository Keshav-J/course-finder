import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, UnAuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from './api/user/user.api';
import { DashboardService } from './services/dashboard/dashboard.service';
import { ResourceApi } from './api/resource/resource.api';
import { HelperService } from './helpers/helper.service';

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
    UserApi,
    DashboardService,
    ResourceApi,
    HelperService
  ]
})
export class CoreModule { }
