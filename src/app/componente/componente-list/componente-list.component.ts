import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ComponenteService } from '../componente.service';

@Component({
    selector: 'app-componente-list',
    templateUrl: './componente-list.component.html',
    styleUrls: ['./componente-list.component.css']
})
export class ComponenteListComponent {

    public items: Array<any> = [];

    constructor(private service: ComponenteService, private router: Router) {
        this.load();
    }

    pageActions: PoPageAction[] = [
        { label: 'Novo', action: item => this.router.navigateByUrl(`componente/new`) }
    ];

    // tableColumn: Array<PoTableColumn> = [{label:'Codigo'}];
    public tableColumn: Array<PoTableColumn> = [{
        property: 'codigo',
        width: '40%',
        label: 'Código',
        format: ''
      }, {
        property: 'descricao',
        width: '40%',
        label: 'Descrição',
        format: ''
      }];

    tableActions: PoTableAction[] = [
        {
            label: 'Editar', icon: "po-icon po-icon-edit",
            action: item => this.router.navigateByUrl(`componente/edit/${item.id}`)
        },

        {
            label: 'Deletar', icon: "po-icon po-icon-delete",
            action: item => this.delete.bind(item)
        }
    ];

    load() {
        this.service.get().subscribe((response) => { this.items = response.items; console.log(this.items) });
    }

    delete(item: any) {
        this.service.delete(item.id).subscribe(() => this.load())
    }

}
