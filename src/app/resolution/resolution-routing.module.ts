import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolutionTypesComponent } from './resolution-types/resolution-types.component';
const routes: Routes = [
  { path: 'resolutiontypes', component: ResolutionTypesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolutionRoutingModule { }
