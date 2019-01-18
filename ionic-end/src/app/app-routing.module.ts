import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'ext-register/:serial', loadChildren: './ext-register/ext-register.module#ExtRegisterPageModule' },
  { path: 'ext-view/:serial', loadChildren: './ext-view/ext-view.module#ExtViewPageModule' },
  { path: 'e-form-register/:serial', loadChildren: './e-form-register/e-form-register.module#EFormRegisterPageModule' },
  { path: 'admin-reg', loadChildren: './admin-reg/admin-reg.module#AdminRegPageModule' },
  { path: 'admin-login', loadChildren: './admin-login/admin-login.module#AdminLoginPageModule' },
  { path: 'user-reg', loadChildren: './user-reg/user-reg.module#UserRegPageModule' },
  { path: 'coment-reg/:serial', loadChildren: './coment-reg/coment-reg.module#ComentRegPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
