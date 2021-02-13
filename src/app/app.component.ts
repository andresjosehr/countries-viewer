import { Component, Input } from '@angular/core';
import { ThemeSwitcherService } from './services/theme-switcher/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  theme: "light-theme" | "dark-theme" = "dark-theme";
  constructor(
    public themeSwitcher: ThemeSwitcherService
  ){

  }
}
