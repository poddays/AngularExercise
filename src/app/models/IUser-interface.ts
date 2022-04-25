export interface IUser{
    id: number, 
    name: string, 
    surname: string, 
    age: number, 
    birth: Date,
    username: string,
    profilePhotoUrl: string,
    address: IAddress,
    company?: ICompany,
    role: roles, 
    gender: genders,
  }
  
  export interface IAddress {
    city: string;
    street: string;
    postalCode: string;
  }
  export interface ICompany {
    id: number;
    name: string;
    description: string;
    location: IAddress;
  }
  export enum roles {
   staff = 'staff',
   student= 'student',
   manager = 'manager',
   admin = 'admin',
  
  }
  export enum genders {
    male = 'male', 
    female= 'female', 
    other= 'other',
  }