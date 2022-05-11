import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthMainGuard } from './@shared/guard/auth-main.guard';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./login-register/login-register.module').then(m => m.LoginRegisterModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./login-register/login-register.module').then(m => m.LoginRegisterModule),
  },
  {
    path: 'home',
    loadChildren:() => import('./main/main.module').then(m => m.MainModule),
    canActivate: [AuthMainGuard]
  },
  {
    path: '**',
    redirectTo: 'login' // home or 404
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
