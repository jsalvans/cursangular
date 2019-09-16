import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplateoutlet',
  templateUrl: './ngtemplateoutlet.component.html',
  styleUrls: ['./ngtemplateoutlet.component.css']
})
export class NgtemplateoutletComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  explicacio1: string = `<ng-container *ngTemplateOutlet="idTemplate"></ng-container>
<ng-template #idTemplate>content</ng-template>`;

  explicacio2: string = `<ng-container *ngTemplateOutlet="idTemplate; context: { $implicit: 'defaultValue', variable: 'variableValue' }"></ng-container>
<ng-template #idTemplate let-default>{{default}}</ng-template>`;

  explicacio3: string = `<ng-container *ngTemplateOutlet="idTemplate; context: contextObj"></ng-container>
<ng-template #idTemplate let-alias="variable">{{alias}}</ng-template>`;

  myContext = { $implicit: 'World', localEs: 'Mundo' };

  exemple1: string = `<ng-container *ngTemplateOutlet="greet"></ng-container>
<ng-template #greet><span>Hello</span></ng-template>`;

  exemple2: string = `<ng-container *ngTemplateOutlet="eng; context: { $implicit: 'World' }"></ng-container>
<ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>`;

  exemple3: string = `<ng-container *ngTemplateOutlet="svk; context: { $implicit: 'World', localSk: 'Svet' }"></ng-container>
<ng-template #svk let-person="localSk"><span>Ahoj {{person}}!</span></ng-template>`;

  exemple4: string = `<ng-container *ngTemplateOutlet="esp; context: myContext"></ng-container>
<ng-template #esp let-person="localEs"><span>¡Hola {{person}}!</span></ng-template>`;

  exemple4component: string = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  myContext = { $implicit: 'World', localEs: 'Mundo' };

}`;

}
