import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoTableColumn } from '@po-ui/ng-components';
import { ComponentePreco } from 'src/app/model/componente/componente-preco.module';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-componente-edit',
  templateUrl: './componente-edit.component.html',
  styleUrls: ['./componente-edit.component.css']
})
export class ComponenteEditComponent implements OnInit {
  componente: ComponentePreco = { codigo: '', descricao: '', aplicacao: '', unidadeMedida: '', moeda: '', item: [], tabela: '', codigoExterno: '', ativo: true, hedge: true, tipo: '', _id: '' };
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
    this.id = this.activatedRoute.snapshot.params.id;

    if (this.id) {
      this.load()
    }
  }

  ngOnInit() {
  }

  load() {
    this.service.getById(this.id).subscribe((response) => {
      this.componente = response
    });
  }

}
