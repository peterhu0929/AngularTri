import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GGR } from 'src/app/_models/ggr';

@Component({
  selector: 'app-tri001',
  templateUrl: './tri001.component.html',
  // styleUrls: ['./tri001.component.css']
})
export class Tri001Component implements OnInit {
  public item: any;
  public items: Array<GGR>;
  // public vAddress: Array<VALUE_LANG>;
  constructor(
    private programService: ProgramsService) { }

  ngOnInit() {
    this.getData();
  }
  public openSnackbar() {
    this.programService.openSnackBar('鐵人三十天測試一波', '完成');
  }
  getData() {
    this.programService.getData()
      .subscribe(
        (response: any) => {
          this.items = response.data;
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
}
