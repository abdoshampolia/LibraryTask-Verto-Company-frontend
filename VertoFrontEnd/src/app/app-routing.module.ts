import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Verto/Account/login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, children: [
      {path: 'home',component: LoginComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'verto', loadChildren: () => import('./Verto/verto.module').then(m => m.VertoModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
