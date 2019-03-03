import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'ent-reg', loadChildren: './ent-reg/ent-reg.module#EntRegPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
