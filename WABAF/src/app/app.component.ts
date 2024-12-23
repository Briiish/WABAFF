import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { UsersComponent } from './components/users/users.component';
import { LoginService } from './services/login.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    RouterLink,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WABAF';
  rol: string = '';
  constructor(private loginService: LoginService) {}
  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.rol = this.loginService.showRole();
    return this.loginService.verificar();
  }
  isAdmin() {
    return this.rol === 'ADMIN';
  }

  isStudent() {
    return this.rol === 'STUDENT';
  }
}
