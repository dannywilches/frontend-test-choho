import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  infoPedido: any = [];
  resultPedido: any = [];

  constructor(private connectionService: ConnectionService, private formBuilder: FormBuilder, public router: Router, public routeActive: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      fecha_pedido: new FormControl(this.infoPedido.fecha_pedido, [Validators.required]),
      prefijo: new FormControl(this.infoPedido.prefijo, [Validators.required, Validators.maxLength(10)]),
      num_pedido: new FormControl(this.infoPedido.num_pedido, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      nit: new FormControl(this.infoPedido.nit, [Validators.required, Validators.maxLength(20)]),
      razon_social: new FormControl(this.infoPedido.razon_social, [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+'), Validators.maxLength(50)]),
      vendedor: new FormControl(this.infoPedido.vendedor, [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+'), Validators.maxLength(50)]),
      departamento: new FormControl(this.infoPedido.departamento, [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+'), Validators.minLength(5), Validators.maxLength(100)]),
      ciudad: new FormControl(this.infoPedido.ciudad, [Validators.required, Validators.maxLength(100)]),
    });
   }

  ngOnInit(): void {
  }

  nuevoPedido(){
    this.connectionService.registrarPedido(this.userForm.value).subscribe(response =>{
      this.resultPedido = response;
      if (this.resultPedido.status == 201) {
        Swal.fire(
          'Registro Exitoso',
          'El pedido ha sido registrado',
          'success'
        ).then((result) => {
          this.router.navigate(['/', 'home']);
        });
      }
      else{
        Swal.fire(
          'Error',
          'El pedido no pudo ser registrado',
          'error'
        );
      }
    });
  }

}
