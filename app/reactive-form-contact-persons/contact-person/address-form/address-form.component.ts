import {Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  @Input() addressForm: FormGroup;
  isDisabled = true;

  constructor() { }

  updateAddress() {
    this.isDisabled = false;
  }

}
