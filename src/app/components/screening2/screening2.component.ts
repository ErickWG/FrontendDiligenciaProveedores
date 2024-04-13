import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Ofac } from 'src/app/model/ofac';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { WebScrapingService } from 'src/app/services/web-scraping.service';
@Component({
  selector: 'app-screening2',
  templateUrl: './screening2.component.html',
  styleUrls: ['./screening2.component.css']
})
export class Screening2Component implements OnInit {
  public _nombre: string = "";
  totalCoincidencias: number = 0; 

  displayedColumns: string[] = ['Name','Address','Type','Programs','List','Score'];
  dataSource=new MatTableDataSource<Ofac>();

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator

  
  constructor(public webScrapingService:WebScrapingService,public proveedorService: ProveedoresService, 
    private router: Router, private snackBar: MatSnackBar, public dialog: MatDialog,private activatedRoute: ActivatedRoute
    ) {}

    getReporte() {
      this.webScrapingService.getOfac(this._nombre).subscribe(
        (data: Ofac[]) => {
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.totalCoincidencias = data.length;

          console.log(data);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.error('Error obteniendo datos:', error);
          this.snackBar.open('Error obteniendo datos', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        }
      );
    }
    
    
  ngOnInit(): void {
    this.reactiveForm();

    console.log(this._nombre);
    this.webScrapingService.loginAuth().subscribe((data: any) => {
      sessionStorage.setItem("tokenW", data.token);

      
    }, (error) => {
    });  

    this.getReporte();
  }

  reactiveForm(){
    this._nombre = this.activatedRoute.snapshot.params['nombre']

  }

}
