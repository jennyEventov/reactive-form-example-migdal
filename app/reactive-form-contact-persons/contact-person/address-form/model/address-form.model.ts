import { FormControl, AbstractControl, Validators } from '@angular/forms';
import {Address} from '../../models/contact-person.model';

interface IndexSignature {
  [key: string]: AbstractControl;
}

export class AddressForm implements IndexSignature {
  [key: string]: AbstractControl;

  cityName = new FormControl();
  streetName = new FormControl();
  zipCode = new FormControl();
  cellPhone = new FormControl();

  constructor(address: Address) {
    if (address) {
      this.cityName.setValue(address.cityName);
      this.streetName.setValue(address.streetName);
      this.zipCode.setValue(address.zipCode);
      this.zipCode.setValidators(Validators.required);
      this.cellPhone.setValue(address.cellPhone);
    }
  }
}
