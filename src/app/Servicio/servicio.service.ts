import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class ServicioService {

 
  private _option: any = 'Inicio';

  public get option(): any {
    return this._option;
  }
  public set option(value: any) {
    this._option = value;
  }


  constructor(private httpClient: HttpClient) {}

 
}
