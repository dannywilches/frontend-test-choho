import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-terceros',
  templateUrl: './terceros.component.html',
  styleUrls: ['./terceros.component.css']
})
export class TercerosComponent implements OnInit {

  terceros: any = [];

  constructor(public connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.listaTercerosComponent();
  }

  listaTercerosComponent() {
    this.connectionService.listaTerceros().subscribe((data) =>{
      let dataTerceros: any = data;
      this.terceros = dataTerceros.terceros;
      console.log(data);
    });
  }

}
