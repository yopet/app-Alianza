
import {LoginComponent} from '../login/login/login.component'

import { NgModule } from '@angular/core';


import { CoreModule } from '@core/core.module';


@NgModule({
 
  imports: [
    CoreModule
  ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
