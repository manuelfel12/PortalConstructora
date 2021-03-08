import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactoComponent } from "./contacto/contacto.component";
import { CrearComponent } from "./crear/crear.component";
import { EditarComponent } from "./editar/editar.component";
import { ProjectsComponent } from "./projects.component";

const routes: Routes = [
    {
        path: "", component: ProjectsComponent
    },
    {
        path: "Crear", component: CrearComponent
    },
    {
        path: "Editar", component: EditarComponent
    },
    {
        path: "Contactos", component: ContactoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectsRoutingModule { }