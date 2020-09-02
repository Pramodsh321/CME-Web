import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResolutionTypesComponent } from './resolution-types/resolution-types.component';
import { ResolutionComponent } from './resolution.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ResolutionComponent, children: [{ path: 'resolutiontypes', component: ResolutionTypesComponent }] }])],
  exports: [RouterModule]
})
export class ResolutionRoutingModule { }
