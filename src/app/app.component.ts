import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { SizeService } from '@services/size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translate: TranslateService,
    public size: SizeService,
    private titleService: Title) {
    this.translate.addLangs(['ca', 'es']);
    this.translate.setDefaultLang('ca');

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.titleService.setTitle(this.translate.instant('title'));
    });

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/ca|es/) ? browserLang : 'ca');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.size.innerWidth = window.innerWidth;
    console.log(window.innerWidth);
  }

  hidemenu() {
    let menuPanel = document.getElementsByClassName("menu-panel")[0] as HTMLElement;
    let btnMenu = document.getElementsByClassName("btn-menu")[0] as HTMLElement;
    let btnClose = document.getElementsByClassName("btn-close")[0] as HTMLElement;
    menuPanel.style['display'] = 'none';
    btnMenu.style['display'] = 'block';
    btnClose.style['display'] = 'none';
    console.log("Hidding Menu");
  }

  showmenu() {
    let menuPanel = document.getElementsByClassName("menu-panel")[0] as HTMLElement;
    let btnMenu = document.getElementsByClassName("btn-menu")[0] as HTMLElement;
    let btnClose = document.getElementsByClassName("btn-close")[0] as HTMLElement;
    menuPanel.style['display'] = 'block';
    btnMenu.style['display'] = 'none';
    btnClose.style['display'] = 'block';
    console.log("Showing Menu");
  }

}
