import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryDTO, CovidInfoDTO } from '../interfaces/covid-api.dto';


@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get<CountryDTO[]>(`${this.baseUrl}/countries`);
  }

  getInfoByCountry(country: string) {
    return this.http.get<CovidInfoDTO[]>(`${this.baseUrl}/covid?country=${country}`);
  }
}
