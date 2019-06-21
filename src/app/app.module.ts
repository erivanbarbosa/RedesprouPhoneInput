import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneInputComponent } from './app/phone-input/phone-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask'


@NgModule({
  declarations: [
    AppComponent,
    PhoneInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
