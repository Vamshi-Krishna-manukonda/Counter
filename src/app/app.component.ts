import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }
  title = 'Duo-app';
  // isCounter: boolean = true;
  // isWeather: boolean = true;
  // NavigateToCounter() {
  //   this.router.navigate(['/counter']);
  // }
  // NavigateToWeatherApp() {
  //   this.router.navigate(['/vatavaran']);
  // }

}
