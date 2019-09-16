import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '@services/httpclient.service'

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.css']
})
export class InterceptorsComponent implements OnInit {

  constructor(public service: HttpclientService) { }

  appmodule: string = `//Basic Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//HTTP Client
import { HttpClientModule } from '@angular/common/http'; // <---

//Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http'; // <---
import { HttpSampleInterceptor }
  from '@interceptors/httpsample.interceptor'; // <---

//Components
import { Component } from '@components/component';

@NgModule({
  declarations: [
    AppComponent,
    Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // <---
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, // <---
    useClass: HttpSampleInterceptor, // <---
    multi: true, // <---
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }`;

  exemple: string = `this.http.get('http://localhost:3000/injectionsample', { responseType: 'text' })
  .subscribe(data => {
    console.log(data);
  });`;

  resultat: string = `{"msg":"Hello World"}`;

  interceptor: string = `import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpclientService } from '@services/httpclient.service';

@Injectable()
export class HttpSampleInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({ headers: req.headers.append('sample', 'Hello World') });
        return next.handle(authReq);
    }
}`;

  ngOnInit() {
    this.service.exemple5();
  }

}
