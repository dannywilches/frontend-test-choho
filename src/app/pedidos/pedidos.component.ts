import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: any = [];

  constructor(public connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.listaPedidosComponent();
  }

  listaPedidosComponent() {
    this.connectionService.listaPedidos().subscribe((data) =>{
      let dataPedidos: any = data;
      this.pedidos = dataPedidos.pedidos;
      console.log(data);
    });
  }

}
