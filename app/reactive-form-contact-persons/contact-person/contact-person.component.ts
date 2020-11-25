import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPersonComponent implements OnInit {

  @Input() contactPersonForm: FormGroup;
  @Input() index: number;
  @Input() claimContactPersonMeansLookup: any[];
  @Output() deleteContactPerson: EventEmitter<number> = new EventEmitter();
  identityTypes: Array<{code: string, description: string}> = [
    { code: 'IDENTITY_NUMBER', description: 'ת.ז.' },
    { code: 'PASSPORT', description: 'דרכון' },
    { code: 'INSURED_NUMBER', description: 'קוד מבוטח' },
    { code: 'COMPANY', description: 'קוד מפעל' }
  ];
  address: FormGroup;
  preferredContactMeans: FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.address = this.contactPersonForm.get('address') as FormGroup;
  }

  delete() {
    this.deleteContactPerson.emit(this.index);

  }

  compareFn(optionOne, optionTwo): boolean {
      return optionOne === optionTwo;
  }

  get preferredContactMeansFormArray() {
    return this.contactPersonForm.controls.preferredContactMeans as FormArray;
  }

}
