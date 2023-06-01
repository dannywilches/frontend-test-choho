import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-crear-terceros',
  templateUrl: './crear-terceros.component.html',
  styleUrls: ['./crear-terceros.component.css']
})
export class CrearTercerosComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  infoTercero: any = [];
  resultPedido: any = [];

  constructor(private connectionService: ConnectionService, private formBuilder: FormBuilder, public router: Router, public routeActive: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      nit: new FormControl(this.infoTercero.nit, [Validators.required, Validators.maxLength(20)]),
      razon_social: new FormControl(this.infoTercero.razon_social, [Validators.required, Validators.maxLength(50)]),
      tipo: new FormControl(this.infoTercero.tipo, [Validators.required, Validators.maxLength(20)]),
      activo: new FormControl(this.infoTercero.activo, [Validators.required, Validators.maxLength(5)]),
    });
   }



  ngOnInit(): void {
  }

  nuevoTercero(){
    this.connectionService.registrarTercero(this.userForm.value).subscribe(response =>{
      this.resultPedido = response;
      if (this.resultPedido.status == 201) {
        Swal.fire(
          'Registro Exitoso',
          'El tercero ha sido registrado',
          'success'
        ).then((result) => {
          this.router.navigate(['/', 'terceros']);
        });
      }
      else{
        Swal.fire(
          'Error',
          'El tercero no pudo ser registrado',
          'error'
        );
      }
    });
  }

}
