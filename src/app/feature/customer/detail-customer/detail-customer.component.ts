import { CurrencyPipe } from '@angular/common';

import { Component, Inject, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../services/customer.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss'],
})
export class DetailCustomerComponent {
  form: FormGroup;

  @ViewChild(MatTable)
  table!: MatTable<any>;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<DetailCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public customerService: CustomerService,
    private _snackBar: MatSnackBar
  ) {
    dialogRef.disableClose = true;

    this.form = fb.group({
      name: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      phone: [, [Validators.required]],
      startDate: [, [Validators.required]],
      endDate: [, [Validators.required]],
    });
  }

  save() {
    const Customer = this.form.value;
    Customer.dataAdded = new Date();
    Customer.sharedKey = Customer.email.substring(
      0,
      Customer.email.lastIndexOf('@')
    );
    this.customerService.createCustomer(Customer).subscribe((data) => {
      let snackBarRef = this._snackBar.open(
        'Customer creado exitosamente',
        'aceptar',
        {
          duration: 2000,
        }
      );
    }),
      (error: any) => {
        console.error(error);
      };

    this.dialogRef.close();
  }
}
