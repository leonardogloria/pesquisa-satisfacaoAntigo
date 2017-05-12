import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PesquisaService} from './pesquisa.service'
import {PesquisaDetailResolver} from './pesquisa.resolver.service'


import { AppComponent } from './app.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { LoginComponent } from './login/login.component';
import {routing} from './app.routes';
import { ErrorComponent } from './error/error.component';
import { SucessoComponent } from './sucesso/sucesso.component'

@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    LoginComponent,
    ErrorComponent,
    SucessoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PesquisaService,PesquisaDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
