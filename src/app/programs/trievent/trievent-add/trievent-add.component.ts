import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Triathlon } from 'src/app/_models/triathlon';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { ProgramsService } from '../../programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EVENT } from 'src/app/_models/event';
@Component({
  selector: 'app-trievent-add',
  templateUrl: './trievent-add.component.html'
})
export class TrieventAddComponent implements OnInit {
  public newTridata: Triathlon = new Triathlon();
  public newEvent: EVENT = new EVENT();
  public Events: Array<EVENT> = new Array <EVENT>();
  constructor(
    private location: Location,
    private programService: ProgramsService,
    private shareDialogService: ShareDialogService
  ) {}

  ngOnInit() {}

  /**回前頁 */
  goBack() {
    this.location.back();
  }
  createTriData(item: Triathlon) {
    // this.shareDialogService.openShareDialog(JSON.stringify(item));
    this.programService.postBackendData(item).subscribe(
      (response: any) => {
        // console.log(item);
        this.programService.openSnackBar(response.isSuccess, '已新增');
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
