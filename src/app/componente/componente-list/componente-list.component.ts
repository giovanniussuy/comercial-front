import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
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

    tableActions: PoTableAction[] = [
        { label: 'Editar', icon: "po-icon po-icon-edit", action: this.load }
      ];

    load() {
        this.service.get().subscribe((response) => { this.items = response.items; console.log(this.items) });                
    }
    

}
