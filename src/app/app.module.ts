import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './modules/authentication/login/login.component';
import { Interceptor } from './core/interceptors/interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConsultasIQGuard } from './core/guards/consultas-iq.guard';
import { FormsModule } from '@angular/forms';
import { MsalModule } from '@azure/msal-angular';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    MsalModule.forRoot({
      auth: {
        // clientId: "cb0ddcd3-1cd3-4cf2-b4bf-334b61621b67",
        // authority: "https://pruebacontosob2c.b2clogin.com/pruebacontosob2c.onmicrosoft.com/B2C_1_login",
         clientId: "f718e0e4-5896-4b25-a039-ea2d6bc3f365", // pruebas B2C
        authority: "https://iqoutsourcingtestb2c.b2clogin.com/iqoutsourcingtestb2c.onmicrosoft.com/B2C_1_login", // pruebas B2C
        validateAuthority: false,
        redirectUri: "http://localhost:4200/" // desarrollo
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
      }
    }, {
      consentScopes: [
        "user.read", "openid", "profile"
      ]
    })   
  ],
  providers: [ConsultasIQGuard, { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
