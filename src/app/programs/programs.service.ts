import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Triathlon } from '../_models/triathlon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProgramsService {


  constructor(private http: HttpClient,
    public snackBar: MatSnackBar) { }

  public updateData: Triathlon;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
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
  public getBackendData(
  ): Observable<any> {
    const getURL = environment.TriBackendAPI + '/Triathlon/GetAllTri';
    return this.http.get<Triathlon>(getURL);
  }
  public postBackendData(item: Triathlon): Observable<any> {
    // const _id = item.id;
    const URL = environment.TriBackendAPI + '/Triathlon/AddTri';
    console.log(URL);
    console.log(item);
    delete item.id;
    return this.http.post<Triathlon>(URL, item);
  }
  public putBackendData(item: Triathlon): Observable<any> {
    // const _id = item.id;
    const URL = environment.TriBackendAPI + '/Triathlon/UpdateTri?Id=' + item.id;
    console.log(URL);
    console.log(item);
    delete item.id;
    // this.updateData = new Triathlon();
    // this.updateData = item;
    // console.log(this.updateData);
    return this.http.put<Triathlon>(URL, item);
  }
  public deleteBackendData(id: string): Observable<any> {
    const URL = environment.TriBackendAPI + '/Triathlon/DeleteTri?Id=' + id;
    console.log(URL);
    return this.http.delete<Triathlon>(URL);
  }
  public getData(
  ): Observable<any> {
    // const getURL = 'https://netcoretri30days.azurewebsites.net/api/user/GetAllUser';
    // return this.http.get<any>(getURL, this.httpOptions);
    const getURL = '../../assets/jsonData.json';
    return this.http.get<any>(getURL);
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
