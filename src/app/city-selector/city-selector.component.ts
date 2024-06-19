import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.css'
})
export class CitySelectorComponent {
  @Input() cities: any[] = [];
  @Output() cityChanged = new EventEmitter<string>();
  isOpen: boolean = false;
  searchText: string = '';
  filteredCities: any[] = [];

  constructor(private cityService: CityService) { }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.filteredCities = this.cities;
    } else {
      this.searchText = '';
      this.filteredCities = [];
    }
  }
  onSearchTextChanged() {
    if (this.searchText) {
      this.filteredCities = this.cities.filter(city =>
        city.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredCities = this.cities;
    }
  }

  selectCity(city: any) {
    this.searchText = city.name;
    this.cityChanged.emit(city.name);
    this.toggleDropdown();
  }
}
