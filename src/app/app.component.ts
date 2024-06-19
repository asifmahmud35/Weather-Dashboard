import { Component } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cities: any[] = [];
  selectedCity: string = '';

  constructor(private cityService: CityService) { }
  
  ngOnInit(): void {
    this.loadCities();
  }

  loadCities() {
    this.cityService.getCities().subscribe(
      cities => {
        this.cities = cities;
      },
      error => {
        console.error('Error fetching cities:', error);
      }
    );
  }

  onCityChanged(cityName: string) {
    this.selectedCity = cityName;
  }
}
