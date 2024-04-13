import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-screening',
  templateUrl: './dialog-screening.component.html',
  styleUrls: ['./dialog-screening.component.css']
})
export class DialogScreeningComponent implements OnInit  {


  constructor (
    public dialogo: MatDialogRef<DialogScreeningComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {
    }
    cerrarDialogo(): void {
      this.dialogo.close()
    }
    OffShore(){
      this.dialogo.close(false);
    }
    OFAC(){
      this.dialogo.close(true);
    }

    ngOnInit() {}
}
