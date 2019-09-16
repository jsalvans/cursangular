import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpclientService } from '@services/httpclient.service';

@Injectable()
export class HttpSampleInterceptor implements HttpInterceptor {

    constructor(private service: HttpclientService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const sample = this.service.token;
        const authReq = req.clone({ headers: req.headers.append('sample', `${sample}`) });
        return next.handle(authReq);
    }
}