import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ServicioService } from "../../Servicio/servicio.service";
import { Router } from '@angular/router';
import { LoaderService } from '@Service/loader.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent  {

  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public loader: LoaderService,private breakpointObserver: BreakpointObserver ,public servicio: ServicioService,private readonly router: Router,) {
    
  }
 

  
  public async logout(): Promise<void> {   
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login');      
  }


  
}
