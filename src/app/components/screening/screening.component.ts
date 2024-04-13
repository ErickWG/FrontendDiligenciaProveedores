import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Offshore } from 'src/app/model/offshore';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { WebScrapingService } from 'src/app/services/web-scraping.service';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent  implements OnInit {
  public _nombre: string = "";
  totalCoincidencias: number = 0; 


  displayedColumns: string[] = ['Entity','Jurisdiction','LinkedTo','DataFrom'];
  dataSource=new MatTableDataSource<Offshore>();

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator

  
  constructor(public webScrapingService:WebScrapingService,public proveedorService: ProveedoresService, 
    private router: Router, private snackBar: MatSnackBar, public dialog: MatDialog,private activatedRoute: ActivatedRoute
    ) {}
  getReporte(){
    this.webScrapingService.getOffshore(this._nombre).subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.totalCoincidencias = data.length;

    })
  }
  ngOnInit(): void {
    this.reactiveForm();

    console.log(this._nombre);
    this.webScrapingService.loginAuth().subscribe((data: any) => {
      sessionStorage.setItem("tokenW", data.token);
      console.log(sessionStorage.getItem("token"));

      
    }, (error) => {
    });  

    this.getReporte();
  }

  reactiveForm(){
    this._nombre = this.activatedRoute.snapshot.params['nombre']

  }
}
