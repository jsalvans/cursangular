import { Component, OnInit } from '@angular/core';
import { SizeService } from '@services/size.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(public size: SizeService) { }

  ngOnInit() { }

  approutingmodulets: string = `import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login',    component: LoginComponent },
  { path: 'welcome',  component: WelcomeComponent, canActivate: [AuthGuardService] },
  { path: 'notes',    component: NotesComponent,   canActivate: [AuthGuardService] },
  { path: 'note/:id', component: NoteComponent,    canActivate: [AuthGuardService] },
  { path: '**',       redirectTo: 'notes' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesComponent,
    NoteComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } `;


  authguardservice: string = `import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }

  user: string = null;

  canActivate(): boolean {
    if (this.user === null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}`;

  logincomponent: string = `import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-login',
  template: \`
<div>
  Username: <input [(ngModel)]="username" /><br />
  Password: <input [(ngModel)]="password" type="password" /><br />
  <button (click)="login()">Login</button>
</div>
\`
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(public router: Router,
    public authService: AuthGuardService) { }

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.authService.user = this.username;
      this.router.navigate(['welcome']);
    } else {
      alert('Username or password incorrect.')
    }
  }

}`;

  appcomponent: string = `import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  template: \`
  <div *ngIf="this.router.url !== '/login'">
    <a routerLink="welcome" routerLinkActive="activated">Welcome</a> | 
    <a routerLink="notes" routerLinkActive="activated">Notes</a> | 
    <a href="#" (click)="logout()">Log out</a>
    <br />
  </div>
  <router-outlet></router-outlet>
  \`,
  styles: ['.activated { font-weight: bold; }']
})
export class AppComponent {

  constructor(public router: Router,
    public authService: AuthGuardService) { }

  logout() {
    this.authService.user = null;
    this.router.navigate(['/login']);
  }

}`;

  welcomecomponent: string = `import { Component } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-welcome',
  template: '<div>Welcome {{authService.user}}!</div>'
})
export class WelcomeComponent {

  constructor(public authService: AuthGuardService) { }

}`;

  notescomponent: string = `import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  template: \`
  <div>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      <tr *ngFor="let n of notes">
        <td><a [routerLink]="['/note', n.id]">{{n.id}}</a></td>
        <td>{{n.name}}</td>
      </tr>
    </table>
  </div>
\`
})
export class NotesComponent {

  notes = [{
    id: 1,
    name: 'Note 1'
  }, {
    id: 2,
    name: 'Note 2'
  }, {
    id: 3,
    name: 'Note 3'
  }];

}`;


  notecomponent: string = `import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  template: '<div>Note {{id}}</div>'
})
export class NoteComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}`;

}
