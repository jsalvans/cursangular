import { Component, OnInit } from '@angular/core';
import { SizeService } from '@services/size.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  constructor(public size: SizeService) { }

  ngOnInit() { }

  pathstrategy: string = 'RouterModule.forRoot(routes, {useHash: false})';
  hashstrategy: string = 'RouterModule.forRoot(routes, {useHash: true})';

}
