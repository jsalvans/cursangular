import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '@services/httpclient.service'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(public service: HttpclientService) { }

  init1: string = `import { HttpClientModule } from '@angular/common/http';`;
  init2: string = `imports: [
  HttpClientModule
]`;
  init3: string = `import { HttpClient } from '@angular/common/http';`;
  init4: string = `constructor(private http: HttpClient) { }`;

  exemple1: string = `this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  .subscribe(data => {
      console.log(data['title']);
  });`;

  resultat1: string = `delectus aut autem`;

  exemple2: string = `this.http.get('https://jsonplaceholder.typicode.com/todos/1', {responseType: 'text'})
  .subscribe(data => {
      console.log(data); // <--- string
  });`;

  resultat2: string = `{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`;

  exemple3: string = `this.http.get('https://jsonplaceholder.typicode.com/todos/1', {observe: 'response'})
  .subscribe(response => {
    console.log('Status: ' + response.status);
    console.log('URL: ' + response.url);
    console.log('Title: ' + response.body['title']);
  });`;

  resultat3: string = `Status: 200
URL: https://jsonplaceholder.typicode.com/todos/1
Title: delectus aut autem`;

  exemple4: string = `interface Todo {
  title: string;
}

this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
  console.log(data.title); // OK
  //console.log(data.test); // Error
});`;

  ngOnInit() {
    this.service.exemple1();
    this.service.exemple2();
    this.service.exemple3();
    this.service.exemple4();
  }

}
