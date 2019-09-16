//Basic Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//HTTP Client
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

//Translate Module
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Routes, RouterModule } from '@angular/router';

//Highlight Module
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';

//Pipes
import { FiltrePipe } from '@pipes/filtre.pipe';
import { TitleCasePipe } from '@angular/common';

//Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpSampleInterceptor } from './interceptors/httpsample.interceptor';

//Components
import { AppComponent } from './app.component';
import { PanellComponent } from '@components/panell/panell.component';
import { OneWayDataComponent } from '@components/angular/binding/one-way-data/one-way-data.component';
import { OneWayViewComponent } from '@components/angular/binding/one-way-view/one-way-view.component';
import { TwoWayComponent } from '@components/angular/binding/two-way/two-way.component';
import { NgifComponent } from '@components/angular/directivas/ngif/ngif.component';
import { NgforComponent } from '@components/angular/directivas/ngfor/ngfor.component';
import { NgswitchComponent } from './components/angular/directivas/ngswitch/ngswitch.component';
import { NgvalueComponent } from './components/angular/directivas/ngvalue/ngvalue.component';
import { NgmodelComponent } from './components/angular/directivas/ngmodel/ngmodel.component';
import { NgclassComponent } from '@components/angular/directivas/ngclass/ngclass.component';
import { NgstyleComponent } from '@components/angular/directivas/ngstyle/ngstyle.component';
import { NgtemplateComponent } from './components/angular/directivas/ngtemplate/ngtemplate.component';
import { NgtemplateoutletComponent } from './components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component';
import { RoutingComponent } from '@components/angular/routing/routing.component';
import { CanactivateComponent } from '@components/angular/routing/canactivate/canactivate.component';
import { StrategyComponent } from '@components/angular/routing/strategy/strategy.component';
import { NavigationComponent } from '@components/angular/routing/navigation/navigation.component';
import { GetparamComponent } from '@components/angular/routing/getparam/getparam.component';
import { ExampleComponent } from '@components/angular/routing/example/example.component';
import { HttpComponent } from './components/angular/http/http.component';
import { InterceptorsComponent } from './components/angular/http/interceptors/interceptors.component';
import { ProgressComponent } from './components/angular/http/progress/progress.component';
import { RxjsComponent } from './components/angular/http/rxjs/rxjs.component';

const routes: Routes = [
  { path: 'angular/binding/onewaydata', component: OneWayDataComponent },
  { path: 'angular/binding/onewayview', component: OneWayViewComponent },
  { path: 'angular/binding/twoway', component: TwoWayComponent },
  { path: 'angular/directives/ngif', component: NgifComponent },
  { path: 'angular/directives/ngfor', component: NgforComponent },
  { path: 'angular/directives/ngswitch', component: NgswitchComponent },
  { path: 'angular/directives/ngvalue', component: NgvalueComponent },
  { path: 'angular/directives/ngmodel', component: NgmodelComponent },
  { path: 'angular/directives/ngclass', component: NgclassComponent },
  { path: 'angular/directives/ngstyle', component: NgstyleComponent },
  { path: 'angular/directives/structures', component: NgtemplateComponent },
  { path: 'angular/directives/ngtemplateoutlet', component: NgtemplateoutletComponent },
  { path: 'angular/routing', component: RoutingComponent },
  { path: 'angular/routing/canactivate', component: CanactivateComponent },
  { path: 'angular/routing/strategy', component: StrategyComponent },
  { path: 'angular/routing/navigation', component: NavigationComponent },
  { path: 'angular/routing/getparam', component: GetparamComponent },
  { path: 'angular/routing/example', component: ExampleComponent },
  { path: 'angular/http', component: HttpComponent },
  { path: 'angular/http/interceptors', component: InterceptorsComponent },
  { path: 'angular/http/progress', component: ProgressComponent },
  { path: 'angular/http/rxjs', component: RxjsComponent },
  { path: '**', redirectTo: 'angular/binding/onewaydata' }
];

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'xml', func: xml },
    { name: 'css', func: css }
  ];
}

export class DynamicLocaleId extends String {
  locale: string;

  toString() {
    return this.locale;
  }
}


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    PanellComponent,
    OneWayDataComponent,
    OneWayViewComponent,
    TwoWayComponent,
    NgifComponent,
    NgforComponent,
    NgclassComponent,
    NgstyleComponent,
    NgtemplateComponent,
    RoutingComponent,
    CanactivateComponent,
    StrategyComponent,
    NavigationComponent,
    GetparamComponent,
    ExampleComponent,
    NgswitchComponent,
    NgtemplateoutletComponent,
    NgmodelComponent,
    NgvalueComponent,
    HttpComponent,
    InterceptorsComponent,
    ProgressComponent,
    RxjsComponent,

    FiltrePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true }),
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpSampleInterceptor,
      multi: true,
    }, TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
