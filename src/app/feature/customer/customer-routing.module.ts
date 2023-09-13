import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from '@core/guard/token/token.guard';
import { ListCustomerComponent } from './list-customer/list-customer.component';
const routes: Routes = [
  { path: 'list', component: ListCustomerComponent , canActivate: [TokenGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {
}
