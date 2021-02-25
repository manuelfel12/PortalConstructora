import jwt_decode from "jwt-decode";
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FuncionalidadesPorRol } from "src/app/core/models/funcionalidades-por-rol.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  MenuItem: FuncionalidadesPorRol[] = [];

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getMenu();
  }

  expandDynamicMenu(elemento: any) {
    elemento.expanded = false;
    elemento.expanded = !elemento.expanded;    
  }

  getMenu() {
      this.userService.getFuncionalidadesPorRol().subscribe(response => {
        this.MenuItem = Object.assign(response['Data'])
      });
        
  }

  

}