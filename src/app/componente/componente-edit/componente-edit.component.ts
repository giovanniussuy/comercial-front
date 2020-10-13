import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { PoComboOptionTemplateDirective, PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ComponentePreco } from 'src/app/model/componente/componente-preco.module';
import { Tipos } from 'src/app/model/componente/tipos.module';
import { Item } from 'src/app/model/item/item.module';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-componente-edit',
  templateUrl: './componente-edit.component.html',
  styleUrls: ['./componente-edit.component.css']
})
export class ComponenteEditComponent implements OnInit {

  componente: ComponentePreco;
  aplicacaoOpcoes: [];
  tipos: Array<Tipos>;

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

  public items: Array<Item> = [];
  
  constructor(private service: ComponenteService, private router: Router) {
    this.load();
  }

  tableActions: PoTableAction[] = [
    { label: 'Editar', icon: "po-icon po-icon-edit", action: item => this.router.navigateByUrl(`componente/edit/${item.id}`) },
    { label: 'Deletar', icon: "po-icon po-icon-delete", action: this.delete.bind(this) }
  ];

  pageActions: PoPageAction[] = [
    { label: 'Novo', action: item => this.router.navigateByUrl(`componente/new`) }
  ];
  
  ngOnInit() {
    this.tipos = [{codigo: 1, descricao: ''}, {codigo: 2, descricao: ''}]
    this.items = [{_id: '1', codigo: 1, descricao: 'item 1'
    }, {_id: '2', codigo: 2, descricao: 'item 2'
    }, {_id: '3', codigo: 3, descricao: 'item 3'
  }]
    this.componente = {_id: '1', codigo: 1, descricao: 'Frete', unidadeMedida: 'km', moeda: 'R$', codigoExterno: '1', tipo: '1', tabela: 'Fretes', aplicacao: 'Frete', ativo: false, hedge: false, item: this.items}
  }

  delete(item: any) {
    // this.service.delete(item.id).subscribe(() => this.load())
  }

  load() {
    // this.service.get().subscribe((response) => { this.items = response.items });s
  }
}
