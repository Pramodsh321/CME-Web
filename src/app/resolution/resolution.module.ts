import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResolutionRoutingModule } from './resolution-routing.module';
import { ResolutionTypesComponent } from './resolution-types/resolution-types.component';
import { ResolutionComponent } from './resolution.component';


@NgModule({
  declarations: [
    ResolutionComponent,
    ResolutionTypesComponent
  ],
  imports: [
    ResolutionRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
})

export class ResolutionModule { }
