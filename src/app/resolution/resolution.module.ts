import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResolutionRoutingModule } from './resolution-routing.module';
import { ResolutionTypesComponent } from './resolution-types/resolution-types.component';
import { ResolutionComponent } from './resolution.component';
import { ResolutionService } from './resolution.service';


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
  providers:[ResolutionService]
})

export class ResolutionModule { }
