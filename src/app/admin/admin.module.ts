import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CadastroComponent, AtualizacaoComponent, ListagemComponent, AdminComponent } from './components';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    CadastroComponent,
    AtualizacaoComponent,
    ListagemComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }
