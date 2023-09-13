import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { NavigationRoutingModule } from './navigation.-routing.module';
import { CoreModule } from '@core/core.module';

@NgModule({
    imports: [  
        NavigationRoutingModule,
        CoreModule],
        
    declarations: [NavigationComponent]
})
export class NavigationModule {
}