import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShareDialogComponent>, // 定義dialog
    @Inject(MAT_DIALOG_DATA) public data: any, // 接收從主頁面來的資料

  ) { }

  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
  }
}
