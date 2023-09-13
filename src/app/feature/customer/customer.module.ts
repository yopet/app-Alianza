import { NgModule } from '@angular/core';
import { CurrencyPipe  } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';




@NgModule({
    imports: [  CoreModule,CustomerRoutingModule],
    
  declarations: [ListCustomerComponent,DetailCustomerComponent],
  providers:    [ CurrencyPipe ]
})
export class CustomerModule {
}