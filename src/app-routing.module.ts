import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderService } from './app-core/services/loader.service';

const routes: Routes = [
  {
    path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    data: { preload: true }
  },
  {
    path: 'resolution', loadChildren: () => import('./app/resolution/resolution.module').then(m => m.ResolutionModule),
    data: { preload: true }
  },
  { path: '', redirectTo: 'account/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [LoaderService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
