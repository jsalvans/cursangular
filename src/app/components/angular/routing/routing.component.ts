import { Component, OnInit } from '@angular/core';
import { SizeService } from '@services/size.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(public size: SizeService) { }

  ngOnInit() { }

  approutingts: string = `import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`;

  appmodulets: string = `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // <---

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule // <---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;

  appmoduletsshort: string = `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'; // <---

const routes: Routes = []; // <---

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes) // <---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;

  ruteconfigsamples: string = `const routes: Routes = [
  { path: 'login',    component: LoginComponent },
  { path: 'welcome',  component: WelcomeComponent, canActivate: [AuthGuardService] },
  { path: 'notes',    component: NotesComponent,   canActivate: [AuthGuardService] },
  { path: 'note/:id', component: NoteComponent,    canActivate: [AuthGuardService] },
  { path: '**',       redirectTo: 'notes' }
];`;

}
