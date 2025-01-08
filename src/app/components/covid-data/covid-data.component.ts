import { Component, input} from '@angular/core';
import { CovidApiService } from '../../services/covid-api.service';


@Component({
  selector: 'app-covid-data',
  imports: [],
  templateUrl: './covid-data.component.html',
  styleUrl: './covid-data.component.scss'
})
export class CovidDataComponent {
  country = input<string>("");

  constructor(private covidApiService: CovidApiService){}

  ngOnChanges(){
    this.covidApiService.getInfoByCountry(this.country()).subscribe((data) => {
      console.log(data);
    })
  }
}
