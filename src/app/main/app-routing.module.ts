import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, UnAuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [UnAuthGuard],
    loadChildren: () => import('src/app/main/auth/auth.module')
                        .then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/main/dashboard/dashboard.module')
                        .then(m => m.DashboardModule)
  },
  {
    path: 'course',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/main/course/course.module')
                        .then(m => m.CourseModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
