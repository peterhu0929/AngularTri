import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GGR } from 'src/app/_models/ggr';
import { YoubikeStation } from '../../_models/youbike-station';
import { ThrowStmt } from '@angular/compiler';
import { ShareDialogService } from 'src/app/share-dialog/share-dialog.service';
import { ShareDialogComponent } from 'src/app/share-dialog/share-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tri001',
  templateUrl: './tri001.component.html',
  // styleUrls: ['./tri001.component.css']
})
export class Tri001Component implements OnInit {
  public item: any;
  public items: Array<any>;
  public uBike: Array<YoubikeStation> = new Array<YoubikeStation>();
  // public uBike: any;
  public uBikeOneSelected: Array<YoubikeStation> = new Array<YoubikeStation>();
  public uBikeData: YoubikeStation = new YoubikeStation(); // 關鍵要new
  public selectedData: YoubikeStation;
  // public vAddress: Array<VALUE_LANG>;
  public strFormChild = ''; // <==兒子的回傳值的顯示屬性

  constructor(
    private programService: ProgramsService,
    private shareDialogService: ShareDialogService,
  ) { }

  ngOnInit() {
    this.getData();
    // this.getUbikeData();
  }
  // Child模板事件發生時，會呼叫此方法回傳值
  onListenChild($event: any) {
    console.log($event);
    this.strFormChild = $event as string;
  }
  public openSnackbar() {
    this.shareDialogService.openShareDialog('鐵人三十天測試一波');
  }
  public openDialog(item?: any) {
    // this.shareDialogService.openShareDialog('鐵人三十天測試一波');
    this.shareDialogService.openShareDialog(JSON.stringify(this.uBike[2]));
  }
  getData() {
    this.programService.getData()
      .subscribe(
        (response: any) => {
          this.items = response;
          // 20181022
          // this.items.map(x => { x.Address = JSON.parse(x.Address), x.City = JSON.parse(x.City); });
          // this.items[0].Address.List[1].Value
          // this.items.map(y => y.Address[0].Value);

          // const t = JSON.parse(this.items[0].Address);
          // this.vAddress = t.List[1].Value;
          // const u = s.filter(x => x.LANG = 'zh-TW');
          console.log(this.items);
        }
        , (error: HttpErrorResponse) => this.programService.HandleError(error)
      );
  }
  getUbikeData() {
    this.programService.getUbikeData().subscribe(
      (response: any) => {
        this.uBike = response.result.records,
          console.log(this.uBike);
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }
  getUikeDataStation(item: YoubikeStation) {
    // this.uBikeData = item;
    this.uBikeOneSelected = [];

    // const refreshTime = item.mday.substring(0, 4);

    // item.mday = refreshTime;

    this.uBikeOneSelected.push(item);
    console.log(this.uBikeData);
    this.programService.openSnackBar(item.lat, item.lng);
  }
}
