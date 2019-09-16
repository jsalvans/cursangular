import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  innerWidth: number;

  isMobile() {
    return innerWidth < 1024;
  }

}
