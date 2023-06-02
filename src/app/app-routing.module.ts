import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginService } from './connection/after-login.service';
import { BeforeLoginService } from './connection/before-login.service';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { CrearTercerosComponent } from './crear-terceros/crear-terceros.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TercerosComponent } from './terceros/terceros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AfterLoginService] },
  { path: 'terceros', component: TercerosComponent, canActivate: [AfterLoginService] },
  { path: 'pedidos', component: PedidosComponent, canActivate: [AfterLoginService] },
  { path: 'crear-pedido', component: CrearPedidoComponent, canActivate: [AfterLoginService] },
  { path: 'crear-terceros', component: CrearTercerosComponent, canActivate: [AfterLoginService] },
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
