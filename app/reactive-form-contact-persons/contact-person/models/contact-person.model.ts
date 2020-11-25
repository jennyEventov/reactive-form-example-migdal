export class ContactPerson {
  identity: number;
  identityType: string;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  deliveryFlag: boolean;
  preferredContactMeans: Array<any>;

  constructor(identity?: number, identityType?: string, firstName?: string, lastName?: string, email?: string, address?: Address, deliveryFlag?: boolean, preferredContactMeans?: Array<any>) {
    this.identity = identity;
    this.identityType = identityType;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.deliveryFlag = deliveryFlag;
    this.preferredContactMeans = preferredContactMeans;
  }
}

export class Address {
  cityName: string;
  streetName: string;
  zipCode: number;
  cellPhone: number;

  constructor(cityName?: string, streetName?: string, zipCode?: number, cellPhone?: number) {
    this.cityName = cityName;
    this.streetName = streetName;
    this.zipCode = zipCode;
    this.cellPhone = cellPhone;
  }
}
