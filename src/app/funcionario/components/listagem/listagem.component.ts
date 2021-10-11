import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { DataSource } from "@angular/cdk/collections";
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule, MatSort} from '@angular/material/sort';
import { Observable} from "rxjs/Observable";
import  'rxjs/add/observable/of';

import { LancamentoService, Lancamento } from "src/app/shared";


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao'];

  constructor(
      private lancamentoService: LancamentoService,
      private snackBar: MatSnackBar
  ){ }

  ngOnInit() {
      this.lancamentoService.listarTodosLancamentos()
          .subscribe(
              data => {
                  const lancamentos = data['data'] as Lancamento[];
                  this.dataSource = new MatTableDataSource<Lancamento>(lancamentos)
              },
              err => {
                  const msg: string = "Erro obtendo  lançamentos.";
                  this.snackBar.open(msg, "Erro", { duration: 5000 });
              }
          );
  }

}
