import { Usuario } from './usuario.interface';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private autenticado = false;

  constructor(private router: Router) { }

  login(usuario: Usuario) {
    if(usuario.email === 'angelica@email.com' 
    && usuario.senha === usuario.email){
      this.autenticado = true;
      this.showNavBar(true);
      this.router.navigate(['/']);
    } else {
      this.autenticado = false;
    }
  }

  logout(){
    this.autenticado = false;
    this.showNavBar(false);
    this.router.navigate(['/login']);
  }

  isAutenticado() {
    return this.autenticado;
  }
  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
 }
}
