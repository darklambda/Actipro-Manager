import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'ext-register/:serial', loadChildren: './ext-register/ext-register.module#ExtRegisterPageModule' },
  { path: 'ext-view/:serial', loadChildren: './ext-view/ext-view.module#ExtViewPageModule' },
  { path: 'e-form-register/:serial', loadChildren: './e-form-register/e-form-register.module#EFormRegisterPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
