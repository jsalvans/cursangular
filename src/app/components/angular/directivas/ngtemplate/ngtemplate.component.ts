import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.css']
})
export class NgtemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  show: boolean = true;

  menu: string = 'vegan';

  exemple1: string = `<span *ngIf="show"> HTML </span>`;

  exemple2: string = `<ng-template [ngIf]="show">
  <span> HTML </span>
</ng-template>`;

  exemple3: string = `<p *ngIf="show" *ngFor="let fruit of ['banana', 'orange', 'apple']"> {{fruit}} </p>`;

  containerExemple1: string = `<ng-container>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-container>`;

  containerExemple2: string = `<button (click)="show = !show">Toggle</button>
<ng-container *ngIf="show">
  <p *ngFor="let fruit of ['banana', 'orange', 'apple']"> {{fruit}} </p>
</ng-container>`;

  templateExemple1: string = `<ng-template>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-template>`;

  templateExemple2: string = `<button (click)="show = !show">Toggle</button>
<ng-template [ngIf]="show">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-template>`;

  templateExemple3: string = `<button (click)="show = !show">Toggle</button>
<p *ngIf="show; then thenHtml; else elseHtml"></p>
<ng-template #thenHtml>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-template>
<ng-template #elseHtml>
  <p>Nulla scelerisque consectetur urna, id hendrerit nunc congue vitae.</p>
</ng-template>`;

  templateExemple4: string = `<ng-template let-fruit [ngForOf]="['banana', 'orange', 'apple']">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-template>`;

  templateExemple5: string = `<input id="veganRadio" type="radio" name="menu" value="vegan" [(ngModel)]="menu" />
<label for="veganRadio"> Vegan</label><br />
<input id="pastaRadio" type="radio" name="menu" value="pasta" [(ngModel)]="menu" />
<label for="pastaRadio"> Pasta</label><br />
<input id="meatRadio" type="radio" name="menu" value="meat" [(ngModel)]="menu" />
<label for="meatRadio"> Meat</label><br />
<input id="otherRadio" type="radio" name="menu" value="other" [(ngModel)]="menu" />
<label for="otherRadio"> Other</label><br />
<div [ngSwitch]="menu">
  <ng-template [ngSwitchCase]="'vegan'">Tropical salad</ng-template>
  <ng-template [ngSwitchCase]="'pasta'">Macaroni with carbonara sauce</ng-template>
  <ng-template [ngSwitchCase]="'meat'">Pork Chops</ng-template>
  <ng-template ngSwitchDefault>Paella</ng-template>
</div>`;

  templateExemple6: string = `<button (click)="show = !show">Toggle</button>
<ng-template *ngIf="show" ngFor let-fruit [ngForOf]="['banana', 'orange', 'apple']">
  <p>{{fruit}}</p>
</ng-template>`;

  templateExemple7: string = `<input id="veganRadio2" type="radio" name="menu2" value="vegan" [(ngModel)]="menu" />
<label for="veganRadio2"> Vegan</label><br />
<input id="pastaRadio2" type="radio" name="menu2" value="pasta" [(ngModel)]="menu" />
<label for="pastaRadio2"> Pasta</label><br />
<input id="meatRadio2" type="radio" name="menu2" value="meat" [(ngModel)]="menu" />
<label for="meatRadio2"> Meat</label><br />
<input id="otherRadio2" type="radio" name="menu2" value="other" [(ngModel)]="menu" />
<label for="otherRadio2"> Other</label><br />
<ul [ngSwitch]="menu">
  <ng-template [ngSwitchCase]="'vegan'" *ngFor="let vfood of ['Tropical salad', 'Falafel Tabouli Wrap', 'Vegetable Paella']">
    <li>{{vfood}}</li>
  </ng-template>
  <ng-template [ngSwitchCase]="'pasta'" *ngFor="let pfood of ['Macaroni', 'Spaguettis', 'Tagliatelle']">
    <li>{{pfood}}</li>
  </ng-template>
  <ng-template [ngSwitchCase]="'meat'" *ngFor="let mfood of ['Pork Chops', 'Hamburguer', 'Chicken Wings']">
    <li>{{mfood}}</li>
  </ng-template>
  <ng-template ngSwitchDefault *ngFor="let ofood of ['Paella', 'Fabada']">
    <li>{{ofood}}</li>
  </ng-template>
</ul>`;

}
