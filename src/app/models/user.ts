export class User {
  id: string;
  firstName: string;
  lastName: string;
  profileImg: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  isSubscribed?: boolean;

  constructor(id: string, firstName: string, lastName: string, profileImg: string, email: string, password: string, phone: string, role: string, isSubscribed?: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profileImg = profileImg;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.role = role;
    this.isSubscribed = isSubscribed;
  }
}
