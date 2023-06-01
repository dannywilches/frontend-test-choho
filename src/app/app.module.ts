import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { CookieService } from "ngx-cookie-service";

import { HomeComponent } from './home/home.component';
import { TercerosComponent } from './terceros/terceros.component';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { CrearTercerosComponent } from './crear-terceros/crear-terceros.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TercerosComponent,
    CrearPedidoComponent,
    CrearTercerosComponent,
    LoginComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
