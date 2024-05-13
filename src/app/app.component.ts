import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCity: string = ''; 
  searchText: string = '';

  constructor() { }

  onCityChanged(city: string) {
    this.selectedCity = city;
  }

  onSearchTextChanged(searchText: string) {
    this.searchText = searchText;
  }

  clearPage() {
    window.location.reload(); 
  }
}

