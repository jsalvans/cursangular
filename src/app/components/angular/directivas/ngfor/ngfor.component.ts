import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  exemple1: string = `<ul>
  <li *ngFor="let fruit of ['banana','apple','orange']">{{fruit}}</li>
</ul>`;

  exemple2: string = `<ul>
  <ng-template ngFor let-fruit [ngForOf]="['banana','apple','orange']">
    <li>{{fruit}}</li>
  </ng-template>
</ul>`;

  exemple3: string;

  exemple4: string;

  exemple5: string;

  exemple5component: string = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  array = [
    { name: 'John', surname: 'Snow', age: 20 },
    { name: 'Daenerys', surname: 'Targaryen', age: 18 },
    { name: 'Bran', surname: 'Stark', age: 13 },
    { name: 'Brienne', surname: 'de Tarth', age: 20 },
    { name: 'Sansa', surname: 'Stark', age: 16 },
    { name: 'Arya', surname: 'Stark', age: 14 }
  ];

}`;

  array = [
    { name: 'John', surname: 'Snow', age: 20 },
    { name: 'Daenerys', surname: 'Targaryen', age: 18 },
    { name: 'Bran', surname: 'Stark', age: 13 },
    { name: 'Brienne', surname: 'de Tarth', age: 20 },
    { name: 'Sansa', surname: 'Stark', age: 16 },
    { name: 'Arya', surname: 'Stark', age: 14 }
  ];

  ngOnInit() {
    this.load();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => this.load());
  }

  load() {
    this.translate.get('si').subscribe((si: string) => {
      const no: string = this.translate.instant('no');
      const element: string = this.translate.instant('angular.directives.ngfor.exemple.element');
      const index: string = this.translate.instant('angular.directives.ngfor.exemple.index');
      const esprimer: string = this.translate.instant('angular.directives.ngfor.exemple.esprimer');
      const esultim: string = this.translate.instant('angular.directives.ngfor.exemple.esultim');
      const espar: string = this.translate.instant('angular.directives.ngfor.exemple.espar');
      const esimpar: string = this.translate.instant('angular.directives.ngfor.exemple.esimpar');
      const nom: string = this.translate.instant('angular.directives.ngfor.exemple.nom');
      const cognoms: string = this.translate.instant('angular.directives.ngfor.exemple.cognoms');
      const edat: string = this.translate.instant('angular.directives.ngfor.exemple.edat');

      this.exemple3 = `<table>
  <tr>
    <th>` + element + `</th>
    <th>` + index + `</th>
    <th>` + esprimer + `</th>
    <th>` + esultim + `</th>
    <th>` + espar + `</th>
    <th>` + esimpar + `</th>
  </tr>
  <tr *ngFor="let fruit of ['banana','apple','orange'];
      index as i; first as isFirst; last as isLast;
      even as isEven; odd as isOdd">
    <td>{{fruit}}</td>
    <td>{{i}}</td>
    <td>{{isFirst ? '` + si + `' : '` + no + `'}}</td>
    <td>{{isLast ? '` + si + `' : '` + no + `'}}</td>
    <td>{{isOdd ? '` + si + `' : '` + no + `'}}</td>
    <td>{{isEven ? '` + si + `' : '` + no + `'}}</td>
  </tr>
</table>`;

      this.exemple4 = `<table>
  <tr>
    <th>` + element + `</th>
    <th>` + index + `</th>
    <th>` + esprimer + `</th>
    <th>` + esultim + `</th>
    <th>` + espar + `</th>
    <th>` + esimpar + `</th>
  </tr>
  <ng-template ngFor let-fruit [ngForOf]="['banana','apple','orange']"
      let-i="index" let-isFirst="first" let-isLast="last"
      let-isEven="even" let-isOdd="odd">
    <tr>
      <td>{{fruit}}</td>
      <td>{{i}}</td>
      <td>{{isFirst ? '` + si + `' : '` + no + `'}}</td>
      <td>{{isLast ? '` + si + `' : '` + no + `'}}</td>
      <td>{{isOdd ? '` + si + `' : '` + no + `'}}</td>
      <td>{{isEven ? '` + si + `' : '` + no + `'}}</td>
    </tr>
  </ng-template>
</table>`;

      this.exemple5 = `<table>
  <tr>
    <th>` + nom + `</th>
    <th>` + cognoms + `</th>
    <th>` + edat + `</th>
  </tr>
  <tr *ngFor="let element of array">
    <td>{{element.name}}</td>
    <td>{{element.surname}}</td>
    <td>{{element.age}}</td>
  </tr>
</table>`;
    });
  }

}
