import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsultasIQGuard } from "./core/guards/consultas-iq.guard";
import { LoginGuard } from "./core/guards/login.guard";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./modules/authentication/login/login.component";


const routes: Routes = [

    { path: "login", component: LoginComponent },

    {
        path: "",   component: LayoutComponent, canActivate: [LoginGuard],
        children: [
            {
                path: "Constructoras",
                canActivate:[LoginGuard],
                loadChildren: () => import("./modules/constructor/constructor.module").then((m) => m.ConstructorModule)
            },
            {
                path: "projects",
                loadChildren: () => import("./modules/projects/projects.module").then((m) => m.ProjectsModule)
            },
            {
                path: "AdministracionUsuario",
                // canLoad: [ConsultasIQGuard],
                canActivateChild: [ConsultasIQGuard],
                loadChildren: () => import("./modules/administracion-usuarios/administracion-usuario.module").then((m) => m.AdministracionUsuarioModule)
            }
        ]
    },

    { path: "**", redirectTo: "" }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    // providers: [ ConsultasIQGuard ],
})

export class AppRoutingModule { }