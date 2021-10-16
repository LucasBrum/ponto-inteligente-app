import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MascaraDirective } from './directives/mascara.directive';
import { CadastrarPjService } from './../autenticacao/cadastro-pj/services';
import { PtBrMatPaginatorIntl, TipoPipe, DataPipe } from './';


@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  providers: [
    CadastrarPjService,
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
