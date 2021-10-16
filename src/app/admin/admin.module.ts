import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent, AtualizacaoComponent, ListagemComponent } from './components';

@NgModule({
  declarations: [
    CadastroComponent,
    AtualizacaoComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
