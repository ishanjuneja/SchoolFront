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
  sixFormGroup: FormGroup;
  streams: SelectType[] = [];
  classes: SelectType[] = [];
  isPhysicallyDisabled:Boolean=false;
  student:Student = new Student();
  id:number;

  constructor(private superAdminService: SuperAdminService, private spinnerService: Ng4LoadingSpinnerService,
    private router: Router, private _formBuilder: FormBuilder, private studentService:StudentService) {
  
  if(this.router.getCurrentNavigation().extras.state){
      this.id=this.router.getCurrentNavigation().extras.state.id
      console.log('--------'+this.id);
    //  this.studentService.getSelectedStudent(id);
      
      this.studentService.getSelectedStudent(this.id).subscribe(
              res=>{
                console.log(res);
                this.student=res as Student;
              },
              err=>{
                console.log(err)
              }
            )
  }
  
  }

  
  ngOnInit() {
   
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
    this.sixFormGroup = this._formBuilder.group({
        sixCtrl: ['', Validators.required]
    });
    

    this.initClasses();
    this.initForm();
    this.onChange();
    
  }

  initStudentByStudentList(stud:Student){
      this.student=stud;
  }
  
  
initForm(){
  this.fifthFormGroup = new FormGroup({handicapControl:new FormControl(),fifthCtrl:new FormControl()});
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

onChange(){
  this.fifthFormGroup.controls['handicapControl'].valueChanges.subscribe(value=>{
    this.isPhysicallyDisabled=value=='Y'?true:false;
  })
}
}