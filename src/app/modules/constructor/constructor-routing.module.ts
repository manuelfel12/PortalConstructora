import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConstructorComponent } from "./constructor.component";
import { CrearComponent } from "./crear/crear.component";

const routes: Routes = [
    { 
        path: "", 
        // canActivate: [], //IMPLEMETAR Guards
        component: ConstructorComponent 
    },
    { 
        path: "Crear", 
        // canLoad: [ConsultasIQGuard], //IMPLEMETAR Guards
        component: CrearComponent 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConstructorRoutingModule { }