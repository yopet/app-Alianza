import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServicioService } from '@Service/servicio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSort } from '@angular/material/sort';
import { CustomerService } from '../services/customer.service';
import { DetailCustomerComponent } from '../detail-customer/detail-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [ 'sharedKey', 'name','email', 'phone','dataAdded', 'completed'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private changeDetector: ChangeDetectorRef,
    public servicio: ServicioService,
    public customerService: CustomerService,
    public dialog: MatDialog,
  ) {
    this.getListCustomer();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.servicio.option = 'Customers';
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  getListCustomer() {
    this.customerService.ListCustomer().subscribe((response: any) => {      
      this.dataSource.data = response;
      this.dataSource.sort = this.sort;
      this.table.renderRows();
    });
    
  }

  openDialog(type: any, row: any = ''): void {
    const dialogRef = this.dialog.open(DetailCustomerComponent, {      
      data: { type: type, table: row },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
     
      this.getListCustomer();
     
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



 
 
}
