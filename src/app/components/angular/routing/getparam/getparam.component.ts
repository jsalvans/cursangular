import { Component, OnInit } from '@angular/core';
import { SizeService } from '@services/size.service';

@Component({
  selector: 'app-getparam',
  templateUrl: './getparam.component.html',
  styleUrls: ['./getparam.component.css']
})
export class GetparamComponent implements OnInit {

  constructor(public size: SizeService) { }

  ngOnInit() { }

  recuperarParams: string = `import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // <---

@Component({
  selector: 'app-compoment',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component implements OnInit {

  constructor(private route: ActivatedRoute,) { } // <---

  id: string;

  ngOnInit() {
    this.route.params.subscribe(params => { // <---
      this.id = params['id'];
    });
  }

}`;

}
