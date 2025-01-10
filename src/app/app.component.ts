import { Component } from '@angular/core';
import { SelectComponent } from "./components/select/select.component";
import { CovidDataComponent } from "./components/covid-data/covid-data.component";
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { CountryDTO } from './interfaces/covid-api.dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CommonModule,
    MenubarModule, 
    ToggleSwitchModule,
    CardModule,
    SelectComponent, 
    CovidDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kidopi-interview-app';
  country: string = "Brazil";
  checked: boolean = false;

  latestMessage: string = '';
  private messageHandler: (event: MessageEvent) => void;

  constructor(private webSocketService: WebSocketService) {
    this.messageHandler = (event: MessageEvent) => {
      this.latestMessage = event.data;
    };
  }

  ngOnInit(): void {
    if (this.webSocketService['socket']) {
      this.webSocketService['socket'].addEventListener('message', this.messageHandler);
    }
  }

  ngOnDestroy(): void {
    if (this.webSocketService['socket']) {
      this.webSocketService['socket'].removeEventListener('message', this.messageHandler);
    }
  }

  onCountryChange(country: CountryDTO){
    this.country = country.name;
  }
}
