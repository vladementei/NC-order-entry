import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../models/dialog-data.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})

export class DialogComponent implements OnInit {
  constructor(public matDialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
  ngOnInit(): void {
  }
  close(): void {
    this.matDialogRef.close();
  }

}
