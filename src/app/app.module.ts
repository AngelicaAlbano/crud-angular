import { AuthService } from './auth.service';
import { ClientesService } from './clientes.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListagemComponent } from './listagem/listagem.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListagemComponent,
    DetalheComponent,
    CreateClienteComponent,
    HomeComponent,
    MenuComponent,
    EditClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    //routing
    
  ],
  providers: [ClientesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
