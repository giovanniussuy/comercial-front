import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ComponentePreco } from 'src/app/model/componente/componente-preco.module';
import { Tipos } from 'src/app/model/componente/tipos.module';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-componente-edit',
  templateUrl: './componente-edit.component.html',
  styleUrls: ['./componente-edit.component.css']
})
export class ComponenteEditComponent implements OnInit {
  componente: ComponentePreco;
  aplicacaoOpcoes: [];
  id: string;

  @ViewChild('formEditUser', { static: true })
  formEditUser: NgForm;

  public columns: Array<PoTableColumn> = [{
    property: 'string',
    width: '40%',
    label: 'Item',
    format: ''
  }, {
    property: 'string',
    width: '40%',
    label: 'Descrição',
    format: ''
  }];

  constructor(private service: ComponenteService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    if (this.id) {
      this.load(this.id)
    }
  }

  ngOnInit() {
  }

  load(id: string) {
    // if (this.id != null) {
    this.service.getById(id).subscribe((response) => {
      console.log(response.codigo)
      this.componente.codigo = response.codigo, this.componente.descricao = response.descricao,
        console.log(this.componente.codigo)
    });
    // }
  }

}
