import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EFormRegisterPage } from './e-form-register.page';

const routes: Routes = [
  {
    path: '',
    component: EFormRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EFormRegisterPage]
})
export class EFormRegisterPageModule {}
