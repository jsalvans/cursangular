import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  variable: string;

  component: string;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.load();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => this.load());
  }

  load() {
    this.translate.get('salutacio').subscribe((salutacio: string) => {
      this.variable = salutacio;

      this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  variable: string = '` + salutacio + `';

}`;
    });
  }

  vista1: string = `<input [(ngModel)]="variable" />
<p>{{variable}}</p>`;

  vista2: string = `<input bindon-ngModel="variable" />
<p>{{variable}}</p>`;

}
