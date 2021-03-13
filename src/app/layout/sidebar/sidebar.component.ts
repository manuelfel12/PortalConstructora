import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FuncionalidadesPorRol } from "src/app/core/models/funcionalidades-por-rol.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public MenuItem: FuncionalidadesPorRol[] = [];

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.authService.getFuncionalidadesPorRol().subscribe(response => {
      this.MenuItem = Object.assign(response['Data']);
    });
  }

}