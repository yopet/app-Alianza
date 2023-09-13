import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { NavigationModule } from './navigation/navigation.module';


@NgModule({

  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
    CoreModule
  ],

  declarations: [ 
  ]
})
export class FeatureModule { }
