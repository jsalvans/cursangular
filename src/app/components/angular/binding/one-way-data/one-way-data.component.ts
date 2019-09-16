import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Component({
  selector: 'app-one-way-data',
  templateUrl: './one-way-data.component.html',
  styleUrls: ['./one-way-data.component.css']
})
export class OneWayDataComponent implements OnInit {

  variable: String;

  component: string;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.load();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => this.load());
  }

  load() {
    this.translate.get('salutacio').subscribe((text: string) => {
      this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  variable: string = '` + text + `';

}`;

      this.variable = text;
    });
  }

  vista1: string = `<p>{{variable}}</p>`;
  vista2: string = `<p [innerHTML]="variable"></p>`;
  vista3: string = `<p bind-innerHTML="variable"></p>`;

  vista4: string = `<input value="{{variable}}"/>`;
  vista5: string = `<input [value]="variable"/>`;
  vista6: string = `<input bind-value="variable"/>`;

}
