import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectComponent } from "./components/select/select.component";
import { CovidDataComponent } from "./components/covid-data/covid-data.component";
import { CountryDTO } from './interfaces/covid-api.dto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SelectComponent, CovidDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kidopi-interview-app';
  country: string = "";


  onCountryChange(country: CountryDTO){
    this.country = country.name;
  }
}
