import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoTableAction, PoTableColumn, PoNotificationService,PoSelectOption } from '@po-ui/ng-components';
import { ComponentePreco } from 'src/app/model/componente/componente-preco.module';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-componente-edit',
  templateUrl: './componente-edit.component.html',
  styleUrls: ['./componente-edit.component.css']
})
export class ComponenteEditComponent implements OnInit {
  componente: ComponentePreco = { codigo: '', descricao: '', itens: [], idsComponentes: [], tiposFrete: [], finalidades: [], aplicacao: '', unidadeMedida: '', moeda: '', tabelaPreco: '', codigoExterno: '', ativo: false, hedge: false, tipo: '', _id: '' };
  aplicacaoOpcoes: [];
  id: string;
  itemSelect: any;
  componenteSelect: any;
  tipoFreteSelect: any;
  finalidadeSelect: any;

  optionsItens: Array<PoSelectOption> = [];
  optionsComponentes: Array<PoSelectOption> = [];
  optionsFrete: Array<PoSelectOption> = [];
  optionsFinalidade: Array<PoSelectOption> = [];


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

  public tableColumn: Array<PoTableColumn> = [{
    property: 'descricao',
    width: '20%',
    label: 'Descrição',
    format: ''
}]

public tableColumnFin: Array<PoTableColumn> = [{
    property: 'descricao',
    width: '20%',
    label: 'Descrição',
    format: ''
}]

public tableColumnFrete: Array<PoTableColumn> = [{
    property: 'descricao',
    width: '20%',
    label: 'Descrição',
    format: ''
}]


public tableColumnComponentes: Array<PoTableColumn> = [{
    property: 'descricao',
    width: '20%',
    label: 'Descrição',
    format: ''
}]

  tableActionsItem: PoTableAction[] = [
    {
      label: 'Deletar', icon: "po-icon po-icon-delete",
      action: item => this.delete(item,'item')
    }
  ];

  tableActionsComponente: PoTableAction[] = [
    {
      label: 'Deletar', icon: "po-icon po-icon-delete",
      action: item => this.delete(item,'compo')
    }
  ];

  tableActionsFrete: PoTableAction[] = [
    {
      label: 'Deletar', icon: "po-icon po-icon-delete",
      action: item => this.delete(item,'frete')
    }
  ];

  tableActionsFinalidade: PoTableAction[] = [
    {
      label: 'Deletar', icon: "po-icon po-icon-delete",
      action: item => this.delete(item,'finalidade')
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

 

  constructor(private service: ComponenteService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private poNotification: PoNotificationService) {
    this.loadItems();
    this.loadFrete();
    this.loadFinalidade();
    this.loadComponente();
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
      
    });
  }

  save() {
    if (this.id) {
      this.service.update(this.componente, this.id).subscribe(() => this.poNotification.success(`Produto atualizado`));

    } else {
      this.service.create(this.componente).subscribe(() => this.poNotification.success(`Produto criado`));
    }

  }

  cancel() {
    this.back();
  }

  delete(obj: any,tipo : String) {

    switch(tipo) { 
      case 'item': { 
        let index = this.componente.itens.indexOf(obj)
        this.componente.itens.splice(index, 1)
         break; 
      } 
      case 'compo': { 
        let index = this.componente.idsComponentes.indexOf(obj)
        this.componente.idsComponentes.splice(index, 1)
         break; 
      } 
      case 'frete': { 
        let index = this.componente.tiposFrete.indexOf(obj)
        this.componente.tiposFrete.splice(index, 1)
        break; 
      } 
      case 'finalidade': { 
        let index = this.componente.finalidades.indexOf(obj)
        this.componente.finalidades.splice(index, 1)
        break; 
      } 
   } 
    
  }

  back() {
    //this.poNotification.success(`Action clicked: `);
    this.router.navigateByUrl(`componente`);
  }

  
  incluirItem() {
    this.componente.itens.push({id: this.getIdItens(), descricao: this.itemSelect });
    this.itemSelect = null;
    this.poModalItem.close();
  }

  getIdItens(): String{
    /*
      { label: 'Milho', value: '8a812216-0e2a-11eb-adc1-0242ac120002' },
      { label: 'Soja',  value: '8a81248c-0e2a-11eb-adc1-0242ac120002' },
      { label: 'Trigo', value: '8a8125ea-0e2a-11eb-adc1-0242ac120002' }  
    */
    switch(this.itemSelect) { 
      case 'Milho': { 
         return '8a812216-0e2a-11eb-adc1-0242ac120002'; 
         break; 
      } 
      case 'Soja': { 
         return '8a81248c-0e2a-11eb-adc1-0242ac120002';
         break; 
      } 
      case 'Trigo': { 
        return '8a8125ea-0e2a-11eb-adc1-0242ac120002';
        break; 
      } 
   } 

  }

  loadItems(){
    this.optionsItens =  [
      { label: 'Milho', value: 'Milho' },
      { label: 'Soja',  value: 'Soja' },
      { label: 'Trigo', value: 'Trigo' }  
    ];
  }

  incluirComponente() {

    let componenteDescricao = '';
    this.optionsComponentes.forEach((element) => {
      console.log(element.label)
      if(element.value == this.componenteSelect)
      {
        componenteDescricao = element.label
      }
    }

    )

    this.componente.idsComponentes.push({id: this.getIdComponente(), descricao: componenteDescricao });
    this.componenteSelect = null;
    this.poModalComponente.close();
  }

  getIdComponente(): String{
    return this.componenteSelect
  }

  getObjetoSelecionado(opt: Array<PoSelectOption>, pesquisarPor: any) : any {
    
    opt.forEach((element) => {
      if(element.value == pesquisarPor)
      {
        return ({id: element.value , descricao: element.label });
      }
    })


  }

  loadComponente(){
    this.service.get().subscribe((response) => {
      /*for (let index = 0; index < response['items'].length; index++) {
        this.optionsComponentes.push({label : response['items'][index].descricao, 
                        value : response['items'][index].descricao})  
       
        
      }*/

      response['items'].forEach(element => {
        
        this.optionsComponentes.push({label : element.descricao, value : element.id})  
      });
              

    });
    
  }

  incluirTipoFrete() {
    this.componente.tiposFrete.push({id: this.getIdFrete(), descricao: this.tipoFreteSelect });
    this.tipoFreteSelect = null;
    this.poModalTipoFrete.close();
  }

  getIdFrete(): String{
    /*
    { label: 'CIF', value: '8a8127ca-0e2a-11eb-adc1-0242ac120002' },
    { label: 'FOB', value: '8a812900-0e2a-11eb-adc1-0242ac120002' }
    */
    switch(this.tipoFreteSelect) { 
      case 'CIF': { 
         return '8a8127ca-0e2a-11eb-adc1-0242ac120002'; 
         break; 
      } 
      case 'FOB': { 
         return '8a812900-0e2a-11eb-adc1-0242ac120002';
         break; 
      } 
   } 
  }

  loadFrete(){
    this.optionsFrete =  [
      { label: 'CIF', value: 'CIF' },
      { label: 'FOB',  value: 'FOB' }
    ];
  }

  incluirFinalidade() {
    this.componente.finalidades.push({id: this.getIdFinalidade(), descricao: this.finalidadeSelect });
    this.finalidadeSelect = null;
    this.poModalFinalidade.close();
  }

  getIdFinalidade(): String{
    /*
     { label: 'INDUSTRIALIZAÇÃO',  value: '49abe010-0e29-11eb-adc1-0242ac120002' },
    { label: 'EXPORTAÇÃO DIRETA', value: '49abe38a-0e29-11eb-adc1-0242ac120002' },
    { label: 'COMPRA MATERIA-PRIMA', value: '49abe484-0e29-11eb-adc1-0242ac120002' }    
    */
    switch(this.finalidadeSelect) { 
      case 'INDUSTRIALIZAÇÃO': { 
         return '49abe010-0e29-11eb-adc1-0242ac120002'; 
         break; 
      } 
      case 'EXPORTAÇÃO DIRETA': { 
         return '49abe38a-0e29-11eb-adc1-0242ac120002';
         break; 
      } 
      case 'COMPRA MATERIA-PRIMA': { 
        return '49abe484-0e29-11eb-adc1-0242ac120002';
        break; 
      } 
   } 

  }

  loadFinalidade(){
    this.optionsFinalidade =  [
      { label: 'INDUSTRIALIZAÇÃO', value: 'INDUSTRIALIZAÇÃO' },
      { label: 'EXPORTAÇÃO DIRETA',  value: 'EXPORTAÇÃO DIRETA' },
      { label: 'COMPRA MATERIA-PRIMA', value: 'COMPRA MATERIA-PRIMA' }  
    ];
  }

}
