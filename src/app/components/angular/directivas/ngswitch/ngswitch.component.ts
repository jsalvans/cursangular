import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  representacio: string = `<div [ngSwitch]="variable">
  <p *ngSwitchCase="value">content</p>
  <p *ngSwitchCase="value">content</p>
  <p *ngSwitchCase="value">content</p>
  <p *ngSwitchDefault>content</p>
</div>`;

  menu: string = 'vegan';

  component: string = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  menu: string = 'vegan';

}`;

  exemple: string = `<input id="veganRadio" type="radio" name="menu" value="vegan" [(ngModel)]="menu" />
<label for="veganRadio"> Vegan</label><br />
<input id="pastaRadio" type="radio" name="menu" value="pasta" [(ngModel)]="menu" />
<label for="pastaRadio"> Pasta</label><br />
<input id="meatRadio" type="radio" name="menu" value="meat" [(ngModel)]="menu" />
<label for="meatRadio"> Meat</label><br />
<input id="otherRadio" type="radio" name="menu" value="other" [(ngModel)]="menu" />
<label for="otherRadio"> Other</label><br />

<div [ngSwitch]="menu">
  <p *ngSwitchCase="'vegan'">Tropical salad</p>
  <p *ngSwitchCase="'pasta'">Macaroni with carbonara sauce</p>
  <p *ngSwitchCase="'meat'">Pork Chops</p>
  <p *ngSwitchDefault>Paella</p>
</div>`;

}
