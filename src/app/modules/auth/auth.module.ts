import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login';
import { AuthRoutingModule } from './auth-routing.module';

import { IonInput, IonItem, IonButton, IonNote } from '@ionic/angular/standalone';
import {  } from '@ionic/angular';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonInput,
    IonItem,
    IonButton,
    IonNote
  ]
})
export class AuthModule { }
