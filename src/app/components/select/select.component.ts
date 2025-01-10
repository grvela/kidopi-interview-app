import { Component, output } from '@angular/core';
import { CountryDTO } from '../../interfaces/covid-api.dto';
import { CovidApiService } from '../../services/covid-api.service';

import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [FormsModule ,SelectModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  countries: CountryDTO[] = [];
  
  selectedCountry: CountryDTO = {
    name: "Brazil"
  } as CountryDTO;
  countryChange = output<CountryDTO>();

  constructor(private covidApiService: CovidApiService){
  }

  ngOnInit(){
    this.covidApiService.getAllCountries().subscribe((data: CountryDTO[]) => {
      this.countries = data;
    });
  }

  onCountryChange(){
    this.countryChange.emit(this.selectedCountry);
  }
}
