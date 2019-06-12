import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dropdownList = [
    { id: "district", "itemName": "district" },
    { id: "tehsil", "itemName": "tehsil" },
    { id: "colony", "itemName": "colony" },
    { id: "pincode", "itemName": "pincode" },
    { id: "isPermanent", "itemName": "isPermanent" },
    { id: "admissionType", "itemName": "" },
    { id: "admissionClass", "itemName": "" },
    { id: "admissionCategory", "itemName": "" },
    { id: "scholarNumber", "itemName": "" },
    { id: "year", "itemName": "" },
    { id: "enrollmentNo", "itemName": "" },
    { id: "feeReceiptNo", "itemName": "" },
    { id: "familyId", "itemName": "" },
    { id: "accountNumber", "itemName": "" },
    { id: "ifscCode", "itemName": "" },
    { id: "bankName", "itemName": "" },
    { id: "firstName", "itemName": "" },
    { id: "lastName", "itemName": "" },
    { id: "dob", "itemName": "" },
    { id: "phoneNumber", "itemName": "" },
    { id: "email", "itemName": "" },
    { id: "sssmid", "itemName": "" },
    { id: "familyId", "itemName": "" },
    { id: "aadharNumber", "itemName": "" },
    { id: "nominationNumber", "itemName": "" },
    { id: "category", "itemName": "" },
    { id: "categoryName", "itemName": "" },
    { id: "religion", "itemName": "" },
    { id: "fathersOccupation", "itemName": "" },
    { id: "totalIncome", "itemName": "" },
    { id: "physicallyDisabled", "itemName": "" },
    { id: "physicallyDisabledType", "itemName": "" },
    { id: "physicallyDisabledPercentage", "itemName": "" },
    { id: "rationCard", "itemName": "" },
    { id: "rationCardNumber", "itemName": "" },
    { id: "rationCardIssueDate", "itemName": "" },
    { id: "fatherName", "itemName": "" },
    { id: "motherName", "itemName": "" },
    { id: "primaryPhone", "itemName": "" },
    { id: "secondaryPhone", "itemName": "" }
  ];

  dropdownSettings = {
    singleSelection: false,
    text: "Select Countries",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class"
  };
  constructor() { }

  ngOnInit() {
  }

}
