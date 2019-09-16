import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http: HttpClient) { }

  token: string = 'Hello World';

  url: string = 'https://jsonplaceholder.typicode.com/todos/1';

  exemple1() {
    this.http.get(this.url)
      .subscribe(data => {
        console.log(data['title']);
      });
  }

  exemple2() {
    this.http.get(this.url, { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
      });
  }

  exemple3() {
    this.http.get(this.url, { observe: 'response' })
      .subscribe(response => {
        console.log('Status: ' + response.status);
        console.log('URL: ' + response.url);
        console.log('Title: ' + response.body['title']);
      });
  }

  exemple4() {
    this.http.get<Todo>(this.url).subscribe(data => {
      console.log(data.title); // OK
      //console.log(data.test); // Error
    });
  }

  exemple5() {
    this.http.get('http://localhost:3000/injectionsample', { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
      });
  }

}
