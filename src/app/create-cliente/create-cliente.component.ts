import { ClientesService } from './../clientes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  formulario: FormGroup;
  @Input() listaClientes: Cliente[] = [];
  
  constructor(private formBuilder: FormBuilder, public clientesService: ClientesService, private router: Router) { }
  
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      limiteCredito: ['', Validators.required]
    });
  }
  onSubmit(){
    let novoCliente: Cliente;
    novoCliente = this.formulario.value;
    this.clientesService.addCliente(novoCliente);
    alert('Cliente adicionado com sucesso!');
    this.router.navigate(['/clientes']);
  }

}


