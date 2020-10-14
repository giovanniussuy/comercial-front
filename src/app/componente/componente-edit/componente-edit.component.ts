import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ComponentePreco } from 'src/app/model/componente/componente-preco.module';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-componente-edit',
  templateUrl: './componente-edit.component.html',
  styleUrls: ['./componente-edit.component.css']
})
export class ComponenteEditComponent implements OnInit {
  componente: ComponentePreco = { codigo: '', descricao: '', item: [], componente: [], tipoFrete: [], finalidade: [], aplicacao: '', unidadeMedida: '', moeda: '', tabelaPreco: '', codigoExterno: '', ativo: false, hedge: false, tipo: '', _id: '' };
  aplicacaoOpcoes: [];
  id: string;
  itemSelect: any;
  componenteSelect: any;
  tipoFreteSelect: any;
  finalidadeSelect: any;

  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;
  @ViewChild('modalItem', { static: true }) poModalItem: PoModalComponent;
  @ViewChild('modalComponente', { static: true }) poModalComponente: PoModalComponent;
  @ViewChild('modalTipoFrete', { static: true }) poModalTipoFrete: PoModalComponent;
  @ViewChild('modalFinalidade', { static: true }) poModalFinalidade: PoModalComponent;

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

  tableActions: PoTableAction[] = [
    {
      label: 'Deletar', icon: "po-icon po-icon-delete",
      action: item => this.delete(item)
    }
  ];

  pModalItemAction: PoModalAction = { label: "Incluir", action: () => { this.incluirItem() }, danger: true };
  sModalItemAction: PoModalAction = { label: 'Cancel', action: () => { this.poModalItem.close(); } };
  pModalComponenteAction: PoModalAction = { label: "Incluir", action: () => { this.incluirComponente() }, danger: true };
  sModalComponenteAction: PoModalAction = { label: 'Cancel', action: () => { this.poModalComponente.close(); } };
  pModalTipoFreteAction: PoModalAction = { label: "Incluir", action: () => { this.incluirTipoFrete() }, danger: true };
  sModalTipoFreteAction: PoModalAction = { label: 'Cancel', action: () => { this.poModalTipoFrete.close(); } };
  pModalFinalidadeAction: PoModalAction = { label: "Incluir", action: () => { this.incluirFinalidade() }, danger: true };
  sModalFinalidadeAction: PoModalAction = { label: 'Cancel', action: () => { this.poModalFinalidade.close(); } };
  pTitle: string;

  constructor(private service: ComponenteService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.pTitle = 'Incluir componente de preço';
    if (this.id) {
      this.pTitle = 'Editar componente de preço';
      this.load()
    }
  }

  ngOnInit() {
  }

  load() {
    this.service.getById(this.id).subscribe((response) => {
      this.componente = response
      this.componente.item = []
      this.componente.componente = []
      this.componente.tipoFrete = []
      this.componente.finalidade = [];
    });
  }

  save() {
    if (this.id) {
      this.service.update(this.componente, this.id).subscribe(() => this.back());

    } else {
      this.service.create(this.componente).subscribe(() => this.back());
    }

  }

  cancel() {
    this.back();
  }

  delete(obj: any) {
    if (obj.item) {
      let index = this.componente.item.indexOf(obj)
      this.componente.item.splice(index, 1)
    }
    else if (obj.componente) {
      let index = this.componente.componente.indexOf(obj)
      this.componente.componente.splice(index, 1)
    }
    else if (obj.tipoFrete) {
      let index = this.componente.tipoFrete.indexOf(obj)
      this.componente.tipoFrete.splice(index, 1)
    }
    else if (obj.finalidade) {
      let index = this.componente.finalidade.indexOf(obj)
      this.componente.finalidade.splice(index, 1)
    }
  }

  back() {
    this.router.navigateByUrl(`componente`);
  }

  incluirItem() {
    let incluirItem = { item: this.itemSelect, descricao: 'vendido' };
    this.componente.item.push(incluirItem);
    this.itemSelect = null;
    this.poModalItem.close();
  }

  incluirComponente() {
    let componenteSelect = { componente: this.componenteSelect, descricao: 'oficial' };
    this.componente.componente.push(componenteSelect);
    this.componenteSelect = null;
    this.poModalComponente.close();
  }

  incluirTipoFrete() {
    let tipoFreteSelect = { tipoFrete: this.tipoFreteSelect, descricao: 'registrado' };
    this.componente.tipoFrete.push(tipoFreteSelect);
    this.tipoFreteSelect = null;
    this.poModalTipoFrete.close();
  }

  incluirFinalidade() {
    let finalidadeSelect = { finalidade: this.finalidadeSelect, descricao: 'a definir' };
    this.componente.finalidade.push(finalidadeSelect);
    this.finalidadeSelect = null;
    this.poModalFinalidade.close();
  }

}
