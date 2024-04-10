import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  isCounter: boolean = true;
  isWeather: boolean = true;
  title = 'Duo-app';
  NavigateToCounter() {
    this.router.navigate(['/counter']);
  }
  NavigateToWeatherApp() {
    this.router.navigate(['/vatavaran']);
  }

}
