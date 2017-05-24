import {RouterModule, Routes} from '@angular/router'
import {PesquisaComponent} from './pesquisa/pesquisa.component'
import {ErrorComponent} from './error/error.component'
import {SucessoComponent} from './sucesso/sucesso.component'
import {PesquisaDetailResolver} from './pesquisa.resolver.service'

const appRoutes: Routes = [
    {path: 'pesquisa/:hash',component:PesquisaComponent,
        resolve: {
              pesquisa: PesquisaDetailResolver
            }
},
    {path: 'not-found',component:ErrorComponent},
    {path: 'sucesso',component:SucessoComponent},
    {path: '**', redirectTo: 'not-found'}
];
export const routing = RouterModule.forRoot(appRoutes,{ useHash: true });

    

