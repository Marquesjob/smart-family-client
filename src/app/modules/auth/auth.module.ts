import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login';
import { AuthRoutingModule } from './auth-routing.module';

import { IonInput, IonItem, IonButton } from '@ionic/angular/standalone';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonInput,
    IonItem,
    IonButton
  ]
})
export class AuthModule { }
