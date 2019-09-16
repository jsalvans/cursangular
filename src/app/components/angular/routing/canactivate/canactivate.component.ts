import { Component, OnInit } from '@angular/core';
import { SizeService } from '@services/size.service';

@Component({
  selector: 'app-canactivate',
  templateUrl: './canactivate.component.html',
  styleUrls: ['./canactivate.component.css']
})
export class CanactivateComponent implements OnInit {

  constructor(public size: SizeService) { }

  ngOnInit() { }

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

}
