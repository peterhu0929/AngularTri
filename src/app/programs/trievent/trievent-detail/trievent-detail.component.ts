import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EVENT } from '../../../_models/event';

@Component({
  selector: 'app-trievent-detail',
  templateUrl: './trievent-detail.component.html'
})
export class TrieventDetailComponent implements OnInit {


  public eventData: Array<EVENT> = new Array<EVENT>();

  constructor(
    public dialogRef: MatDialogRef<TrieventDetailComponent>, // 定義dialog
    @Inject(MAT_DIALOG_DATA) public data: any, // 接收從主頁面來的資料
  ) { }

  ngOnInit() {
    this.eventData = this.data.pData;
    console.log(this.eventData);
  }

}
