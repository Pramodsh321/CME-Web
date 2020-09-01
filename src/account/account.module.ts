import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent
  ],
  imports: [
    AccountRoutingModule
  ],
})

export class AccountModule { }
