import { MenuComponent } from './menu/menu.component';
import { ClientesService } from './clientes.service';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ListagemComponent } from './listagem/listagem.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';


const appRoutes: Routes = [
    { path: 'clientes', component: ListagemComponent },
    { path: 'novo', component: CreateClienteComponent },
    { path: 'login', component: LoginComponent },
    { path: 'criar', component: CreateClienteComponent},
    { path: 'clientes/:codigo', component: DetalheComponent },
    { path: 'clientes/:codigo/edit', component: EditClienteComponent },
    { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard]}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [ClientesService]
})

export class AppRoutingModule { }