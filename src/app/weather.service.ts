import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  // private dataSubject = new BehaviorSubject<any[]>([]);
  // data$ = this.dataSubject.asObservable();
  private apiKey = 'd4594364698122bfd1c4b3eb5f2ff19f';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private storeWeatherUrl = 'http://localhost:8100';
  getweather(city: string): Observable<any> {
    console.log(city);
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  storeWeather(weatherData: {}): Observable<any> {
    return this.http.post<any>(`${this.storeWeatherUrl}/weather`, weatherData);
  }
  getWeatherData(): Observable<any> {
    return this.http.get<any>(`${this.storeWeatherUrl}/weather`).pipe(shareReplay());
  }
  updateStoredWeatherData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.storeWeatherUrl}/weather/${id}`, data)
  }
  removestoredWeatherData(id:any):Observable<any> {
    // console.log(id);
    return this.http.delete<any>(`${this.storeWeatherUrl}/weather/${id}`)
  }
  deleteAllIds(): Observable<any>{
return this.http.delete<any>(`${this.storeWeatherUrl}/weather`);
  }

}
