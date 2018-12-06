import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderEGComponent } from './headerEG/headerEG.component';
import { FooterEGComponent } from './footerEG/footerEG.component';
import { Tab1Component } from './tab1/tab1.component';

import { DropdownDirective } from './sahred/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderEGComponent,
    FooterEGComponent,
    Tab1Component,
    DropdownDirective
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
