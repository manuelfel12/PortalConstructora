import { NgModule } from "@angular/core";
import { AdministracionUsuarioRoutingModule } from "./administracion-usuario-routing.module";
import { AdministracionUsuariosComponent } from "./administracion-usuarios.component";
import { ConsultarComponent } from './consultar/consultar.component';
import { EditarComponent } from './editar/editar.component';
import { DeshabilitarComponent } from './deshabilitar/deshabilitar.component';
import { CrearComponent } from "./crear/crear.component";

@NgModule({
    declarations: [AdministracionUsuariosComponent, CrearComponent, ConsultarComponent, EditarComponent, DeshabilitarComponent],
    imports: [ AdministracionUsuarioRoutingModule],
    // providers: [ ConsultasIQGuard ],
})

export class AdministracionUsuarioModule { }