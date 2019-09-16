import { Component, OnInit } from '@angular/core';
import { Tipus } from '@enums/Tipus.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
// tslint:disable: max-line-length
export class PanellComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  Tipus = Tipus;
  filtre: string;
  tipusSeleccionat: Tipus = null;

  pagines = [
    // { nom: Tipus.Javascript,                            tipus: Tipus.Javascript,  icon: 'fab fa-js-square' },

    // { nom: Tipus.Typescript,                            tipus: Tipus.Typescript,  icon: 'fab fa-tumblr-square' },

    // { nom: Tipus.Angular,                               tipus: Tipus.Angular,     icon: 'fab fa-angular' },
    { nom: 'Data Bindings: One Way - From data',        tipus: Tipus.Angular,     icon: 'fa fa-long-arrow-alt-left',  url: '/angular/binding/onewaydata' },
    { nom: 'Data Bindings: One Way - From view',        tipus: Tipus.Angular,     icon: 'fa fa-long-arrow-alt-right', url: '/angular/binding/onewayview' },
    { nom: 'Data Bindings: Two Way',                    tipus: Tipus.Angular,     icon: 'fa fa-arrows-alt-h',         url: '/angular/binding/twoway' },
    { nom: 'Directives: ngIf',                          tipus: Tipus.Angular,     icon: 'fa fa-question',             url: '/angular/directives/ngif' },
    { nom: 'Directives: ngFor',                         tipus: Tipus.Angular,     icon: 'fa fa-sync-alt',             url: '/angular/directives/ngfor' },
    { nom: 'Directives: ngSwitch',                      tipus: Tipus.Angular,     icon: 'fa fa-random',               url: '/angular/directives/ngswitch' },
    { nom: 'Directives: ngValue',                       tipus: Tipus.Angular,     icon: 'fa fa-long-arrow-alt-right', url: '/angular/directives/ngvalue' },
    { nom: 'Directives: ngModel',                       tipus: Tipus.Angular,     icon: 'fa fa-arrows-alt-h',         url: '/angular/directives/ngmodel' },
    { nom: 'Directives: ngClass',                       tipus: Tipus.Angular,     icon: 'fab fa-css3-alt',            url: '/angular/directives/ngclass' },
    { nom: 'Directives: ngStyle',                       tipus: Tipus.Angular,     icon: 'fa fa-border-style',         url: '/angular/directives/ngstyle' },
    { nom: 'angular.directives.structures.menu',        tipus: Tipus.Angular,     icon: 'fas fa-code',                url: '/angular/directives/structures',      traduir: true },
    { nom: 'Directives: NgTemplateOutlet',              tipus: Tipus.Angular,     icon: 'far fa-file-code',           url: '/angular/directives/ngtemplateoutlet' },
    { nom: 'Routing',                                   tipus: Tipus.Angular,     icon: 'fas fa-directions',          url: '/angular/routing' },
    { nom: 'Routing: Can Activate',                     tipus: Tipus.Angular,     icon: 'fas fa-shield-alt',          url: '/angular/routing/canactivate' },
    { nom: 'angular.routing.location.strategy.menu',    tipus: Tipus.Angular,     icon: 'far fa-compass',             url: '/angular/routing/strategy',           traduir: true },
    { nom: 'angular.routing.navigation.menu',           tipus: Tipus.Angular,     icon: 'fas fa-route',               url: '/angular/routing/navigation',         traduir: true },
    { nom: 'angular.routing.get.params.menu',           tipus: Tipus.Angular,     icon: 'fas fa-subscript',           url: '/angular/routing/getparam',           traduir: true },
    { nom: 'angular.routing.exemple.menu',              tipus: Tipus.Angular,     icon: 'fas fa-vial',                url: '/angular/routing/example',            traduir: true },
    { nom: 'HTTP Client',                               tipus: Tipus.Angular,     icon: 'fas fa-globe-europe',        url: '/angular/http' },
    { nom: 'HTTP Client: Interceptors',                 tipus: Tipus.Angular,     icon: 'fas fa-syringe',             url: '/angular/http/interceptors' },
    // { nom: 'HTTP Client: Esdeveniments de progrès',     tipus: Tipus.Angular,     icon: 'fas fa-spinner',             url: '/angular/http/progress' },
    // { nom: 'HTTP Client: RxJS',                         tipus: Tipus.Angular,     icon: 'fas fa-rxjs',                url: '/angular/http/rxjs', },

    // { nom: Tipus.AngularCLI,                            tipus: Tipus.AngularCLI,  icon: 'fab fa-angular' },
  ];

  ngOnInit() { }

  netejar() {
    this.filtre = null;
    this.tipusSeleccionat = null;
  }

}
