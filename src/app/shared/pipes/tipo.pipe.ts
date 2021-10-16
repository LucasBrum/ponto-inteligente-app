import { Pipe, PipeTransform } from '@angular/core';
import { Tipo } from '..';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo: Tipo, args?: any): string {
    return this.obterTexto(tipo);
  }

  obterTexto(tipo: Tipo): string {
    let tipoDesc: string;

    switch (tipo) {
      case Tipo.INICIO_TRABALHO:
        tipoDesc = 'Início do Trabalho';
        break;
      case Tipo.INICIO_ALMOCO:
        tipoDesc = 'Início do Almoço';
        break;
      case Tipo.TERMINO_ALMOCO:
        tipoDesc = 'Término do Almoço';
        break;
      case Tipo.TERMINO_TRABALHO:
        tipoDesc = 'Término do Trabalho';
        break;
    }
    return tipoDesc;
  }

}
