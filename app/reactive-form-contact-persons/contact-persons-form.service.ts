import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ContactPerson} from './contact-person/models/contact-person.model';
import * as _ from 'underscore';
import {ContactPersonForm} from './contact-person/models/contact-person-form.model';
import {ContactPersonsArrayForm} from './models/contact-persons-array-form.model';
import {ContactPersonsArray} from './models/contact-persons-array.model';

@Injectable()
export class ContactPersonsFormService {

  private contactPersonsForm: BehaviorSubject<FormGroup | undefined> =
    new BehaviorSubject(this.fb.group(
      new ContactPersonsArrayForm(new ContactPersonsArray())
    ));

  contactPersonsForm$: Observable<FormGroup> = this.contactPersonsForm.asObservable();
  claimContactPersonMeansLookup: Array<any> = [
    {code: 1, value: 'פקס'},
    {code: 2, value: 'דואר ישראל'},
    {code: 3, value: 'דואר רשום'},
    {code: 4, value: 'דוא"ל מאובטח'},
    {code: 5, value: 'תא סוכן'},
  ];

  constructor(private fb: FormBuilder) {}

  createContactPersonsForm(contactPersons: ContactPerson[]) {
    const contactPersonsForm = this.contactPersonsForm.getValue();
    const contactPersonsArray = contactPersonsForm.get('contactPersons') as FormArray;
    _.forEach(contactPersons, (contactPerson: ContactPerson) => {
      contactPersonsArray.push(
        this.fb.group(
          new ContactPersonForm(contactPerson)
        )
      );
    });
    _.forEach(contactPersonsArray.controls, (contactPersonForm) => {
      const preferredContactMeans = contactPersonForm.get('preferredContactMeans') as FormArray;
      contactPersonForm.controls.preferredContactMeans = this.buildPreferredContactMeans(preferredContactMeans.value, this.claimContactPersonMeansLookup);
    });
    this.contactPersonsForm.next(contactPersonsForm);
  }

  addContactPerson() {
    const contactPersonsForm = this.contactPersonsForm.getValue();
    const contactPersonsArray = contactPersonsForm.get('contactPersons') as FormArray;
    contactPersonsArray.push(
      this.fb.group(
        new ContactPersonForm(new ContactPerson())
      )
    );
    this.contactPersonsForm.next(contactPersonsForm);
  }

  deleteContactPerson(i: number) {
    const contactPersonsForm = this.contactPersonsForm.getValue();
    const contactPersonsArray = contactPersonsForm.get('contactPersons') as FormArray;
    contactPersonsArray.removeAt(i);
    this.contactPersonsForm.next(contactPersonsForm);
  }

  private buildPreferredContactMeans(preferredContactMeans: any[], claimContactPersonMeansLookup: any[]) {
    const arr = claimContactPersonMeansLookup.map(contactPersonMean => {
      return  _.contains(preferredContactMeans, contactPersonMean.code) ? this.fb.control(true) : this.fb.control(false);
    });
    return this.fb.array(arr);
  }

}
