import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
        { path: 'ext-register/:serial', loadChildren: '../ext-register/ext-register.module#ExtRegisterPageModule' },
        { path: 'ext-view/:serial', loadChildren: '../ext-view/ext-view.module#ExtViewPageModule' },
        { path: 'e-form-register/:serial', loadChildren: '../e-form-register/e-form-register.module#EFormRegisterPageModule' },
        { path: 'admin-reg', loadChildren: '../admin-reg/admin-reg.module#AdminRegPageModule' },
        { path: 'admin-login', loadChildren: '../admin-login/admin-login.module#AdminLoginPageModule' },
        { path: 'user-reg', loadChildren: '../user-reg/user-reg.module#UserRegPageModule' },
        { path: 'coment-reg/:serial', loadChildren: '../coment-reg/coment-reg.module#ComentRegPageModule' },
        { path: 'form-list/:serial', loadChildren: '../form-list/form-list.module#FormListPageModule' },
        { path: 'eform-edit/:id', loadChildren: '../eform-edit/eform-edit.module#EFormEditPageModule' },
        { path: 'ext-list', loadChildren: '../ext-list/ext-list.module#ExtListPageModule' },
        { path: 'user-list', loadChildren: '../user-list/user-list.module#UserListPageModule' },
        { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
        { path: 'login', loadChildren: '../login/login.module#LoginPageModule' }
    ]
  },
    {
        path: '',
        redirectTo: '/menu/login'
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
