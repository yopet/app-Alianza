import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
 
   {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./login/login.module').then(i => i.LoginModule),
  },
  {
    path: 'Dashboard',
    component: NavigationComponent,
    loadChildren: () => import('./navigation/navigation.module').then(i => i.NavigationModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}
