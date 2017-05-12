import {RouterModule, Routes} from '@angular/router'
import {PesquisaComponent} from './pesquisa/pesquisa.component'
import {ErrorComponent} from './error/error.component'
import {SucessoComponent} from './sucesso/sucesso.component'
const appRoutes: Routes = [
    {path: 'pesquisa/:hash',component:PesquisaComponent},
    {path: 'not-found',component:ErrorComponent},
    {path: 'sucesso',component:SucessoComponent},
    {path: '**', redirectTo: 'not-found'}
];
export const routing = RouterModule.forRoot(appRoutes);
    

