import { Component, EventEmitter, Output } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent {
  selectedCity: string = '';
  cities: any[] = [];
  searchText: string = ''; 
  suggestedCities: string[] = [];
  @Output() cityChanged = new EventEmitter<string>();
  @Output() searchTextChange = new EventEmitter<string>(); // Declare searchTextChange as Output

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

  onCityChanged() {
    this.searchText = ''; 
    this.searchTextChange.emit(this.searchText);
    this.cityChanged.emit(this.selectedCity);
  }

  onSearchTextChanged() {
    this.selectedCity = ''; 
    this.cityChanged.emit(this.selectedCity);
    this.searchTextChange.emit(this.searchText);

    if (this.searchText) {
      this.suggestedCities = this.cities
        .filter(city => city.name.toLowerCase().includes(this.searchText.toLowerCase()))
        .slice(0, 1);
    } else {
      this.suggestedCities = [];
    }
  }
 
}