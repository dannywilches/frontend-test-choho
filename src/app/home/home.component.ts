import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
