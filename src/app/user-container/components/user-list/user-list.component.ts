import { Component, OnInit } from '@angular/core';
import { IUser,IAddress,ICompany,roles,genders } from "../../../models/IUser-interface";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
 persons!: IUser[];

 
 
  constructor() { 
  this.persons = [
    {
      id: 3487,
      name: 'Mario',
      surname: 'Rossi',
      age: 25,
      birth: new Date(95,14,2),
      address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
      },
      role: roles.staff,
      username: 'MarioRossi80',
      profilePhotoUrl: 'https://bit.ly/3yRngEP',
      gender: genders.male
    },
    {
      id: 12312,
      name: 'Maria',
      surname: 'Rossa',
      age: 26,
      birth: new Date(94,10,11),
      address: {
        city: 'Palermo',
        street: 'Via Palermo 10',
        postalCode: '90100'
      },
      role: roles.manager,
      username: 'MariaRossa94',
      profilePhotoUrl: 'https://bit.ly/3DWWxuj',
      gender: genders.female
    },
    {
      id: 45645,
      name: 'Elis',
      surname: 'Miao',
      age: 5,
      birth: new Date(15,5,8),
      address: {
        city: 'Palermo',
        street: 'Via Palermo 120',
        postalCode: '90100'
      },
      role: roles.admin,
      username: 'ElisMiao',
      profilePhotoUrl: 'https://bit.ly/3zU6iH3',
      gender: genders.female
    }
  ]
  }


  deleteElement(name:any){
    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i]['name'] == name) {
        this.persons.splice(i,1)
      }
    }
  }

  ngOnInit(): void {
  }

}
