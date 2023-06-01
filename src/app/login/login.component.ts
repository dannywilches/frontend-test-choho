import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  dataLogin: any = [];

  constructor(private connectionService: ConnectionService, private formBuilder: FormBuilder, public router: Router, public routeActive: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      email: new FormControl(this.dataLogin.email, [Validators.required, Validators.maxLength(20)]),
      password: new FormControl(this.dataLogin.password, [Validators.required, Validators.maxLength(50)]),
    });
   }

  ngOnInit(): void {
  }

  LoginSession(){
    this.connectionService.inicioSesion(this.userForm.value).subscribe(response =>{

    });
  }

}
