export class User {
  id?: string;
  fullName: string;
  username: string;
  description: string;
  profileImageUrl: string;
  bannerImageUrl: string;
  email: string;
  password: string;
  age: number;
  birthday: Date;
  isSpecialistUser: boolean;
  cvUrl: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    id: string,
    fullName: string,
    username: string,
    description: string,
    profileImageUrl: string,
    bannerImageUrl: string,
    email: string,
    password: string,
    age: number,
    birthday: Date,
    isSpecialistUser: boolean,
    cvUrl: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.fullName = fullName;
    this.username = username;
    this.description = description;
    this.profileImageUrl = profileImageUrl;
    this.bannerImageUrl = bannerImageUrl;
    this.email = email;
    this.password = password;
    this.age = age;
    this.birthday = birthday;
    this.isSpecialistUser = isSpecialistUser;
    this.cvUrl = cvUrl;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
