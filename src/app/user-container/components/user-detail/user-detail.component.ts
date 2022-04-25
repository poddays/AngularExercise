import { Component, OnInit } from '@angular/core';
interface IPerson{
  id: number, 
  name: string, 
  surname: string, 
  age: number, 
  birth: Date,
  username: string,
  profilePhotoUrl: string,
  address: IAddress,
  company: ICompany,
  role: roles, 
  gender: genders,
}

interface IAddress {
  city: string;
  street: string;
  postalCode: string;
}
interface ICompany {
  id: number;
  name: string;
  description: string;
  location: IAddress;
}
enum roles {
 staff = 'staff',
 student= 'student',
 manager = 'manager',
 admin = 'admin',

}
enum genders {
  male = 'male', 
  female= 'female', 
  other= 'other',
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  person1: IPerson = {
    id: 3487,
    name: "Mario",
    surname:"Rossi", 
    age: 30, 
    username: "MarioRossi90",
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    birth: new Date(95,11,14),
    role: roles.staff,
    gender: genders.male,
    address: {
      city: "Roma",
      street: "Via Roma", 
      postalCode: "0010",
    },
    company:{
      id: 121,
      name: "Develhope",
      description: "La migliore",
      location: {
        city: "Catania",
        street: "Via Catania",
        postalCode: "20298"
      },
    },
  }

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
