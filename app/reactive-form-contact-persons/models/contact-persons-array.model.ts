import {ContactPerson} from '../contact-person/models/contact-person.model';

export class ContactPersonsArray {
  contactPersons: ContactPerson[];

  constructor(contactPersons?: ContactPerson[]) {
    this.contactPersons = contactPersons;
  }
}
