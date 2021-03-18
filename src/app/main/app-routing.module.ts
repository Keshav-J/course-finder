import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('src/app/main/auth/auth.module')
                        .then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/main/dashboard/dashboard.module')
                        .then(m => m.DashboardModule)
  },
  {
    path: 'course',
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
