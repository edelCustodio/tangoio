
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { StockData } from './stockData/stockData.component';
//Angular Router Module
import { RouterModule, Router } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { APP_CONFIG } from 'src/config/app.config';
import { environment } from 'src/environments/environment';
import { StockDataService } from './services/stock-data.service';


@NgModule({
  declarations: [
    AppComponent,
    StockData
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component: StockData }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment.configuration },
    StockDataService
  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
