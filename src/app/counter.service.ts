import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private http: HttpClient) { }
  api = "http://localhost:3000";


  getApiCounterData() {
    return this.http.get<any>(`${this.api}/counterData`);
  }
  createcounterData(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.api}/counterData`, data);
  }
  UpdateCount(id:any,data:any) {
    return this.http.put<any>(`${this.api}/counterData/${id}`, data);
  }
  removeCounterObject(id:any){
    return this.http.delete<any>(`${this.api}/counterData/${id}`);
  }
  deleteCounterdata(ids:any){
    return this.http.delete<any>(`${this.api}/counterData/${ids}`);
  }
}
