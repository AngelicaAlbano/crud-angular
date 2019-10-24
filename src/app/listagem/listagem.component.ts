import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ClientesService } from './../clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  listaClientes: Cliente[] = [];

  constructor(private clientesService: ClientesService, private router: Router) { }

  ngOnInit() {
    this.listaClientes = this.clientesService.getClientes();
  }
  goDetail() {
    this.router.navigate(['/clientes/codigo']);
  }

  delete(){
    
  }
  

}
