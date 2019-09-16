import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngvalue',
  templateUrl: './ngvalue.component.html',
  styleUrls: ['./ngvalue.component.css']
})
export class NgvalueComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  value1: any = '';

  value2: any = '';

  getTypeOf(variable) {
    return typeof variable;
  }

  component: string = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  value: any = '';

  getTypeOf(variable) {
    return typeof variable;
  }

}`;

  vista1: string = `<select [(ngModel)]="value">
  <option [value]="''">Empty</option>
  <option [value]="null">Null</option>
  <option [value]="undefined">Undefined</option>
  <option [value]="'text'">Text</option>
  <option [value]="{name: 'Ramon', surname: 'Garcia'}">Object</option>
</select>
<ul>
  <li>Value: {{value}}</li>
  <li>Type: {{getTypeOf(value)}}</li>
  <li>Null: {{value === null}}</li>
  <li>Undefined: {{value === undefined}}</li>
  <li *ngIf="getTypeOf(value) === 'object'">Full name: {{value.name}} {{value.surname}}</li>
</ul>`;

  vista2: string = `<select [(ngModel)]="value">
  <option [ngValue]="''">Empty</option>
  <option [ngValue]="null">Null</option>
  <option [ngValue]="undefined">Undefined</option>
  <option [ngValue]="'text'">Text</option>
  <option [ngValue]="{name: 'Ramon', surname: 'Garcia'}">Object</option>
</select>
<ul>
  <li>Value: {{value}}</li>
  <li>Type: {{getTypeOf(value)}}</li>
  <li>Null: {{value === null}}</li>
  <li>Undefined: {{value === undefined}}</li>
  <li *ngIf="getTypeOf(value) === 'object'">Full name: {{value.name}} {{value.surname}}</li>
</ul>`;

}
