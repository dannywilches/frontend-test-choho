import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private apiBackend: string= 'http://127.0.0.1:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  listaPedidos(){
    return this.http.get(this.apiBackend + "/pedidos/all");
  }

  registrarPedido(pedido:any) {
    return this.http.post(this.apiBackend + "/pedidos/new", JSON.stringify(pedido), this.httpOptions);
  }

  listaTerceros(){
    return this.http.get(this.apiBackend + "/terceros/all");
  }

  registrarTercero(tercero:any) {
    return this.http.post(this.apiBackend + "/terceros/new", JSON.stringify(tercero), this.httpOptions);
  }
}
