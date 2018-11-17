import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule}from '@angular/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import{InMemoryWebApiService}from './in-memory-web-api.service';
import{HttpClientModule}from '@angular/common/http'

//----------------------------------------------------------------------//

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryWebApiService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
