import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministracionUsuariosComponent } from "./administracion-usuarios.component";
import { ConsultarComponent } from "./consultar/consultar.component";
import { CrearComponent } from "./crear/crear.component";
import { DeshabilitarComponent } from "./deshabilitar/deshabilitar.component";
import { EditarComponent } from "./editar/editar.component";

const routes: Routes = [
    { 
        path: "", 
        // canActivate: [], //IMPLEMETAR Guards
        component: AdministracionUsuariosComponent 
    },
    { 
        path: "Crear", 
        // canLoad: [ConsultasIQGuard], //IMPLEMETAR Guards
        component: CrearComponent 
    },
    { 
        path: "Consultar",  // Dummy component
        // canLoad: [], //IMPLEMETAR Guards
        component: ConsultarComponent 
    },
    { 
        path: "Actualizar",  // Dummy component
        // canLoad: [], //IMPLEMETAR Guards
        component: EditarComponent 
    },
    { 
        path: "Deshabilitar",  // Dummy component
        // canLoad: [], //IMPLEMETAR Guards
        component: DeshabilitarComponent 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    // providers: [ ConsultasIQGuard ]
})

export class AdministracionUsuarioRoutingModule { }
