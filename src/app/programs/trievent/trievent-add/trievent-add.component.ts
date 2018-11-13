import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Triathlon } from 'src/app/_models/triathlon';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { ProgramsService } from '../../programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EVENT } from 'src/app/_models/event';
import { RecordGroup } from 'src/app/_models/RecordGroup';
@Component({
  selector: 'app-trievent-add',
  templateUrl: './trievent-add.component.html'
})
export class TrieventAddComponent implements OnInit {
  public newTridata: Triathlon = new Triathlon();
  public newEvent: EVENT = new EVENT();
  public Events: Array<EVENT> = new Array<EVENT>();
  Month = 12;
  Eventstatus: RecordGroup[] = [
    { CODE: '-100', NAME: '報名已截止' },
    { CODE: '0', NAME: '尚未開始報名' },
    { CODE: '100', NAME: '報名中' }
  ];
  months: RecordGroup[] = [
    { CODE: '01', NAME: '1' },
    { CODE: '02', NAME: '2' },
    { CODE: '03', NAME: '3' },
    { CODE: '04', NAME: '4' },
    { CODE: '05', NAME: '5' },
    { CODE: '06', NAME: '6' },
    { CODE: '07', NAME: '7' },
    { CODE: '08', NAME: '8' },
    { CODE: '09', NAME: '9' },
    { CODE: '10', NAME: '10' },
    { CODE: '11', NAME: '11' },
    { CODE: '12', NAME: '12' },
  ];
  constructor(
    private location: Location,
    private programService: ProgramsService,
    private shareDialogService: ShareDialogService
  ) { }

  ngOnInit() { }

  /**回前頁 */
  goBack() {
    this.location.back();
  }
  createTriData(item: Triathlon) {
    // this.shareDialogService.openShareDialog(JSON.stringify(item));
    this.programService.postBackendData(item).subscribe(
      (response: any) => {
        // console.log(item);
        // this.programService.openSnackBar(response.isSuccess, '已新增');
        this.shareDialogService.openShareDialog(response.data.name + '新增成功');
        // console.log(response);
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }
  addEvent2TriData(item: EVENT) {
    // console.log(item);
    this.Events.push(item);
    // console.log(this.Events);
    this.newTridata.tri_event = this.Events;
    // console.log(this.newTridata);
    this.newEvent = new EVENT();
  }
}
