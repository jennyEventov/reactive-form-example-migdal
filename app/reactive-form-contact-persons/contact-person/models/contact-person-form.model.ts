import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Address, ContactPerson} from './contact-person.model';
import {AddressForm} from '../address-form/model/address-form.model';

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
      this.identity.setValue(contactPerson.identity);
      this.identity.setValidators([Validators.required]);
      this.identityType.setValue(contactPerson.identityType);
      this.firstName.setValue(contactPerson.firstName);
      this.lastName.setValue(contactPerson.lastName);
      this.email.setValue(contactPerson.email);
      this.email.setValidators([Validators.required, Validators.email]);
      this.deliveryFlag.setValue(contactPerson.deliveryFlag);
      if (contactPerson.address) {
        this.address.setValue(contactPerson.address);
      }
      if (contactPerson.preferredContactMeans) {
        contactPerson.preferredContactMeans.forEach((preferredContactMean: any) => {
          this.preferredContactMeans.push(new FormControl(preferredContactMean));
        });
      }
    }
  }

}

