import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
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
  /*
    componente: any = {};
  
    id: string;
  
    @ViewChild('formEditUser', { static: true }) 
    formEditUser: NgForm;
  
    constructor(private service: ComponenteService, private activatedRoute: ActivatedRoute, private router: Router) {
      this.id = this.activatedRoute.snapshot.params.id;
      if(this.id){
        this.service.getById(this.id).subscribe(componente => this.componente = componente);
      }
    }
  
  
  
    cancel() {
      this.back()
    }
  
    save() {
  
  
      if(this.id){
        this.service.update(this.componente, this.id).subscribe(()=> this.back());
      } else {
        this.criarComponente();
        this.service.create(this.componente).subscribe(() => this.back());
      }
    }
  
    criarComponente(){
      this.componente = {
        data: this.componente.data,
        nutrientes: [{
          tipo: "NITROGENIO",
          valor: 0,
          valorIdeal: 0
        }]
    }
    }
    saveNew(){
      this.criarComponente();
      this.service.create(this.componente).subscribe(() => this.initialize());
  
    }
  
    back(){
      this.router.navigateByUrl(`componente`);
    }
  
    initialize(){
      this.componente = {};
    }*/

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
    this.tipos = [{ codigo: 1, descricao: '' }, { codigo: 2, descricao: '' }]
    this.items = [{
      _id: '1', codigo: 1, descricao: 'item 1'
    }, {
      _id: '2', codigo: 2, descricao: 'item 2'
    }, {
      _id: '3', codigo: 3, descricao: 'item 3'
    }]
    this.componente = { _id: '1', codigo: 1, descricao: 'Frete', unidadeMedida: 'km', moeda: 'R$', codigoExterno: '1', tipo: '1', tabela: 'Fretes', aplicacao: 'Frete', ativo: false, hedge: false, item: this.items }

    console.log('teste')
  }

  delete(item: any) {
    // this.service.delete(item.id).subscribe(() => this.load())
  }

  load() {
    // this.service.get().subscribe((response) => { this.items = response.items });s
  }

}
