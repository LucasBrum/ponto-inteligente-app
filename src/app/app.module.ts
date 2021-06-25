import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { 
  LoginModule, 
  LoginRoutingModule,
  CadastroPjModule
} from './autenticacao';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,

    /* O AppRoutingModule deve ser o último dos imports, 
    pois ele é responsável por carregar todas as rodas
    */
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
