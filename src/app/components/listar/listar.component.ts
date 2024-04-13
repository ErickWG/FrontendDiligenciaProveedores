import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/model/proveedores';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import { MatSort } from '@angular/material/sort';
import { DialogScreeningComponent } from '../dialog-screening/dialog-screening.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['proveedorId', 'razonSocial', 'nombreComercial', 'identificacionTributaria', 'numeroTelefonico', 'correoElectronico', 'sitioWeb', 'direccionFisica','pais','facturacionAnual','fechaUltimaEdicion','actions'];
  dataSource = new MatTableDataSource<Proveedor>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public proveedorService: ProveedoresService, private router: Router, private snackBar: MatSnackBar, public dialog: MatDialog) {}

  currentSort: { active: string, direction: 'asc' | 'desc' } = { active: 'fechaUltimaEdicion', direction: 'asc' };


  ngOnInit(): void {
    this.getProveedor();
    this.dataSource.sort = this.sort;
  }
  

  getProveedor() {
    this.proveedorService.list().subscribe(data => {
      this.dataSource.data = data.sort((a, b) => this.compare(a, b, 'desc'));
      this.dataSource.paginator = this.paginator;
    });
  }
  

  compare(a: any, b: any, direction: string): number {
    const aValue = a[this.currentSort.active];
    const bValue = b[this.currentSort.active];
  
    if (aValue < bValue) {
      return direction === 'asc' ? -1 : 1;
    } else if (aValue > bValue) {
      return direction === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  }
  
  
  openConfirmDialog(id:number): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id)
      } else {
        console.log('Cancelado');
      }
    });
  }
  openEditDialog(proveedor: any): void {
    if (proveedor==null) { //to create a new proveedor
      const dialogRef = this.dialog.open(DialogEditComponent, {
        width: '600px',
        data: { ...proveedor } 
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Agregado:', result);

          this.add(result);
  
          console.log(result.proveedorId, result);
        }
      });
    }
    else{
      const dialogRef = this.dialog.open(DialogEditComponent, {
        width: '600px',
        data: { ...proveedor } 
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Cambios guardados:', result);
  
          this.edit(result.proveedorId, result);
          console.log(result.proveedorId, result);
        }
      });
    }
  }
  openDialogScreeningOptions(razonSocial: any)  {
    const dialogRef = this.dialog.open(DialogScreeningComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/OFAC',razonSocial]);

      } else {
        this.router.navigate(['/Offshore',razonSocial]);
      }
    });
  }
  edit(id: number, proveedor: any): void {
    proveedor.FechaUltimaEdicion = new Date();
    proveedor.FechaUltimaEdicion.setHours(proveedor.FechaUltimaEdicion.getHours() - 5);
        this.proveedorService.update(id, proveedor).subscribe({
      next: (data) => {
        this.snackBar.open('Proveedor editado correctamente', '', {
          duration: 3000
        });

        this.getProveedor();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  delete(id: any) {
    this.proveedorService.delete(id).subscribe({
    next: (data) => {
      this.snackBar.open('Proveedor eliminado correctamento', '', {
        duration: 3000
      })
      this.getProveedor()
      this.router.navigate(['/list'])

    },
    error: (err) => {
      console.log(err)
    },
  })}
  add(proveedor:any) {
    this.proveedorService.add(proveedor).subscribe({
      next: (data) => {
        console.log("ingresando registro...")
        this.snackBar.open('Proveedor creado correctamento', '', {
          duration: 3000
        })
        this.getProveedor();

      },
      error: (err) => {
        console.log(err)
      },
    })
  }


}
