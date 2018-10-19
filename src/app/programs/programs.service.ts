import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: HttpClient,
    public snackBar: MatSnackBar) { }
  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
      // horizontalPosition: 'right'
    });
  }
  public getData(
  ): Observable<any> {
    const getURL = 'https://wapi.gogoro.com/tw/api/vm/list';
    return this.http.get<any>(getURL);
  }
  // http呼叫錯誤處理
  public HandleError(e: any): void {
    console.log(e.error.Message);
    alert(e.error.Message);
  }
}
