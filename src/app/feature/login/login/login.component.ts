import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioService } from '@Service/servicio.service';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  error: boolean = false;
  hide = true;
  constructor(
    private readonly router: Router,
    public fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public servicio: LoginService,
    public service: ServicioService
  ) {
    this.myForm = fb.group({
      username: ['prueba@alianza.co', [Validators.required]],
      password: ['123456789', [Validators.required, Validators.minLength(5)]],
    });
  }
  ngOnInit(): void {}

  /**
   * Este método no se puede modificar
   * */
  public redirect(): void {
    this.router.navigateByUrl('/Dashboard/customer');
  }

  get getControl(): any {
    return this.myForm.controls;
  }

  Login() {
     this.servicio.login(this.myForm.value).subscribe({
      next: (response:any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.redirect();
      },
      error: (error) => {
        console.error(error);
      },
    });

    
  }
}
