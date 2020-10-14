import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Principal', link: '/', icon: 'po-icon-home', shortLabel: 'Principal' },
    { label: 'Componente de Preços', link: '/componente', icon: 'po-icon-plus-circle', shortLabel: 'Componente' },
  ];

}
