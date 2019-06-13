import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Student';
import { Router } from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})


export class StudentListComponent implements OnInit {

    displayedColumns: string[] = ['sNo','firstName', 'lastName', 'class','enrollmentNo','id'];
    studentList:Student[];

    constructor(private studentService:StudentService,private router: Router) { }
  
  ngOnInit() {
      this.getAllUsersList();
  }
  
  getAllUsersList() {
      this.studentService.findAllStudent().subscribe((res) => {
         this.studentList = res as Student[];
      },
        err => {
          console.log('Error', err);
        })
    }
  
  getStudentInfo(id){
      this.router.navigate(['home'], { state: { id: id } });
  }

}


