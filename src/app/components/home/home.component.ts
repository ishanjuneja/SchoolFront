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
import { AuthService } from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  role:String;
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
  selected:any;
  startDate:any;
  constructor(private authService:AuthService,private spinnerService: Ng4LoadingSpinnerService,
    private router: Router, private _formBuilder: FormBuilder, private studentService:StudentService,private _snackBar: MatSnackBar) {
      
      if(this.router.getCurrentNavigation().extras.state){
        this.id=this.router.getCurrentNavigation().extras.state.id
      
        this.studentService.getSelectedStudent(this.id).subscribe(
                (res:any)=>{
                  console.log(res);
                  this.classChange(res.admissionDetail.admissionClass)
                  this.student=res as Student;

                },
                err=>{
                  console.log(err)
                }
              )
    }
      
      this.authService.getRole().subscribe((res: any) => {
      },
        err => {
          var role: String = err.error.text;
          this.spinnerService.hide();
          if (!role.startsWith('SUPER_ADMIN')) {
            this.router.navigate(['']);
          }
        });
  
    }

  
  ngOnInit() {
    this.initClasses();
    this.initForm();
    this.onChange('N');
  }

initForm(){
  this.fifthFormGroup = new FormGroup({handicapControl:new FormControl(),fifthCtrl:new FormControl()});
}
  initClasses() {
    this.classes = [
      { value: '9', viewValue: '9th' }, { value: '10', viewValue: '10th' },
      { value: '11', viewValue: '11th' }, { value: '12', viewValue: '12th' }];
  }

  classChange(event) {
    this.streams = [];
    if (Number(event) <= 10) {
      this.streams = [
        { value: 'general', viewValue: 'General (Sanskrit)' },
        { value: 'homeScience', viewValue: 'Home Science (Beauty/Wellness)' }];
    } else {
      this.streams = [
        { value: 'art', viewValue: 'Art' },
        { value: 'commerce', viewValue: 'Commerce' },
        { value: 'science', viewValue: 'Science (Bio/Math)' },
        { value: 'homeSchience', viewValue: 'Home Science (Beauty/Health)' }];
    }
  }

saveStudent(){
  this.spinnerService.show();
  console.log(this.student);
  this.studentService.saveStudent(this.student).subscribe(
    res=>{
      console.log(res);
      this.spinnerService.hide();
      // alert("Save ")
      this._snackBar.open("Saved Successfuly", "Ok", {
      duration: 2000,
    });
      
    },
    err=>{
      console.log(err)
    }
  )
}

onChange(event){
  if(event.value=='Y'){
    this.isPhysicallyDisabled = true;
  }
  else{
    this.isPhysicallyDisabled=false;
  }
  this.fifthFormGroup.controls['handicapControl'].valueChanges.subscribe(value=>{
    this.isPhysicallyDisabled=value=='Y'?true:false;
  })
}
}