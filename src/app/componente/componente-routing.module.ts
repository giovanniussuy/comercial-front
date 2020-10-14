import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteListComponent } from './componente-list/componente-list.component';
import { ComponenteEditComponent } from './componente-edit/componente-edit.component';


const routes: Routes = [{
  path: '', 
  component: ComponenteEditComponent
},
{
  path: 'new', 
  component: ComponenteEditComponent
},
{
  path: 'edit/:id', 
  component: ComponenteEditComponent
},
{
  path: 'edit', 
  component: ComponenteEditComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponenteRoutingModule { }
