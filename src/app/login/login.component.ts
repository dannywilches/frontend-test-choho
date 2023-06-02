import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from '../connection/token.service';
import { AuthService } from '../connection/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  dataLogin: any = [];
  error: any = [];

  constructor(
    private connectionService: ConnectionService,
    private formBuilder: FormBuilder,
    public router: Router,
    public routeActive: ActivatedRoute,
    private Token: TokenService,
    private Auth: AuthService
  ) {
    this.userForm = this.formBuilder.group({
      email: new FormControl(this.dataLogin.email, [Validators.required]),
      password: new FormControl(this.dataLogin.password, [Validators.required, Validators.maxLength(50)]),
    });
   }

  ngOnInit(): void {
  }

  LoginSession(){
    this.connectionService.inicioSesion(this.userForm.value).subscribe(response =>{
      console.log(response);
      this.handleResponse(response);
      this.Auth.changeAuthStatus(true);
      this.router.navigateByUrl('/terceros');
    },
    error => this.handleError(error));
  }

  handleResponse(data:any){
    this.Token.handle(data.token);
  }

  handleError(error:any) {
    this.error = error.error.error;
  }

}
