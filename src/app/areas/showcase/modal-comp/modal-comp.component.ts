import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.scss'],
})
export class ModalCompComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalCompComponent>,
    @Inject(MAT_DIALOG_DATA) public str: string
  ) {}
}
