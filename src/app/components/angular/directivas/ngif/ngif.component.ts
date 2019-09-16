import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  show: boolean = false;

  elserepresentacio1: string = `<div *ngIf="condition; else templateId">content</div>
<ng-template #templateId>elsecontent</ng-template>`;

  elserepresentacio2: string;

  thenrepresentacio: string = `<div *ngIf="show; then templateId; else elseTemplateId"></div>
<ng-template #templateId>thencontent</ng-template>
<ng-template #elseTemplateId>elsecontent</ng-template>`;

  exemple1: string = `<button (click)="show = !show;">Toggle</button>
<span *ngIf="show"> HTML </span>`;

  exemple2: string = `<button (click)="show = !show;">Toggle</button>
<ng-template [ngIf]="show">
  <span> HTML </span>
</ng-template>`;

  exemple3: string = `<button (click)="show = !show">Toggle</button>
<span *ngIf="show; else elseSpan1"> HTML </span>
<ng-template #elseSpan1>
  <span> Else 1 </span>
</ng-template>`;

  exemple4: string = `<button (click)="show = !show">Toggle</button>
<ng-template [ngIf]="show" [ngIfElse]="elseSpan2">
  <span> HTML </span>
</ng-template>
<ng-template #elseSpan2>
  <span> Else 2 </span>
</ng-template>`;


  exemple5: string = `<button (click)="show = !show">Toggle</button>
<div *ngIf="show; then thenSpan; else elseSpan3"></div>
<ng-template #thenSpan>
  <span> Then </span>
</ng-template>
<ng-template #elseSpan3>
  <span> Else 3 </span>
</ng-template>`;


  component: string = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  show: boolean = false;

}`;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.load();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => this.load());
  }

  load() {
    this.translate.get('angular.directives.ngif.nomes.ngtemplate').subscribe((text: string) => {
      this.elserepresentacio2 = `<ng-template [ngIf]="condition" [ngIfElse]="templateId">content<ng-template> <!-- (` + text + `) -->
<ng-template #templateId>elsecontent</ng-template>`;
    });
  }

}
