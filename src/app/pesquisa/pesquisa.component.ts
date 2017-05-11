import { Component, OnInit } from '@angular/core';
import {Pesquisa} from '../model/pesquisa';


@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  pesquisa:Pesquisa = new Pesquisa()
  
  constructor() { }

  ngOnInit() {
    this.pesquisa.nome = "Leonardo Gloria"
    this.pesquisa.curso = "Angular 2"
    this.pesquisa.email = "contato@leonardogloria.com.br"
   
  }
  enviaPesquisa(event){
    event.preventDefault();
    console.log(this.pesquisa);
    
    
  }

}
