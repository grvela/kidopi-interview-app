import { Component, input} from '@angular/core';
import { CovidApiService } from '../../services/covid-api.service';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CovidInfoDTO } from '../../interfaces/covid-api.dto';

@Component({
  selector: 'app-covid-data',
  imports: [CardModule, ChartModule],
  templateUrl: './covid-data.component.html',
  styleUrl: './covid-data.component.scss'
})
export class CovidDataComponent {
  country = input<string>("Brazil");
  data: CovidInfoDTO[] = [];

  constructor(private covidApiService: CovidApiService){}

  ngOnChanges(){
    this.covidApiService.getInfoByCountry(this.country()).subscribe((data: CovidInfoDTO[]) => {
      this.data = data;
    })
  }
}
