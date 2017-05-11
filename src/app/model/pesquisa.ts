import {Input } from '@angular/core';


export class Pesquisa{
     
    @Input()    nome:string
    @Input()    email:string
    @Input()    curso:string
    @Input()    nota:number
    @Input()    comentario:string
}