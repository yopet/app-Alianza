import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private Url = `${environment.API_URL}/login`;

  constructor(private http: HttpClient) { }
  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(datos: any){    
    return this.http.post(this.Url,datos);
  }
}


