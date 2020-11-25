import { Component } from '@angular/core';
import { ContactPerson} from './components/reactive-form-contact-persons/contact-person/models/contact-person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShown = false;
  contactPersons: ContactPerson[] = [
    {
      identity: 27253954,
      identityType: 'IDENTITY_NUMBER',
      firstName: 'ישראל 3954',
      lastName: 'ישראלי',
      email: 'mail@mail.co.il',
      address: {
        cityName: 'פתח תקווה',
        streetName: 'היצירה',
        zipCode: 70300,
        cellPhone: 545350665,
      },
      deliveryFlag: null,
      preferredContactMeans: [2, 3]
    },
    {
      identity: 319590527,
      identityType: 'PASSPORT',
      firstName: 'נועה',
      lastName: 'שביל',
      email: 'maildd@mail.co.il',
      address: {
        cityName: 'פתח תקווה',
        streetName: 'היצירה',
        zipCode: 70300,
        cellPhone: 545350665,
      },
      deliveryFlag: null,
      preferredContactMeans: [1, 3]
    }
  ];
}
