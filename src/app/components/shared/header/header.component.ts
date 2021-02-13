import { keyframes, state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher/theme-switcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public themeSwitcher: ThemeSwitcherService
  ) { }

  ngOnInit(): void {
  }

  switchTheme(){
    this.themeSwitcher.theme = this.themeSwitcher.theme == 'dark-theme' ? "light-theme" : 'dark-theme';
  }

}
