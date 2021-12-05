import { XmlParser } from './helpers/xml-parser';
import { BGGService } from './bgg.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Mapper } from './helpers/mapper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BGGService, XmlParser, Mapper],
  bootstrap: [AppComponent],
})
export class AppModule { }
