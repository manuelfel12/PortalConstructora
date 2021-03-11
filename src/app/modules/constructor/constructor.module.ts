import { NgModule } from "@angular/core";
import { ConstructorRoutingModule } from "./constructor-routing.module";
import { ConstructorComponent } from "./constructor.component";
import { CrearComponent } from './crear/crear.component';
import { DataTablesModule } from "angular-datatables";
import { CommonModule } from "@angular/common";
import { EditarComponent } from './editar/editar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [ConstructorComponent, CrearComponent, EditarComponent, ContactoComponent],
    imports: [
        ConstructorRoutingModule, DataTablesModule, CommonModule, FormsModule, ReactiveFormsModule
    ]
})

export class ConstructorModule { }
