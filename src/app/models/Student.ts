import { StudentDetail } from './StudentDetail';
import { AdmissionDetail } from './AdmissionDetail';
import { BankDetail } from './BankDetail';
import { AddressDetail } from './AddressDetail';

export class Student {
    id: Number;
    firstName: String;
    lastName: String;
    dob: String;
    phoneNumber: String;
    email: String;
    studentDetail: StudentDetail;
    admissionDetail: AdmissionDetail;
    bankDetail: BankDetail;
    addresses: AddressDetail[];
    constructor() {
        this.studentDetail = new StudentDetail();
        this.admissionDetail = new AdmissionDetail();
        this.bankDetail = new BankDetail();
        var permanentAddress = new AddressDetail();
        permanentAddress.isPermanent = 1;
        var residentialAddress = new AddressDetail();
        residentialAddress.isPermanent = 0;
        this.addresses = [permanentAddress, residentialAddress];
    }
}