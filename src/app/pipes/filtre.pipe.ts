import { Pipe, PipeTransform } from '@angular/core';
import { Tipus } from '@enums/Tipus.enum';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(pagines: any[], filtre: string, tipus: Tipus): any {
    let arrayTemp = [];
    for (let pagina of pagines) {
      let prop1 = pagina['nom'].toLowerCase();
      let prop2 = filtre ? filtre.toLowerCase() : filtre;
      if((!pagina['url'] || !filtre || prop1.includes(prop2)) && (tipus == null || pagina['tipus'] === tipus)) {
        arrayTemp.push(pagina);
      }
    }

    return arrayTemp;
  }
}
