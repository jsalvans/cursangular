import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  representacions: string[] = [
    `[ngStyle]="{'styleName': styleValue}"`,
    `[ngStyle]="{'styleName': styleValue, 'styleName': styleValue}"`,
    `[ngStyle]="object"`,
    `[style.styleName]="'styleValue'"`,
    `[style.styleName]="variable"`,
    `[style.styleName.styleUnit]="'styleValue'"`,
    `[style.styleName.styleUnit]="variable"`,
  ];

  component: string = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  stylesUrls: ['./component.css']
})
export class Component {

  constructor() {}

  styleObj = {'color': 'yellow', 'background-color': 'black'};
  styleValue: string = 'orange';
  styleValue2: string = '7';
  styleValue3: string = '12px';

}`;

  styleObj = {'color': 'yellow', 'background-color': 'black'};
  styleValue: string = 'orange';
  styleValue2: string = '7';
  styleValue3: string = '12px';

  exemple1 = `<p [ngStyle]="{'color': 'green'}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  exemple2 = `<p [ngStyle]="{'color': 'green', 'background-color': 'blue'}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  exemple3 = `<p [ngStyle]="styleObj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  exemple4 = `<p [style.color]="'green'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  exemple5 = `<p [style.background-color]="styleValue">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  exemple6 = `<p [style.font-size.px]="'5'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  exemple7 = `<p [style.font-size.em]="'5'" [style.white-space]="'nowrap'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  exemple8 = `<p [style.font-size.px]="styleValue2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  exemple9 = `<p [style.font-size.em]="styleValue2" [style.white-space]="'nowrap'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  exemple10 = `<p [style.font-size]="styleValue3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

}
