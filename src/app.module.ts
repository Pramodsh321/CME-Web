import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderService } from './app-core/services/loader.service';
import {LoaderComponent} from './assets/loader/loader.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ApiCommonService} from './app-core/services/api-common-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseHttpService } from './app-core/services/base-http.service'
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [LoaderService,ApiCommonService,
    { provide: HTTP_INTERCEPTORS, useClass: BaseHttpService, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule { }
