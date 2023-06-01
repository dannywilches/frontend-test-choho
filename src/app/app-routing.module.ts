import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { CrearTercerosComponent } from './crear-terceros/crear-terceros.component';
import { HomeComponent } from './home/home.component';
import { TercerosComponent } from './terceros/terceros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'terceros', component: TercerosComponent },
  { path: 'crear-pedido', component: CrearPedidoComponent },
  { path: 'crear-terceros', component: CrearTercerosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
