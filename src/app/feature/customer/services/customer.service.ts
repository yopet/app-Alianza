import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private Url = `${environment.API_URL}/customer`;
  
  constructor(private http: HttpClient) { }
  
  public ListCustomer(){    
    return this.http.get( this.Url);
  }
  createCustomer(datos: any) {
    return this.http.post(this.Url,datos);
  }
}


