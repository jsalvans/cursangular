import { Component, OnInit } from '@angular/core';
import { SizeService } from '@services/size.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public size: SizeService) { }

  ngOnInit() { }

  routerlink1: string = '<a routerLink="/link">Link</a>';
  routerlink2: string = `<a [routerLink]="'/link'">Link</a>`;
  routerlink3: string = `<a [routerLink]="['/link']">Link</a>`;
  routerlink4: string = '<a [routerLink]="link">Link</a>';
  routerlink5: string = '<a [routerLink]="[link]">Link</a>';
  routerlink6: string = `<a [routerLink]="['/link', id]">Link</a>`;
  routerlink7: string = '<a [routerLink]="[link, id]">Link</a>';

  routerlinkactive1: string = '<a routerLink="/link" routerLinkActive="activated">Link</a>'
  routerlinkactive2: string = '<a routerLink="/link/1" routerLinkActive="activated">Link</a>';
  routerlinkactive3: string = `<div routerLinkActive="activated">
  <a routerLink="/link">Link</a>
</div>`;

  routerlinkactive4: string = `<div routerLinkActive="activated">
  <a routerLink="/link/1">Link</a>
</div>`;

  routerlinkactive5: string = '<a routerLink="/link/1" routerLinkActive="activated" [routerLinkActiveOptions]="{exact: true}">Link</a>';

  routerlinkactive6: string = `<style>a { color: blue; } .activated { font-weight: bold; }</style>
<a routerLink="/link" routerLinkActive="activated">Link</a>
<br/>
<a routerLink="/link" routerLinkActive="activated" [routerLinkActiveOptions]="{exact: true}">Link Exact</a>
<br/>
<div routerLinkActive="activated">
  <a routerLink="/link/1">Link 1</a>
</div>
<a routerLink="/link/2" routerLinkActive="activated">Link 2</a>`;

  routercomponent1: string = `import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <---

@Component({
  selector: 'app-compoment',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor(public router: Router) { } // <---

  redirect() {
    this.router.navigate(['link']); // <---
  }

}`;

  routercomponent2: string = `import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <---

@Component({
  selector: 'app-compoment',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor(public router: Router) { } // <---

  redirect(id: string) {
    this.router.navigate(['link', id]); // <---
  }

}`;

  routercomponent3: string = `import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <---

@Component({
  selector: 'app-compoment',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor(public router: Router) { // <---
    console.log(this.router.url); // <---
  }

}`;

}
