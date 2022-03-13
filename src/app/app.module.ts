import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { MatFormFieldModule } from '@angular/material/form-field/form-field-module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,MatFormFieldModule ],
  declarations: [AppComponent, HelloComponent, CurrencyInputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
