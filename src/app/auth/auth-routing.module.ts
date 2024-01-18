import { RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
  RouterModule.forChild([
    { path: 'login', component: LoginComponent },
  ])
  ],
})
export class AuthRoutingModule {}
