import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  public theme: "light-theme" | "dark-theme" = "light-theme";

  constructor() { }

}
