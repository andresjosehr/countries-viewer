import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { Country } from 'src/app/interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getCountries(): Observable<Array<Country>>{
    return this.httpClient.get<Array<Country>>(`${environment.apiUrl}/all`)
  }

  getCountriesByName(name: String): Observable<Array<Country>>{
    return this.httpClient.get<Array<Country>>(`${environment.apiUrl}/name/${name}`)
  }

  getCountryByName(name: String): Observable<Country>{
      return this.httpClient.get<Array<Country>>(`${environment.apiUrl}/alpha/${name}`).pipe(
        map((item) => item[0])
      )
  }
}
