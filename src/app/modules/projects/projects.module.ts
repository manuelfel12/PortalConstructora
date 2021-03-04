import { NgModule } from "@angular/core";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { DataTablesModule } from "angular-datatables";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ProjectsComponent, CrearComponent, EditarComponent],
    imports: [ProjectsRoutingModule, DataTablesModule, CommonModule]
})

export class ProjectsModule { }