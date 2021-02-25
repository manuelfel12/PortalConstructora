import { NgModule } from "@angular/core";
import { ConstructorRoutingModule } from "./constructor-routing.module";
import { ConstructorComponent } from "./constructor.component";
import { CrearComponent } from './crear/crear.component';

@NgModule({
    declarations: [ConstructorComponent, CrearComponent],
    imports: [
        ConstructorRoutingModule
    ]
})

export class ConstructorModule { }
