import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {
  constructor (
    public dialogo: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string)
    {
    }
    cerrarDialogo(): void {
      this.dialogo.close(false)
    }
    confirmado(): void {
      this.dialogo.close(true)
    }
    ngOnInit() {}
}
