import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Address, ContactPerson} from './contact-person.model';
import {AddressForm} from '../address-form/model/address-form.model';
import * as _ from 'underscore';

interface IndexSignature {
  [key: string]: AbstractControl;
}

export class ContactPersonForm implements IndexSignature {
  [key: string]: AbstractControl;

  identity = new FormControl();
  identityType = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
  address = new FormGroup(new AddressForm(new Address()));
  deliveryFlag = new FormControl();
  preferredContactMeans = new FormArray([]);

  constructor(contactPerson: ContactPerson) {
if (contactPerson) {
      this.identity.patchValue(contactPerson.identity);
      this.identity.setValidators([Validators.required]);
      this.identityType.patchValue(contactPerson.identityType);
      this.firstName.patchValue(contactPerson.firstName);
      this.lastName.patchValue(contactPerson.lastName);
      this.email.patchValue(contactPerson.email);
      this.email.setValidators([Validators.required, Validators.email]);
      this.deliveryFlag.patchValue(contactPerson.deliveryFlag);
      if (contactPerson.address) {
        this.address.patchValue(contactPerson.address);
      }
      if (contactPerson.preferredContactMeans) {
        this.preferredContactMeans = new FormArray(claimContactPersonMeansLookup.map(contactPersonMean => {
          return  _.contains(contactPerson.preferredContactMeans, contactPersonMean.code) ? new FormControl(true) : new FormControl(false);
        }));
      }
    }
  }

}

