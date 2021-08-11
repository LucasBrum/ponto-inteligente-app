import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MascaraDirective } from './directives/mascara.directive';
import { CadastrarPjService } from './../autenticacao/cadastro-pj/services';



@NgModule({
  declarations: [
    MascaraDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective
  ],
  providers: [
    CadastrarPjService
  ]
})
export class SharedModule { }
