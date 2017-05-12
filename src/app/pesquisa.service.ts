import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Pesquisa} from './model/pesquisa';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PesquisaService {
  private _http : Http
  pesquisa : Pesquisa = new Pesquisa()
  private  url:string = 'https://nl99z4yial.execute-api.us-east-1.amazonaws.com/homolog/pesquisa/';

  constructor(_http:Http) { 
    this._http = _http;
  }

  getPesquisa(hash:string):Promise<Pesquisa>{
    let urlGet = this.url + hash
    return this._http.get(urlGet)
            .toPromise()
            .then(pesquisa => this.pesquisa = pesquisa.json().Items[0] as Pesquisa)
    
  }

}
