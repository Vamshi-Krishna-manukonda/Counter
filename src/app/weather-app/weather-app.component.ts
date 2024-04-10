import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { NotificationSeviceService } from '../notification-sevice.service';
import { MatChipList } from '@angular/material/chips';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  chipList: any;

  constructor(private weatherserv: WeatherService, private notiserv: NotificationSeviceService) {

  }
  city: string = '';
  weatherData: any;
  jsonStoredweather: any = [];
  showFullWeatherData: any;
  index: number = 0;
  UpdateFullWeatherData: any = [];
  Existingids: any
  ngOnInit(): void {

  }
  getWeather() {
    debugger;
    this.weatherserv.getweather(this.city).subscribe(responseed => {
      this.weatherData = responseed;
      console.log(this.weatherData.id);
      this.storeWeatherData(this.weatherData);
    });
  }
  storeWeatherData(response: any) {
    debugger;
    console.log(response.id);
    this.weatherserv.storeWeather(response).pipe().subscribe((responseData: any) => {
      console.log(responseData);
      this.ngAfterViewInit();
    })

  }
  ngAfterViewInit() {
    this.weatherserv.getWeatherData().pipe().subscribe(weather => {
      this.jsonStoredweather = weather;
      console.log(this.jsonStoredweather);
    })
  }
  refresh(weather: any) {
    //  this.jsonStoredweather.forEach((response:any)=>{
    //   if(response.id === weather.id){
    //     this.weatherserv.getweather(weather.name).pipe().subscribe(data=>{
    //       console.log(data);
    //       this.weatherserv.updateStoredWeatherData(weather.id,data).pipe().subscribe(UpdateWeather=>{
    //         console.log(UpdateWeather);

    //       })
    //     })
    //   }
    //  })
  }
  getStoredWeather() {
    debugger;
    this.weatherserv.getWeatherData().pipe().subscribe(weather => {
      this.jsonStoredweather = weather;
      console.log(this.jsonStoredweather);

    })
  }
  remove(weather: any) {
    console.log(weather);
    this.weatherserv.removestoredWeatherData(weather).pipe().subscribe(deleteweather => {
      this.ngAfterViewInit();
    })
  }
  sendweatherData(weather: any) {
    this.showFullWeatherData = weather;
    // this.replaceObject(this.showFullWeatherData,this.index)
    // console.log(this.showFullWeatherData);
    this.UpdateFullWeatherData.unshift(this.showFullWeatherData);
    if (this.UpdateFullWeatherData.length > 1) {
      this.UpdateFullWeatherData.pop();
      console.log(this.UpdateFullWeatherData);

    }
  }


}


