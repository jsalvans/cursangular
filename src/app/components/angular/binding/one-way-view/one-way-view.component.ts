import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Component({
  selector: 'app-one-way-view',
  templateUrl: './one-way-view.component.html',
  styleUrls: ['./one-way-view.component.css']
})
export class OneWayViewComponent implements OnInit {

  salutacio: string;

  component: string;

  vista1: string;
  vista2: string;

  vista3: string;
  vista4: string;

  constructor(public translate: TranslateService, private titleCasePipe: TitleCasePipe) { }

  ngOnInit() {
    this.load();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => this.load());
  }

  load() {
    this.translate.get('salutacio').subscribe((salutacio: string) => {
      this.translate.get('saludar').subscribe((saludar: string) => {
        this.salutacio = this.titleCasePipe.transform(salutacio);

        this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  ` + saludar + `() {
    alert('` + this.titleCasePipe.transform(salutacio) + `!');
  }

}`;

        this.vista1 = `<button (click)="` + saludar + `()">` + this.titleCasePipe.transform(saludar) + `</button>`;
        this.vista2 = `<button on-click="` + saludar + `()">` + this.titleCasePipe.transform(saludar) + `</button>`;

        this.vista3 = `<input (keypress)="` + saludar + `()"/>`;
        this.vista4 = `<input on-keypress="` + saludar + `()"/>`;
      });
    });
  }

  saludar() {
    alert(this.salutacio + '!');
  }

}
