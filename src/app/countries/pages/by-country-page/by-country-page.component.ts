import { Component } from '@angular/core';
import { CountriesService } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor (private countriesService: CountriesService) { }

  searchByCountry(termino: string):void {
    this.countriesService.searchCountry(termino)
    .subscribe((countries) => {
      this.countries = countries;
    });
  }

}
