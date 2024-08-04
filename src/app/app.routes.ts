import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', pathMatch: 'full', redirectTo: '/account/login' },
      { path: '', pathMatch: 'full', redirectTo: '/account/login' },

    ],
  },
  { path: 'child', component: ChildComponent },
  { path: '', pathMatch: 'full', redirectTo: '/account' },
  { path: '**', component: ChildComponent },
];
