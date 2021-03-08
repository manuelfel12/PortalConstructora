import { NgModule } from "@angular/core";
import { ConstructorRoutingModule } from "./constructor-routing.module";
import { ConstructorComponent } from "./constructor.component";
import { CrearComponent } from './crear/crear.component';
import { DataTablesModule } from "angular-datatables";
import { CommonModule } from "@angular/common";
import { EditarComponent } from './editar/editar.component';

@NgModule({
    declarations: [ConstructorComponent, CrearComponent, EditarComponent],
    imports: [
        ConstructorRoutingModule, DataTablesModule, CommonModule
    ]
})

export class ConstructorModule { }
