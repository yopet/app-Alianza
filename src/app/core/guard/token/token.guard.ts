import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '@Service/servicio.service';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard  {
  constructor( private router: Router , private servicio: ServicioService) { }
  canActivate(): boolean  {   
   const data = localStorage.getItem('token') || '' ;    
   const token = JSON.parse(atob(data?.split('.')[1]));
    if (Object.keys(token).length !== 0 ){    
      return true ;
    } 
    this.router.navigate(['/login']);
    return false
  }


  
  
}
