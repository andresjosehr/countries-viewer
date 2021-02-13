import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/interfaces/country';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher/theme-switcher.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  skeletonStyles={ 'border-radius': '6px', 'width': '150px', 'margin-bottom': '50px' }
  countryName!: String
  country$!: Observable<Country>

  constructor(
    public themeSwitcher: ThemeSwitcherService,
    public countriesService: CountriesService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.getCountryByName(params.id)
    })
  }

  getCountryByName(name: String): void{ 
      this.country$ = this.countriesService.getCountryByName(name);
  }

}
