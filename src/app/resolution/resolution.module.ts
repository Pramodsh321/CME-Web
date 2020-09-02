import { NgModule } from '@angular/core';
import { ResolutionRoutingModule } from './resolution-routing.module';
import { ResolutionTypesComponent } from './resolution-types/resolution-types.component';
import { ResolutionComponent } from './resolution.component';


@NgModule({
  declarations: [
    ResolutionComponent,
    ResolutionTypesComponent
  ],
  imports: [
    ResolutionRoutingModule
  ],
})

export class ResolutionModule { }
