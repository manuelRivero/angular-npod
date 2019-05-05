import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// services
import { NasaApiService } from './shared/services/nasa-api.service';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { MarsModule } from './mars/mars.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    MarsModule
  ],
  providers: [NasaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
