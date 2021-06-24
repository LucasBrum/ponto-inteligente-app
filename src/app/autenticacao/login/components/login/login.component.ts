import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Login } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login-pf',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private snackBar: MatSnackBar,
        private router: Router,
        private loginServive: LoginService
    ){}
    
    ngOnInit() {
        this.gerarForm();
    }

    gerarForm() {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            senha: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    logar() {
        if (this.form.invalid) {
            
            return;
        }
        const login: Login = this.form.value;
        console.log(JSON.stringify(login));
        this.loginServive.logar(login)
            .subscribe( // método de escuta para lidar com o Observable, vai ficar aguardando o retorno da requisição do servidor.
                data => { // data é o retorno do servidor
                    console.log(JSON.stringify(data));
                    // armazena o token no localStorage do navegador, pois será utilizado entre as requisições
                    localStorage['token'] = data['data']['token']; 
                    const usuarioData = JSON.parse(
                        atob(data['data']['token'].split('.')[1]));
                        console.log(JSON.stringify(usuarioData));
                        if(usuarioData['role'] == 'ROLE_ADMIN') {
                            alert('Deve redirecionar para a página de admin');
                        } else {
                            alert('Deve redirecionar para a página de funcionário');
                        }
                    },
                    err => {
                        console.log(JSON.stringify(err));
                        let msg: string = "Tente novamente em instantes.";
                        if (err['status'] == 401) {
                            msg = "Email/senha inválido(s)."
                        }
                        this.snackBar.open(msg, "Erro", {duration: 5000});
                    }
            );
    }
}
