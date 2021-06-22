import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { LoginModule, LoginRoutingModule } from './autenticacao';
import { AppRoutingModule } from './app-routing.module';

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

    AppRoutingModule /* O AppRoutingModule deve ser o último dos imports*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
