import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  css: string = `.class1 {
  background-color: blue;
}

.class2 {
  color: greenyellow;
}

.class3 {
    background-color: aquamarine;
}`;

  component: string = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  stylesUrls: ['./component.css']
})
export class Component {

  constructor() {}

  condition1: boolean = false;

  condition2: boolean = false;

  stringVar1: string = 'class1';

  stringVar2: string = 'class1 class2';

  arrayVar1: string[] = ['class1'];

  arrayVar2: string[] = ['class1', 'class2'];

  objectVar1 = {'class1': this.condition1};

  objectVar2 = {'class1 class2': this.condition1};

  objectVar3 = {'class1 class2': this.condition1, 'class3': this.condition2};

  reload1() {
    this.condition1 = !this.condition1;
    this.objectVar1 = { 'class1': this.condition1 };
    this.objectVar2 = { 'class1 class2': this.condition1 };
    this.objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };
  }

  reload2() {
    this.condition2 = !this.condition2;
    this.objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };
  }

}`;

  exemple1: string = `<p [ngClass]="'class1'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple2: string = `<p [ngClass]="'class1 class2'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple3: string = `<p [ngClass]="['class1']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple4: string = `<p [ngClass]="['class1', 'class2']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple5: string = `<button (click)="reload1()">Toggle 1</button>
<p [ngClass]="{ 'class1': condition1 }">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple6: string = `<button (click)="reload1()">Toggle 1</button>
<p [ngClass]="{ 'class1 class2': condition1 }">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple7: string = `<button (click)="reload1()">Toggle 1</button>
<button (click)="reload2()">Toggle 2</button>
<p [ngClass]="{ 'class1 class2': condition1, 'class3': condition2 }">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple8: string = `<p [ngClass]="stringVar1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple9: string = `<p [ngClass]="stringVar2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple10: string = `<p [ngClass]="arrayVar1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple11: string = `<p [ngClass]="arrayVar2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple12: string = `<button (click)="reload1()">Toggle 1</button>
<p [ngClass]="objectVar1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple13: string = `<button (click)="reload1()">Toggle 1</button>
<p [ngClass]="objectVar2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  exemple14: string = `<button (click)="reload1()">Toggle 1</button>
<button (click)="reload2()">Toggle 2</button>
<p [ngClass]="objectVar3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

  condition1: boolean = false;

  condition2: boolean = false;

  stringVar1: string = 'class1';

  stringVar2: string = 'class1 class2';

  arrayVar1: string[] = ['class1'];

  arrayVar2: string[] = ['class1', 'class2'];

  objectVar1 = { 'class1': this.condition1 };

  objectVar2 = { 'class1 class2': this.condition1 };

  objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };

  reload1() {
    this.condition1 = !this.condition1;
    this.objectVar1 = { 'class1': this.condition1 };
    this.objectVar2 = { 'class1 class2': this.condition1 };
    this.objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };
  }

  reload2() {
    this.condition2 = !this.condition2;
    this.objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };
  }

  representacions = [
    {
      tipus: 'string',
      exemple: `[ngClass]="'class'"`,
      desc: 'angular.directives.ngclass.string.explicacio',
    },
    {
      tipus: '',
      exemple: `[ngClass]="'class1 class2'"`,
      desc: ``,
    },
    {
      tipus: '',
      exemple: `[ngClass]="stringVar"`,
      desc: ``,
    },
    {
      tipus: 'array',
      exemple: `[ngClass]="['class']"`,
      desc: 'angular.directives.ngclass.array.explicacio',
    },
    {
      tipus: '',
      exemple: `[ngClass]="['class1', 'class2']"`,
      desc: ``,
    },
    {
      tipus: '',
      exemple: `[ngClass]="arrayVar"`,
      desc: ``,
    },
    {
      tipus: 'object',
      exemple: `[ngClass]="{'class': condition}"`,
      desc: 'angular.directives.ngclass.object.explicacio1',
    },
    {
      tipus: '',
      exemple: `[ngClass]="{'class1 class2': condition}"`,
      desc: 'angular.directives.ngclass.object.explicacio2',
    },
    {
      tipus: '',
      exemple: `[ngClass]="objectVar"`,
      desc: ``,
    },
  ];

}
