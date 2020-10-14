import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteListComponent } from './componente/componente-list/componente-list.component';

const routes: Routes = [
  {
    path: '',
    component: ComponenteListComponent
  },
  {
  path: 'componente',
  loadChildren: () => import('./componente/componente.module').then(m => m.ComponenteModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
