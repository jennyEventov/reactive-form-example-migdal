import {FormArray, FormControl} from '@angular/forms';
import {ContactPersonsArray} from './contact-persons-array.model';

export class ContactPersonsArrayForm {
  contactPersons = new FormArray([]);

  constructor(form: ContactPersonsArray) {
    if (form.contactPersons) {
      this.contactPersons.setValue([form.contactPersons]);
    }
  }

}
