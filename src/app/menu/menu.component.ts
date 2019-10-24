import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private showNavBar: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.showNavBarEmitter.subscribe(
      (mode: boolean) => {
        if(mode !== null) {
          this.showNavBar = mode;
        }
      }
    );
  }
  isAutenticado(){
    return this.authService.isAutenticado();
  }
  onLogout(){
    this.authService.logout();
  }
}
