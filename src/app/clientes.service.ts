import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  listaClientes: Cliente[] = [{ "codigo": 1,
  "nome": "Angelica",
  "email": "angelica@email.com",
  "limiteCredito": 100}];
  constructor() {  }

  getClientes(){
    return this.listaClientes;
  }

  addCliente(cliente:Cliente){
    this.listaClientes.push(cliente);
  }

//  getClienteByCodigo(codigo: number): Cliente{
//    return this.clientes.find(c => c.codigo == codigo);
//  }
//  delete(codigo: number){
//    this.clientes = this.clientes.filter(cliente => cliente.codigo != codigo);
//  }
//  update(cliente: Cliente){
//    var updateCliente = this.clientes.find(c => c.codigo == cliente.codigo);
//    updateCliente.nome = cliente.nome;
//    updateCliente.email = cliente.email;
//    updateCliente.limiteCredito = cliente.limiteCredito;
//    updateCliente.situacao = cliente.situacao;
//  }

}
