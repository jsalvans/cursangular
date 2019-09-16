import { Pipe, PipeTransform } from '@angular/core';
import { Tipus } from '@enums/Tipus.enum';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  constructor(public translate: TranslateService) { }

  transform(pagines: any[], filtre: string, tipus: Tipus): any {
    const arrayTemp = [];
    for (const pagina of pagines) {
      let prop1 = this.normalize(pagina.nom);
      if (pagina.traduir === true) {
        prop1 = this.normalize(this.translate.instant(pagina.nom));
      }

      const prop2 = this.normalize(filtre);
      if ((!pagina.url || !filtre || prop1.includes(prop2)) && (tipus == null || pagina.tipus === tipus)) {
        arrayTemp.push(pagina);
      }
    }

    return arrayTemp;
  }

  private normalize(text: string): string {
    return text ? text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : text;
  }
}
