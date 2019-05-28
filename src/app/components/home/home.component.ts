import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from '../../models/user';
import { SuperAdminService } from '../../services/super-admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Role } from '../../models/role';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';

export interface SelectType {
  value: string;
  viewValue: string;
}
export class DatepickerStartViewExample {
  startDate = new Date(1990, 0, 1);
}

 
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allUsers: User[];
  roles: Role[];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  // selectedValue: string;
  streams: SelectType[] = [];
  classes: SelectType[] = [];

  student:Student = new Student();

  constructor(private superAdminService: SuperAdminService, private spinnerService: Ng4LoadingSpinnerService,
    private router: Router, private _formBuilder: FormBuilder, private studentService:StudentService) {
  }

  ngOnInit() {

    this.getApplicationRoles();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });

    this.initClasses();
  }


  initClasses() {
    this.classes = [
      { value: '9', viewValue: '9th' }, { value: '10', viewValue: '10th' },
      { value: '11', viewValue: '11th' }, { value: '12', viewValue: '12th' }];
  }



  getApplicationRoles() {
    this.superAdminService.getAppRoles().subscribe((res: Role[]) => {
      this.roles = res;
    },
      err => {
        console.log('Error', err);
      })
  }




  classChange(event) {
    this.streams = [];
    if (Number(event) <= 10) {
      this.streams = [
        { value: 'general', viewValue: 'General (Sanskrit)' },
        { value: 'homeSchience', viewValue: 'Home Science (Beauty/Wellness)' }];
    } else {
      this.streams = [
        { value: 'art', viewValue: 'Art' },
        { value: 'commerce', viewValue: 'Commerce' },
        { value: 'science', viewValue: 'Science (Bio/Math)' },
        { value: 'homeSchience', viewValue: 'Home Science (Beauty/Health)' }];
    }
  }

saveStudent(){
  console.log(this.student);
  this.studentService.saveStudent(this.student).subscribe(
    res=>{
      console.log(res);
    },
    err=>{
      console.log(err)
    }
  )
}
}