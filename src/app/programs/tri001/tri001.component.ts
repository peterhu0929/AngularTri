import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tri001',
  templateUrl: './tri001.component.html',
  // styleUrls: ['./tri001.component.css']
})
export class Tri001Component implements OnInit {
  public item: any;
  constructor(
    private programService: ProgramsService) { }

  ngOnInit() {
    this.getUser();
  }
  public openSnackbar() {
    this.programService.openSnackBar('鐵人三十天測試一波', '完成');
  }
  getUser() {
    this.programService.getData()
      .subscribe(
        (response: any) => {
          this.item = response;
          // console.log(this.item);
        }
        , (error: HttpErrorResponse) => this.programService.HandleError(error)
      );
  }
}
