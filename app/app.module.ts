import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactPersonsComponent } from './components/reactive-form-contact-persons/contact-persons.component';
import {ContactPersonsFormService} from './components/reactive-form-contact-persons/contact-persons-form.service';
import { ContactPersonComponent } from './components/reactive-form-contact-persons/contact-person/contact-person.component';
import { AddressFormComponent } from './components/reactive-form-contact-persons/contact-person/address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPersonsComponent,
    ContactPersonComponent,
    AddressFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ContactPersonsFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
