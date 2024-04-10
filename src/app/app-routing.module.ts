import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:CounterAppComponent, pathMatch:'full'},
  {path:'counter',component:CounterAppComponent, pathMatch:'full'},
  {path:'vatavaran',component:WeatherAppComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
