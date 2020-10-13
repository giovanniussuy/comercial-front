import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoFieldModule, PoModule } from '@po-ui/ng-components';
import { ComponenteEditComponent } from './componente-edit/componente-edit.component';
import { ComponenteListComponent } from './componente-list/componente-list.component';
import { ComponenteRoutingModule } from './componente-routing.module';

@NgModule({
  declarations: [ComponenteListComponent, ComponenteEditComponent],
  imports: [
    CommonModule,
    ComponenteRoutingModule,
    PoModule,
    FormsModule,
    PoFieldModule
  ]
})
export class ComponenteModule { }
