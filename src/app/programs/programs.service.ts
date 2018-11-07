import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {


  constructor(private http: HttpClient,
    public snackBar: MatSnackBar) { }
  public httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://netcoretri30days.azurewebsites.net',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Max-Age': '86400'
    })
  };
  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
      // horizontalPosition: 'right'
    });
  }
  public getData(
  ): Observable<any> {
    const getURL = 'https://netcoretri30days.azurewebsites.net/api/user/GetAllUser';
    return this.http.get<any>(getURL, this.httpOptions);
  }
  public getUbikeData(): Observable<any> {
    const URL = 'http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001';
    return this.http.get<any>(URL, this.httpOptions);
  }
  // http呼叫錯誤處理
  public HandleError(e: any): void {
    console.log(e.error.Message);
    alert(e.error.Message);
  }
}
