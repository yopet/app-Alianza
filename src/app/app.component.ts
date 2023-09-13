import { LoaderService } from '@Service/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'app-Alianza';
  constructor(public loader: LoaderService) {}
 
}
