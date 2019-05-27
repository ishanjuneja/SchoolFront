import { Role } from "./role";

export class User {
    id: Number;
    fullname: String;
    email: String;
    roles: Role[];
    isActive: Number;
    contact: String;
    organization: String;
    regDate: String;
    license: Number;
}