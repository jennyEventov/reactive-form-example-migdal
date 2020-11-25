import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ContactPersonsFormService} from './contact-persons-form.service';

@Component({
  selector: 'app-contact-persons',
  templateUrl: './contact-persons.component.html',
})
export class ContactPersonsComponent implements OnInit, OnDestroy {

  @Input() contactPersonsInput;

  contactPersonsForm: FormGroup;
  contactPersonsFormSub: Subscription;
  contactPersons: FormArray;
  claimContactPersonMeansLookup: any[];

  constructor(private contactPersonsFormService: ContactPersonsFormService) { }

  ngOnInit() {
    this.claimContactPersonMeansLookup = this.contactPersonsFormService.claimContactPersonMeansLookup;
    this.contactPersonsFormService.createContactPersonsForm(this.contactPersonsInput);
    this.contactPersonsFormSub = this.contactPersonsFormService.contactPersonsForm$
      .subscribe(contactPersons => {
        this.contactPersonsForm = contactPersons;
        this.contactPersons = this.contactPersonsForm.get('contactPersons') as FormArray;
      });
  }

  ngOnDestroy() {
    this.contactPersonsFormSub.unsubscribe();
  }

  addContactPerson() {
    this.contactPersonsFormService.addContactPerson();
  }

  deleteContactPerson(index: number) {
    this.contactPersonsFormService.deleteContactPerson(index);
  }

  saveTeam() {
    console.log('team saved!');
    console.log(this.contactPersonsForm.value);
  }

}
