import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Country } from 'src/app/interfaces/country';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher/theme-switcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    
  ]
})
export class HomeComponent implements OnInit {
  
  isRequesting: boolean = true;
  countrySearchFormGroup!: FormGroup
  countries$!: Observable<Array<Country>>
  skeletonStyles = { 'border-radius': '10px', 'width': '230px', 'height': '300px', 'margin-bottom': '50px' }

  constructor(
    public  themeSwitcher      : ThemeSwitcherService,
    private countriesService   : CountriesService,
    private formBuilder        : FormBuilder
  ) { }

  ngOnInit(): void {

    this.countrySearchFormGroup=this.formBuilder.group({
      name: [''],
      region: [false]
    });

    this.countrySearchFormGroup.get("name")?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(name =>{
      this.countries$ = name ? this.countriesService.getCountriesByName(name) : this.countriesService.getCountries()
    })



      this.countries$=this.countriesService.getCountries()
  }

}
