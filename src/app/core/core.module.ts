import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtInterceptor } from './interceptor/jwt.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule, MaterialModule ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule,MaterialModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class CoreModule {}
